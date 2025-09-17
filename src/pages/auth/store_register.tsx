// in src/pages/auth/store_register.tsx

import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

const StoreRegistrationPage = () => {
    return (
        <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
            <Card className="w-full max-w-lg">
                <CardHeader>
                    <CardTitle className="text-2xl text-center">Register Your Business</CardTitle>
                    <CardDescription className="text-center">Provide your store's details to get listed on SOKALO.</CardDescription>
                </CardHeader>
                <CardContent>
                    <form>
                        <div className="grid gap-4">
                            <div className="grid gap-2">
                                <Label htmlFor="officialName">Official Store Name</Label>
                                <Input id="officialName" placeholder="e.g., FreshMart Supermarket" required />
                            </div>
                            <div className="grid gap-2">
                                <Label htmlFor="address">Full Address</Label>
                                <Input id="address" placeholder="e.g., 748 Simbock, Yaoundé" required />
                            </div>
                             <div className="grid grid-cols-2 gap-4">
                                <div className="grid gap-2">
                                    <Label htmlFor="contactEmail">Contact Email</Label>
                                    <Input id="contactEmail" type="email" placeholder="contact@freshmart.com" required />
                                </div>
                                <div className="grid gap-2">
                                    <Label htmlFor="contactPhone">Contact Phone</Label>
                                    <Input id="contactPhone" placeholder="+237 6XX XXX XXX" required />
                                </div>
                            </div>
                            <div className="grid gap-2">
                                <Label>Store Category</Label>
                                <Select>
                                    <SelectTrigger>
                                        <SelectValue placeholder="Select a category" />
                                    </SelectTrigger>
                                    <SelectContent className='bg-white'>
                                        <SelectItem value="supermarket">Supermarket</SelectItem>
                                        <SelectItem value="electronics">Electronics</SelectItem>
                                        <SelectItem value="clothing">Clothing</SelectItem>
                                    </SelectContent>
                                </Select>
                            </div>
                             <div className="grid gap-2">
                                <Label htmlFor="verificationDocuments">Verification Documents (e.g., Trade Register)</Label>
                                <Input id="verificationDocuments" type="file" required />
                            </div>
                            <Button type="submit" className="w-full">
                                Submit for Verification
                            </Button>
                            <Link to="/register" className="text-center text-sm underline">
                                Looking to create a personal account? Sign up here.
                            </Link>
                        </div>
                    </form>
                </CardContent>
            </Card>
        </div>
    );
};

export default StoreRegistrationPage;