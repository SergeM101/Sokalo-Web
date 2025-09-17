// in src/pages/public/store_profile_view.tsx
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

    return (
        <div className="bg-gray-100 min-h-screen">
            <div className="container mx-auto p-4 md:p-8">
                {/* Store Header Section */}
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

                {/* Customer Reviews Section */}
                <div>
                    <h2 className="text-3xl font-bold mb-6">Customer Reviews</h2>
                    <div className="space-y-6">
                        {/* We'll map over real review data here later */}
                        <Card>
                            <CardHeader className="flex flex-row justify-between items-center">
                                <div>
                                    <CardTitle className="text-xl">{sampleReview.author}</CardTitle>
                                    <p className="text-sm text-gray-500">{sampleReview.date}</p>
                                </div>
                                <div className="flex items-center">
                                    {[...Array(sampleReview.rating)].map((_, i) => (
                                        <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                                    ))}
                                </div>
                            </CardHeader>
                            <CardContent>
                                <p className="text-gray-700">{sampleReview.comment}</p>
                            </CardContent>
                        </Card>
                         {/* Add more sample reviews or map over an array */}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default StoreProfilePage;