// in src/pages/auth/register.tsx
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '@/hooks/useAuth';
import { register, type RegisterData } from '../../services/authService';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

const RegistrationPage = () => {
    const { login } = useAuth();
    const navigate = useNavigate();
    const [formData, setFormData] = useState<RegisterData>({
        userName: '',
        email: '',
        password: '',
        password_confirmation: '',
        role: 'consumer',
    });
    const [error, setError] = useState<string | null>(null);
    const [loading, setLoading] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleRoleChange = (value: 'consumer' | 'store_owner') => {
        setFormData({ ...formData, role: value });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setError(null);

        if (formData.password !== formData.password_confirmation) {
            setError("Passwords do not match.");
            setLoading(false);
            return;
        }

        try {
            const data = await register(formData);
            login(data.access_token); // Update the global auth state

            // Redirect based on the role they chose
            if (formData.role === 'store_owner') {
                navigate('/business'); // Or to a "create your store" page
            } else {
                navigate('/'); // Redirect consumers to the home page
            }
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        } catch (err: any) {
            // Handle validation errors from the API
            const errors = err.response?.data?.email || [];
            setError(errors[0] || 'Registration failed. Please try again.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
            <Card className="w-full max-w-md">
                <CardHeader>
                    <CardTitle className="text-2xl text-center">Create Your SOKALO Account</CardTitle>
                    <CardDescription className="text-center">Enter your information to get started.</CardDescription>
                </CardHeader>
                <CardContent>
                    <form onSubmit={handleSubmit}>
                        <div className="grid gap-4">
                            <div className="grid gap-2">
                                <Label htmlFor="userName">Full Name</Label>
                                <Input id="userName" name="userName" required onChange={handleChange} />
                            </div>
                            <div className="grid gap-2">
                                <Label htmlFor="email">Email</Label>
                                <Input id="email" name="email" type="email" required onChange={handleChange} />
                            </div>
                            <div className="grid gap-2">
                                <Label htmlFor="password">Password</Label>
                                <Input id="password" name="password" type="password" required onChange={handleChange} />
                            </div>
                            <div className="grid gap-2">
                                <Label htmlFor="password_confirmation">Confirm Password</Label>
                                <Input id="password_confirmation" name="password_confirmation" type="password" required onChange={handleChange} />
                            </div>
                            <div className="grid gap-2">
                                <Label>Account Type</Label>
                                <Select onValueChange={handleRoleChange} defaultValue="consumer">
                                    <SelectTrigger><SelectValue /></SelectTrigger>
                                    <SelectContent className='bg-white'>
                                        <SelectItem value="consumer">Consumer</SelectItem>
                                        <SelectItem value="store_owner">Store Owner</SelectItem>
                                    </SelectContent>
                                </Select>
                            </div>
                            {error && <p className="text-sm text-red-500">{error}</p>}
                            <Button type="submit" className="w-full" disabled={loading}>
                                {loading ? 'Creating Account...' : 'Create Account'}
                            </Button>
                        </div>
                        <div className="mt-4 text-center text-sm">
                            Already have an account?{' '}
                            <Link to="/login" className="underline">Login</Link>
                        </div>
                    </form>
                </CardContent>
            </Card>
        </div>
    );
};

export default RegistrationPage;