// in src/pages/public/public_landing.tsx
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { type Store, getStores } from '../../services/storeService';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ShoppingCart, Search, Store as StoreIcon, Star } from 'lucide-react';
import { motion } from 'framer-motion';
import { Carousel, CarouselItem } from '../../components/ui/carousel';

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
    <div className="bg-background text-foreground pt-16">
        {/* Decorative header background (visible behind header and overlapping sections) */}
        <div className="absolute inset-x-0 top-0 h-[420px] -z-10" style={{ backgroundImage: `url('/images/public landing page wallpaper.jpg')`, backgroundSize: 'cover', backgroundPosition: 'center' }} />
            {/* Hero Section */}
            <section className="relative min-h-[420px] flex items-center">
                {/* Hero carousel as background for the hero section */}
                <div className="absolute inset-0 z-0">
                    <Carousel>
                        <CarouselItem>
                            <div className="relative h-full">
                                <img
                                    src="/images/hero section wp 1.jpg"
                                    alt="Market Hero 1"
                                    className="w-full h-full object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-b from-black/30 to-black/50" />
                            </div>
                        </CarouselItem>
                        <CarouselItem>
                            <div className="relative h-full">
                                <img
                                    src="/images/hero section wp 2.jpg"
                                    alt="Market Hero 2"
                                    className="w-full h-full object-cover"
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
                        Your Local Market, Digitalized
                    </motion.h1>
                    <motion.p 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="text-xl mb-8 max-w-2xl mx-auto text-white"
                    >
                        Discover and shop from the best local stores in Cameroon. SOKALO brings the market to your fingertips.
                    </motion.p>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                    >
                        <Button asChild size="lg" variant="secondary" className="text-lg px-8 py-6 hover:scale-105 transition-transform bg-accent text-white">
                            <Link to="/browse-stores">Browse Stores Now</Link>
                        </Button>
                    </motion.div>
                </div>
            </section>

            {/* How It Works Section (opaque white background so carousel doesn't show through) */}
            <section className="py-24 -mt-20 relative z-20 bg-white">
                <div className="container mx-auto px-4">
                    <motion.h2 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="text-4xl font-bold text-center mb-16 text-black"
                    >
                        How It Works
                    </motion.h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-8 text-center">
                        {[
                            {
                                title: 'Find Your Store',
                                desc: 'Search for your favorite local supermarket or electronics shop.',
                                icon: <Search className="h-8 w-8 text-primary" />
                            },
                            {
                                title: 'Check Availability',
                                desc: "View up-to-date stock information directly from the store's inventory.",
                                icon: <StoreIcon className="h-8 w-8 text-primary" />
                            },
                            {
                                title: 'Compare Prices',
                                desc: 'Quickly compare prices across nearby stores to get the best deal.',
                                icon: <ShoppingCart className="h-8 w-8 text-primary" />
                            },
                            {
                                title: 'Reserve or Notify',
                                desc: 'Reserve items or get notified when stock is restocked.',
                                icon: <Star className="h-8 w-8 text-primary" />
                            },
                            {
                                title: 'Visit & Purchase',
                                desc: 'Head to the store confident that your items are ready for pickup.',
                                icon: <ShoppingCart className="h-8 w-8 text-primary" />
                            }
                        ].map((step, idx) => (
                            <motion.div
                                key={step.title}
                                initial={{ opacity: 0, scale: 0.95 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 1.0, delay: idx * 0.12, ease: 'easeOut' }}
                            >
                                <Card className="border-2 bg-white hover:border-primary transition-all duration-300 text-black">
                                    <CardHeader>
                                        <div className="w-16 h-16 mx-auto bg-primary/10 rounded-full flex items-center justify-center">
                                            {step.icon}
                                        </div>
                                        <CardTitle className="mt-4">{step.title}</CardTitle>
                                    </CardHeader>
                                    <CardContent>
                                        <p className="text-muted-foreground">{step.desc}</p>
                                    </CardContent>
                                </Card>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* User Reviews Section */}
            <section className="py-24 bg-gradient-to-b from-background to-muted">
                <div className="container mx-auto px-4">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.9 }}
                        className="text-4xl font-bold text-center mb-12"
                    >
                        What Our Users Say
                    </motion.h2>

                    <div className="max-w-5xl mx-auto">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            <div className="p-6 bg-white rounded-lg shadow">
                                <div className="flex items-center gap-4">
                                    <img src="/public/user 1.jpg" alt="User 1" className="w-12 h-12 rounded-full object-cover" />
                                    <div>
                                        <div className="font-semibold">Fatou B.</div>
                                        <div className="text-sm text-muted-foreground">Buyer</div>
                                    </div>
                                </div>
                                <p className="mt-4 text-sm">Great selection and fast delivery. Found everything I needed from local shops.</p>
                            </div>
                            <div className="p-6 bg-white rounded-lg shadow">
                                <div className="flex items-center gap-4">
                                    <img src="/public/user 2.jpg" alt="User 2" className="w-12 h-12 rounded-full object-cover" />
                                    <div>
                                        <div className="font-semibold">Simon K.</div>
                                        <div className="text-sm text-muted-foreground">Vendor</div>
                                    </div>
                                </div>
                                <p className="mt-4 text-sm">SOKALO simplified my inventory. More customers are visiting since I joined.</p>
                            </div>
                            <div className="p-6 bg-white rounded-lg shadow">
                                <div className="flex items-center gap-4">
                                    <img src="/public/user 3.jpg" alt="User 3" className="w-12 h-12 rounded-full object-cover" />
                                    <div>
                                        <div className="font-semibold">Amina D.</div>
                                        <div className="text-sm text-muted-foreground">Shop Owner</div>
                                    </div>
                                </div>
                                <p className="mt-4 text-sm">Excellent offline capabilities — my shop keeps running even when the network is spotty.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            
            {/* Featured Stores Section (overlaps wallpaper) */}
            <section className="py-16 bg-white -mt-12 relative z-20">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-bold text-center mb-12">Featured Stores</h2>
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
        </div>
    );
};

export default PublicLandingPage;