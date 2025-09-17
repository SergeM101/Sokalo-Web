// in src/pages/protected/store_dashboard.tsx

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Activity, Package, Star } from "lucide-react";
import StatsChart from "@/components/charts/stats-chart"; // <-- 1. Import the chart

const StoreDashboardPage = () => {
    // Placeholder data we will fetch from the API later
        <div className="container mx-auto p-8">
            <h1 className="text-3xl font-bold">Store Owner Dashboard</h1>
            <p className="mt-4">Welcome to your dashboard. Your store information will be displayed here.</p>
        </div>
    const store = {
        officialName: "FreshMart Supermarket",
        verificationStatus: "approved",
    };



    const stats = {
        totalItems: 125,
        averageRating: 4.8,
        recentActivity: [
            { id: 1, description: "New Review by Jane D.", type: "Review" },
            { id: 2, description: "Stock for 'Fresh Milk 1L' is low", type: "Inventory" },
        ],
    };

    return (
        <div className="bg-gray-100 min-h-screen">
            <div className="container mx-auto p-4 md:p-8">
                <div className="mb-8">
                    <h1 className="text-3xl font-bold">Welcome, {store.officialName}</h1>
                    <div className="flex items-center gap-2 mt-2">
                        <span>Status:</span>
                        <Badge variant={store.verificationStatus === 'approved' ? 'default' : 'destructive'}>
                            {store.verificationStatus.toUpperCase()}
                        </Badge>
                    </div>
                </div>

                {/* Stat Cards Section */}
                <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 mb-8">
                    <Card>
                        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                            <CardTitle className="text-sm font-medium">Total Items</CardTitle>
                            <Package className="h-4 w-4 text-muted-foreground" />
                        </CardHeader>
                        <CardContent>
                            <div className="text-2xl font-bold">{stats.totalItems}</div>
                            <p className="text-xs text-muted-foreground">products in inventory</p>
                        </CardContent>
                    </Card>
                    <Card>
                        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                            <CardTitle className="text-sm font-medium">Average Rating</CardTitle>
                            <Star className="h-4 w-4 text-muted-foreground" />
                        </CardHeader>
                        <CardContent>
                            <div className="text-2xl font-bold">{stats.averageRating} / 5</div>
                            <p className="text-xs text-muted-foreground">based on all reviews</p>
                        </CardContent>
                    </Card>
                </div>

                {/* Recent Activity Section */}
                <Card>
                    <CardHeader>
                        <CardTitle className="flex items-center gap-2">
                            <Activity className="h-5 w-5" />
                            Recent Activity
                        </CardTitle>
                    </CardHeader>
                    <CardContent>
                        <Table>
                            <TableHeader>
                                <TableRow>
                                    <TableHead>Description</TableHead>
                                    <TableHead>Type</TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                {stats.recentActivity.map((activity) => (
                                    <TableRow key={activity.id}>
                                        <TableCell>{activity.description}</TableCell>
                                        <TableCell>
                                            <Badge variant="outline">{activity.type}</Badge>
                                        </TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </CardContent>
                </Card>
                {/* Chart statisttics section */}
                                <div className="grid gap-8 lg:grid-cols-3">
                    <div className="lg:col-span-2">
                        <StatsChart />
                    </div>

                    {/* Recent Activity Section */}
                    <div className="lg:col-span-1">
                        <Card>
                            <CardHeader>
                                <CardTitle className="flex items-center gap-2">
                                    <Activity className="h-5 w-5" />
                                    Recent Activity
                                </CardTitle>
                            </CardHeader>
                            <CardContent>
                                <Table>
                                    {/* ... (your existing table) */}
                                    <TableHeader>
                                        <TableRow>
                                            <TableHead>Description</TableHead>
                                            <TableHead>Type</TableHead>
                                        </TableRow>
                                    </TableHeader>
                                    <TableBody>
                                    {stats.recentActivity.map((activity) => (
                                        <TableRow key={activity.id}>
                                            <TableCell>{activity.description}</TableCell>
                                            <TableCell>
                                                <Badge variant="outline">{activity.type}</Badge>
                                            </TableCell>
                                        </TableRow>
                                        ))}
                                    </TableBody>
                                </Table>
                            </CardContent>
                        </Card>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default StoreDashboardPage;