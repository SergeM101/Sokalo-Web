/* in src/pages/public/store_profile_view.tsx
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Star } from "lucide-react";

// Placeholder data for a single review
const sampleReview = {
    author: "Jane Doe",
    rating: 5,
    comment: "This is the best supermarket! Always clean and the staff are very helpful.",
    date: "2025-09-16",
};

const StoreProfilePage = () => {
    // We'll replace this with real data from the API later
    const store = {
        officialName: "FreshMart Supermarket",
        address: "748 Simbock, Yaoundé",
        category: "Supermarket",
    };
*/
// Dynamic store profile page that fetches and displays store details based on the store ID in the URL
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { type Store, getStoreById } from '../../services/storeService';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Carousel, CarouselItem } from '@/components/ui/carousel';
import ItemsCardLayout from '@/components/layout/Items_card_layout';
import ReviewsCardLayout from '@/components/layout/Reviews_card_layout';
import PromotionsCardLayout from '@/components/layout/Promotions_card_layout';
import { Star } from 'lucide-react';

const StoreProfilePage = () => {
    // useParams gets the dynamic parameters from the URL.
    // The key 'storeId' matches the ':storeId' in your route.
    const { storeId } = useParams<{ storeId: string }>();
    
    const [store, setStore] = useState<Store | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        // Fetch data only if storeId is available
        if (storeId) {
            const fetchStoreDetails = async () => {
                try {
                    const data = await getStoreById(storeId);
                    setStore(data);
                // eslint-disable-next-line @typescript-eslint/no-unused-vars
                } catch (err) {
                    setError("Failed to load store details.");
                } finally {
                    setLoading(false);
                }
            };
            fetchStoreDetails();
        }
    }, [storeId]); // This effect will re-run if the storeId in the URL changes

    if (loading) {
        return <div className="text-center p-8">Loading store...</div>;
    }

    if (error) {
        return <div className="text-center p-8 text-red-500">{error}</div>;
    }
    
    if (!store) {
        return <div className="text-center p-8">Store not found.</div>;
    }

    // Fallback images until store images are available from the API
    const fallbackImages = [
        '/images/store profile pic 1.jpg',
        '/images/store profile pic 2.jpg',
        '/images/store profile pic 3.jpg'
    ];

    // If the API later returns an images array on the store object, use it. For now we fallback.
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const slides = (store as any)?.images?.length ? (store as any).images : fallbackImages;

    return (
        <div className="bg-gray-100 min-h-screen pt-16">
            {/* Decorative header background (wireframe) */}
            <div className="absolute inset-x-0 top-0 h-48 -z-10" style={{ backgroundImage: `url('/images/public store profile.jpg')`, backgroundSize: 'cover', backgroundPosition: 'center', objectFit: 'contain' }} />

            <div className="container mx-auto p-4 md:p-8">
                {/* Store header (stacked: card above carousel as in wireframe) */}
                <div className="mb-6">
                    <Card className="mb-4">
                        <CardHeader>
                            <CardTitle className="text-2xl">{store.officialName}</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className="text-sm text-muted-foreground mb-2">{store.address}</p>
                            <div className="mb-2">
                                <span className="inline-block bg-blue-100 text-blue-800 text-sm font-semibold px-3 py-1 rounded-full">{store.category}</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Star className="w-5 h-5 text-primary" />
                                <div>
                                    <div className="text-lg font-semibold">4.9</div>
                                    <div className="text-sm text-muted-foreground">(Based on 120 reviews)</div>
                                </div>
                            </div>
                        </CardContent>
                    </Card>

                    <Card>
                        <div className="relative overflow-hidden h-96 md:h-[480px] lg:h-[560px]">
                            <Carousel showDots showArrows interval={4000}>
                                {slides.map((src: string, i: number) => (
                                    <CarouselItem key={i}>
                                        <div className="relative h-full">
                                            <motion.div initial={{ opacity: 0, x: 40 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 1.0, ease: 'easeOut' }} className="w-full h-full">
                                                <img src={src} alt={`Store image ${i + 1}`} className="w-full h-full object-cover" />
                                                <div className="absolute inset-0 bg-gradient-to-b from-black/10 to-black/30 min-w-full h-full" />
                                            </motion.div>
                                        </div>
                                    </CarouselItem>
                                ))}
                            </Carousel>
                        </div>
                        <div className="mt-6" />
                    </Card>
                </div>

                {/* Placeholder sections: Items, Promotions, Reviews (to implement next) */}
                <section className="mb-12">
                    <h2 className="text-2xl font-bold mb-4">Products Sold</h2>
                    {/* Single-column wide item rows */}
                    {/* Sample items - replace with API results later */}
                    {/* eslint-disable-next-line @typescript-eslint/no-var-requires */}
                    {/* Using require to load local images if present */}
                    <ItemsCardLayout items={[
                        { id: 1, title: 'Fresh Baguette', price: 250, image: '/images/item 1 bread.jpg', available: true },
                        { id: 2, title: 'Cabbage', price: 450, image: '/images/item 2 Cabbage.jpg', available: true },
                        { id: 3, title: 'Froot Loops Cereal', price: 1200, image: '/images/Item 3 cereal.jpg', available: false },
                        { id: 4, title: 'Croissant', price: 300, image: '/images/item 4 croisant.jpg', available: true },
                    ]} />
                </section>

                <section className="mb-12">
                    <h2 className="text-2xl font-bold mb-4">Store Promotions</h2>
                    <PromotionsCardLayout promos={[
                        { id: 1, title: 'Weekend Fresh Promo', percentOff: 10, start: '2025-09-25', end: '2025-09-28', description: 'Buy 2 get 10% off on fresh bakery items.' },
                        { id: 2, title: 'Cereal Discount', percentOff: 15, start: '2025-10-01', end: '2025-10-10', description: '15% off selected cereals.' },
                        { id: 3, title: 'Veggie Savings', percentOff: 5, start: '2025-09-20', end: '2025-09-30', description: 'Small discounts on fresh produce.' }
                    ]} />
                </section>

                <section className="mb-12">
                    <h2 className="text-2xl font-bold mb-4">Customer Reviews</h2>
                    <ReviewsCardLayout reviews={[
                        { id: 1, author: 'Paul N.', role: 'Retailer', comment: 'SOKALO helped me digitize my inventory and attract new customers.', date: '2025-08-12', rating: 5, avatar: '/images/store profile pic 1.jpg' },
                        { id: 2, author: 'Amina D.', role: 'Shop Owner', comment: 'The offline features saved my business during network outages.', date: '2025-07-02', rating: 5, avatar: '/images/store profile pic 2.jpg' },
                        { id: 3, author: 'Oumar K.', role: 'Manager', comment: 'Syncing and reporting made tracking staff and cash effortless.', date: '2025-06-22', rating: 5, avatar: '/images/store profile pic 3.jpg' }
                    ]} />
                </section>
            </div>
        </div>
    );
};

export default StoreProfilePage;