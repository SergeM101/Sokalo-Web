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
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { Star } from "lucide-react";

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

    return (
        <div className="bg-gray-100 min-h-screen">
            <div className="container mx-auto p-4 md:p-8">
                {/* Store Header Section - now uses dynamic data */}
                <Card className="mb-8">
                    <CardHeader>
                        <CardTitle className="text-4xl">{store.officialName}</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p className="text-lg text-gray-600">{store.address}</p>
                        <span className="inline-block bg-blue-100 text-blue-800 text-sm font-semibold mt-4 px-3 py-1 rounded-full">
                            {store.category}
                        </span>
                    </CardContent>
                </Card>

                {/* Customer Reviews Section (will be made dynamic later) */}
                <div>
                    <h2 className="text-3xl font-bold mb-6">Customer Reviews</h2>
                    {/* Placeholder for when we fetch real reviews */}
                    <p>Reviews will be displayed here.</p>
                </div>
            </div>
        </div>
    );
};

export default StoreProfilePage;