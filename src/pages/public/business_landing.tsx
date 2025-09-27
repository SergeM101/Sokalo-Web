// in src/pages/public/business_landing.tsx
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { BarChart2, Package, Users, Star, Settings, RefreshCw } from 'lucide-react';
import { motion } from 'framer-motion';
import { Carousel, CarouselItem } from '../../components/ui/carousel';
import { type Store, getStores } from '../../services/storeService';

const BusinessLandingPage = () => {
    const [featuredStores, setFeaturedStores] = useState<Store[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchStores = async () => {
            try {
                const allStores = await getStores();
                setFeaturedStores(allStores.slice(0, 3));
            } catch (err) {
                console.error('Failed to fetch stores', err);
            } finally {
                setLoading(false);
            }
        };
        fetchStores();
    }, []);

    return (
        <div className="bg-background text-foreground pt-16">
            {/* Decorative header background (visible behind header and overlapping sections) */}
            <div className="absolute inset-x-0 top-0 h-[420px] -z-10" style={{ backgroundImage: `url('/images/public landing page wallpaper.jpg')`, backgroundSize: 'cover', backgroundPosition: 'center' }} />

            {/* Hero Section */}
            <section className="relative min-h-[400px] flex items-center">
                {/* Hero carousel as background for the hero section */}
                <div className="absolute inset-0 z-0">
                    <Carousel>
                        <CarouselItem>
                            <div className="relative h-full">
                                <img
                                    src="/images/bus hero section 1.jpg"
                                    alt="Business Hero 1"
                                    className="w-full h-full object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-b from-black/30 to-black/50" />
                            </div>
                        </CarouselItem>
                        <CarouselItem>
                            <div className="relative h-full">
                                <img
                                    src="/images/business hero section 2.jpg"
                                    alt="Business Hero 2"
                                    className="w-full h-contain object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-b from-black/30 to-black/50" />
                            </div>
                        </CarouselItem>
                    </Carousel>
                </div>

                <div className="container mx-auto px-4 relative z-10 text-center text-white">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-5xl font-bold mb-4 text-blue-500"
                    >
                        Take Full Control of Your Business
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="text-xl mb-8 max-w-2xl mx-auto text-white"
                    >
                        From inventory management to public advertisement, SOKALO provides the tools you need to streamline operations and grow your customer base.
                    </motion.p>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                    >
                        <Button asChild size="lg" variant="secondary" className="text-lg px-8 py-6 hover:scale-105 transition-transform bg-accent text-white">
                            <Link to="/store-register">Get Started Now</Link>
                        </Button>
                    </motion.div>
                </div>
            </section>

            {/* Features Section (original alignment: 3-column cards) */}
            <section className="py-16 -mt-20 relative z-20 bg-white">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-bold text-center mb-12">Features We Provide</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8 text-center">
                        <Card className="h-full">
                            <CardHeader>
                                <Package className="mx-auto h-12 w-12 text-primary" />
                                <CardTitle className="mt-4">Offline-First Inventory</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p>Manage your stock with our resilient desktop app that works even without internet.</p>
                            </CardContent>
                        </Card>
                        <Card className="h-full">
                            <CardHeader>
                                <Users className="mx-auto h-12 w-12 text-primary" />
                                <CardTitle className="mt-4">Public Advertisement</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p>Create a professional online profile to attract new customers and display your products.</p>
                            </CardContent>
                        </Card>
                        <Card className="h-full">
                            <CardHeader>
                                <BarChart2 className="mx-auto h-12 w-12 text-primary" />
                                <CardTitle className="mt-4">Staff Accountability</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p>Use our digital shift reconciliation system to track cash and stock with confidence.</p>
                            </CardContent>
                        </Card>
                        <Card className="h-full">
                            <CardHeader>
                                <Settings className="mx-auto h-12 w-12 text-primary" />
                                <CardTitle className="mt-4">Smart Inventory</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p>Automated reorder suggestions and intelligent categorization to reduce stockouts and waste.</p>
                            </CardContent>
                        </Card>
                        <Card className="h-full">
                            <CardHeader>
                                <RefreshCw className="mx-auto h-12 w-12 text-primary" />
                                <CardTitle className="mt-4">Data Sync Service</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p>Seamless syncing between devices and optional cloud backup to keep your data safe and consistent.</p>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </section>

            {/* Featured Stores Section (from public landing) */}
            <section className="py-16 bg-white -mt-12 relative z-20">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-bold text-center mb-12">Top Featured Stores</h2>
                    {loading ? (
                        <p className="text-center">Loading...</p>
                    ) : (
                        <div className="grid md:grid-cols-3 gap-8">
                            {featuredStores.map((store) => (
                                <Card key={store.storeID} className="overflow-hidden hover:shadow-xl transition-shadow">
                                    <div className="relative h-40 bg-gray-200">
                                        <img src="/images/1 carts.jpg" alt="Store background" className="absolute inset-0 w-full h-full object-cover" />
                                        <div className="absolute inset-0 bg-black/20" />
                                    </div>
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

            {/* Satisfied clients reviews (overlaps wallpaper, white background) */}
            <section className="py-24 -mt-12 relative z-20 bg-white">
                <div className="container mx-auto px-4">
                    <h2 className="text-4xl font-bold text-center mb-12">Satisfied Clients Reviews</h2>
                    <div className="max-w-5xl mx-auto">
                        <div className="grid md:grid-cols-3 gap-6">
                            {[
                                { name: 'Paul N.', role: 'Retailer', comment: 'SOKALO helped me digitize my inventory and attract new customers.' , avatar: '/images/store profile pic 1.jpg', rating: 5 },
                                { name: 'Amina D.', role: 'Shop Owner', comment: 'The offline features saved my business during network outages.', avatar: '/images/store profile pic 2.jpg', rating: 5 },
                                { name: 'Oumar K.', role: 'Manager', comment: 'Syncing and reporting made tracking staff and cash effortless.', avatar: '/images/store profile pic 3.jpg', rating: 5 }
                            ].map((r, i) => (
                                <motion.div key={r.name} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.9, delay: i * 0.12 }}>
                                    <Card className="h-full shadow-lg">
                                        <CardContent>
                                            <div className="flex items-center gap-4 mb-4">
                                                <img src={r.avatar} alt={r.name} className="w-12 h-12 rounded-full object-cover" />
                                                <div>
                                                    <div className="font-semibold">{r.name}</div>
                                                    <div className="text-sm text-gray-500">{r.role}</div>
                                                </div>
                                                <Star className="h-5 w-5 text-yellow-500" />
                                                <div className="text-sm text-gray-500">{r.rating} / 5</div>
                                            </div>
                                            <p className="text-gray-600">{r.comment}</p>
                                        </CardContent>
                                    </Card>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default BusinessLandingPage;