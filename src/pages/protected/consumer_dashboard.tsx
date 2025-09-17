// in src/pages/protected/consumer_dashboard.tsx

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";

const ConsumerDashboardPage = () => {
    // Placeholder data we will fetch from the API later
    const user = {
        userName: "Jane Doe",
        email: "jane.doe@example.com",
    };

    const followedStores = [
        { id: 1, name: "FreshMart Supermarket" },
        { id: 2, name: "Digital Oasis Electronics" },
    ];

    return (
        <div className="bg-gray-100 min-h-screen">
            <div className="container mx-auto p-4 md:p-8">
                <div className="grid gap-8 md:grid-cols-3">
                    {/* Left Column: User Profile */}
                    <div className="md:col-span-1">
                        <Card>
                            <CardHeader className="items-center text-center">
                                <Avatar className="h-24 w-24 mb-4">
                                    <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                                    <AvatarFallback>JD</AvatarFallback>
                                </Avatar>
                                <CardTitle>{user.userName}</CardTitle>
                            </CardHeader>
                            <CardContent className="text-center">
                                <p className="text-gray-500">{user.email}</p>
                                <Button variant="outline" className="mt-4">Edit Profile</Button>
                            </CardContent>
                        </Card>
                    </div>

                    {/* Right Column: Followed Stores */}
                    <div className="md:col-span-2">
                        <Card>
                            <CardHeader>
                                <CardTitle>Followed Stores</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <div className="space-y-4">
                                    {followedStores.map(store => (
                                        <div key={store.id} className="flex items-center justify-between p-2 border rounded-lg">
                                            <p className="font-medium">{store.name}</p>
                                            <Button variant="secondary" size="sm">Visit</Button>
                                        </div>
                                    ))}
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ConsumerDashboardPage;