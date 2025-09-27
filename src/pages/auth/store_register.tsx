// in src/pages/auth/store_register.tsx

import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { EmailIcon, StoreIcon } from '@/components/icons/form-icons';

const StoreRegistrationPage = () => {
    return (
        <div className="min-h-screen bg-gradient-to-br from-primary/5 via-gray-100 to-gray-50 flex items-center justify-center p-4">
            <Card className="w-full max-w-lg shadow-xl border-0">
                <CardHeader className="space-y-2">
                    <CardTitle className="text-2xl md:text-3xl font-bold text-center bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
                        Register Your Business
                    </CardTitle>
                    <CardDescription className="text-center text-lg">Join SOKALO's growing marketplace</CardDescription>
                </CardHeader>
                <CardContent>
                    <form className="space-y-8">
                        <div className="grid gap-6">
                            <div className="grid gap-3">
                                <Label htmlFor="officialName" className="text-base">Official Store Name</Label>
                                <div className="relative">
                                    <StoreIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-500" />
                                    <Input 
                                        id="officialName" 
                                        placeholder="e.g., FreshMart Supermarket" 
                                        className="pl-10" 
                                        required 
                                    />
                                </div>
                            </div>

                            <div className="grid gap-3">
                                <Label htmlFor="address" className="text-base">Full Address</Label>
                                <div className="relative">
                                    <svg className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                    </svg>
                                    <Input 
                                        id="address" 
                                        placeholder="e.g., 748 Simbock, Yaoundé" 
                                        className="pl-10"
                                        required 
                                    />
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="grid gap-3">
                                    <Label htmlFor="contactEmail" className="text-base">Contact Email</Label>
                                    <div className="relative">
                                        <EmailIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-500" />
                                        <Input 
                                            id="contactEmail" 
                                            type="email" 
                                            placeholder="contact@freshmart.com" 
                                            className="pl-10"
                                            required 
                                        />
                                    </div>
                                </div>
                                <div className="grid gap-3">
                                    <Label htmlFor="contactPhone" className="text-base">Contact Phone</Label>
                                    <div className="relative">
                                        <svg className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                        </svg>
                                        <Input 
                                            id="contactPhone" 
                                            placeholder="+237 6XX XXX XXX" 
                                            className="pl-10"
                                            required 
                                        />
                                    </div>
                                </div>
                            </div>

                            <div className="grid gap-3">
                                <Label className="text-base">Store Category</Label>
                                <Select>
                                    <SelectTrigger className="h-11">
                                        <SelectValue placeholder="Select a category" />
                                    </SelectTrigger>
                                    <SelectContent className="bg-white">
                                        <SelectItem value="supermarket">Supermarket</SelectItem>
                                        <SelectItem value="electronics">Electronics</SelectItem>
                                        <SelectItem value="clothing">Clothing</SelectItem>
                                        <SelectItem value="pharmacy">Pharmacy</SelectItem>
                                        <SelectItem value="restaurant">Restaurant</SelectItem>
                                    </SelectContent>
                                </Select>
                            </div>

                            <div className="grid gap-3">
                                <Label htmlFor="verificationDocuments" className="text-base">
                                    Verification Documents
                                    <span className="text-sm text-gray-500 block mt-1">
                                        Upload your trade register or business license
                                    </span>
                                </Label>
                                <div className="relative">
                                    <svg className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                    </svg>
                                    <Input 
                                        id="verificationDocuments" 
                                        type="file" 
                                        className="pl-10"
                                        required 
                                    />
                                </div>
                            </div>

                            <Button 
                                type="submit" 
                                className="w-full h-11 mt-4 transition-all duration-200 hover:scale-102"
                            >
                                Submit for Verification
                            </Button>
                        </div>

                        <div className="text-center">
                            <Link 
                                to="/register" 
                                className="text-sm text-primary hover:text-primary/80 hover:underline transition-colors"
                            >
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