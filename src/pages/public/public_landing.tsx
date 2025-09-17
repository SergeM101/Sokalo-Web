// in src/pages/public/public_landing.tsx
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { type Store, getStores } from '../../services/storeService';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ShoppingCart, Search, Store as StoreIcon } from 'lucide-react';

const PublicLandingPage = () => {
    const [featuredStores, setFeaturedStores] = useState<Store[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchStores = async () => {
            try {
                // Fetch stores and take the first 3 as "featured"
                const allStores = await getStores();
                setFeaturedStores(allStores.slice(0, 3));
            } catch (error) {
                console.error("Failed to fetch stores:", error);
            } finally {
                setLoading(false);
            }
        };
        fetchStores();
    }, []);

    return (
        <div className="bg-cream text-gray-800">
            {/* Hero Section */}
            <section className="text-center py-20 px-4 bg-white">
                <h1 className="text-5xl font-bold text-primary mb-4">
                    Your Local Market, Digitalized.
                </h1>
                <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
                    Discover and shop from the best local stores in Cameroon. SOKALO brings the market to your fingertips.
                </p>
                <Button asChild size="lg" className="bg-accent hover:bg-green-600">
                    <Link to="/browse-stores">Browse Stores Now</Link>
                </Button>
            </section>

            {/* How It Works Section */}
            <section className="py-16">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-bold text-center mb-12">How It Works</h2>
                    <div className="grid md:grid-cols-3 gap-8 text-center">
                        <Card>
                            <CardHeader>
                                <Search className="mx-auto h-12 w-12 text-primary" />
                                <CardTitle className="mt-4">1. Find Your Store</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p>Search for your favorite local supermarket or electronics shop.</p>
                            </CardContent>
                        </Card>
                        <Card>
                            <CardHeader>
                                <StoreIcon className="mx-auto h-12 w-12 text-primary" />
                                <CardTitle className="mt-4">2. Check Availability</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p>View up-to-date stock information directly from the store's inventory.</p>
                            </CardContent>
                        </Card>
                        <Card>
                            <CardHeader>
                                <ShoppingCart className="mx-auto h-12 w-12 text-primary" />
                                <CardTitle className="mt-4">3. Shop with Confidence</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p>Visit the store knowing exactly what you need is ready for you.</p>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </section>
            
            {/* Featured Stores Section */}
            <section className="py-16 bg-white">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-bold text-center mb-12">Featured Stores</h2>
                    {loading ? (
                        <p className="text-center">Loading...</p>
                    ) : (
                        <div className="grid md:grid-cols-3 gap-8">
                            {featuredStores.map((store) => (
                                <Card key={store.storeID} className="overflow-hidden hover:shadow-xl transition-shadow">
                                    <CardHeader>
                                        <CardTitle>{store.officialName}</CardTitle>
                                    </CardHeader>
                                    <CardContent>
                                        <p className="text-gray-600">{store.address}</p>
                                        <Button asChild className="mt-4 w-full bg-primary hover:bg-blue-700">
                                            <Link to={`/stores/${store.storeID}`}>Visit Store</Link>
                                        </Button>
                                    </CardContent>
                                </Card>
                            ))}
                        </div>
                    )}
                </div>
            </section>
        </div>
    );
};

export default PublicLandingPage;