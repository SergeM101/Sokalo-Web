// in src/pages/public/business_landing.tsx
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { BarChart2, Package, Users } from 'lucide-react';

const BusinessLandingPage = () => {
    return (
        <div className="bg-white text-gray-800">
            {/* Hero Section */}
            <section className="text-center py-20 px-4 bg-cream">
                <h1 className="text-5xl font-bold text-primary mb-4">
                    Take Control of Your Business.
                </h1>
                <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
                    From inventory management to public advertisement, SOKALO provides the tools you need to streamline your operations and grow your customer base.
                </p>
                <Button asChild size="lg" className="bg-accent hover:bg-green-600">
                    <Link to="/register">Get Started Now</Link>
                </Button>
            </section>

            {/* Features Section */}
            <section className="py-16">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-bold text-center mb-12">Features Built For You</h2>
                    <div className="grid md:grid-cols-3 gap-8 text-center">
                        <Card>
                            <CardHeader>
                                <Package className="mx-auto h-12 w-12 text-primary" />
                                <CardTitle className="mt-4">Offline-First Inventory</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p>Manage your stock with our resilient desktop app that works even without internet.</p>
                            </CardContent>
                        </Card>
                        <Card>
                            <CardHeader>
                                <Users className="mx-auto h-12 w-12 text-primary" />
                                <CardTitle className="mt-4">Public Advertisement</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p>Create a professional online profile to attract new customers and display your products.</p>
                            </CardContent>
                        </Card>
                        <Card>
                            <CardHeader>
                                <BarChart2 className="mx-auto h-12 w-12 text-primary" />
                                <CardTitle className="mt-4">Staff Accountability</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p>Use our digital shift reconciliation system to track cash and stock with confidence.</p>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default BusinessLandingPage;