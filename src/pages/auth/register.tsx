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
import { EmailIcon, LockIcon, UserIcon } from '@/components/icons/form-icons';

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
        <div className="min-h-screen bg-gradient-to-br from-primary/5 to-gray-100 flex items-center justify-center p-4">
            <Card className="w-full max-w-md shadow-xl border-0 animate-fade-in hover-scale">
                <CardHeader className="space-y-2 pb-8">
                    <CardTitle className="text-2xl md:text-3xl font-bold text-center bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent animate-gradient">
                        Create Your SOKALO Account
                    </CardTitle>
                    <CardDescription className="text-center text-base">
                        Enter your information to get started.
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <form onSubmit={handleSubmit}>
                        <div className="grid gap-6">
                            <div className="grid gap-3">
                                <Label htmlFor="userName" className="text-base">Full Name</Label>
                                <div className="relative">
                                    <UserIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-500" />
                                    <Input 
                                        id="userName" 
                                        name="userName" 
                                        className="pl-10"
                                        placeholder="John Doe"
                                        required 
                                        onChange={handleChange} 
                                    />
                                </div>
                            </div>
                            <div className="grid gap-3">
                                <Label htmlFor="email" className="text-base">Email</Label>
                                <div className="relative">
                                    <EmailIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-500" />
                                    <Input 
                                        id="email" 
                                        name="email" 
                                        type="email" 
                                        className="pl-10"
                                        placeholder="you@example.com"
                                        required 
                                        onChange={handleChange} 
                                    />
                                </div>
                            </div>
                            <div className="grid gap-3">
                                <Label htmlFor="password" className="text-base">Password</Label>
                                <div className="relative">
                                    <LockIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-500" />
                                    <Input 
                                        id="password" 
                                        name="password" 
                                        type="password" 
                                        className="pl-10"
                                        required 
                                        onChange={handleChange} 
                                    />
                                </div>
                            </div>
                            <div className="grid gap-3">
                                <Label htmlFor="password_confirmation" className="text-base">Confirm Password</Label>
                                <div className="relative">
                                    <LockIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-500" />
                                    <Input 
                                        id="password_confirmation" 
                                        name="password_confirmation" 
                                        type="password" 
                                        className="pl-10"
                                        required 
                                        onChange={handleChange} 
                                    />
                                </div>
                            </div>
                            <div className="grid gap-3">
                                <Label className="text-base">Account Type</Label>
                                <Select onValueChange={handleRoleChange} defaultValue="consumer">
                                    <SelectTrigger className="h-11"><SelectValue /></SelectTrigger>
                                    <SelectContent className='bg-white'>
                                        <SelectItem value="consumer">Consumer</SelectItem>
                                        <SelectItem value="store_owner">Store Owner</SelectItem>
                                    </SelectContent>
                                </Select>
                            </div>
                            {error && (
                                <div className="bg-red-50 border border-red-200 rounded-lg p-3">
                                    <p className="text-sm text-red-600">{error}</p>
                                </div>
                            )}
                            <Button 
                                type="submit" 
                                className={`w-full transition-all duration-200 ${loading ? 'animate-pulse' : 'hover:scale-102'}`} 
                                disabled={loading}
                            >
                                {loading ? (
                                    <span className="flex items-center justify-center">
                                        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                        </svg>
                                        Creating Account...
                                    </span>
                                ) : 'Create Account'}
                            </Button>
                        </div>
                        <div className="mt-6 text-center text-sm">
                            Already have an account?{' '}
                            <Link to="/login" className="text-primary hover:text-primary/80 hover:underline transition-colors">
                                Login
                            </Link>
                        </div>
                    </form>
                </CardContent>
            </Card>
        </div>
    );
};

export default RegistrationPage;