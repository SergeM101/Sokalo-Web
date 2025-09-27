// in src/pages/protected/store_dashboard.tsx


import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Activity, Package, Star, CalendarDays, Users, TrendingUp } from "lucide-react";
import StatsChart from "@/components/charts/stats-chart";
import StoreViewsLineChart from "@/components/charts/line-chart";

const StoreDashboardPage = () => {
    // Placeholder data
    const store = {
        officialName: "FreshMart Supermarket",
        verificationStatus: "approved",
        subscription: { daysLeft: 48, plan: "Premium" },
        syncCount: 12,
    };
    const stats = {
        totalItems: 125,
        averageRating: 4.8,
        subscriptionDays: store.subscription.daysLeft,
        syncCount: store.syncCount,
        recentActivity: [
            { id: 1, description: "New Review by Jane D.", type: "Review" },
            { id: 2, description: "Stock for 'Fresh Milk 1L' is low", type: "Inventory" },
            { id: 3, description: "Order #1234 completed", type: "Order" },
        ],
    };

    return (
    <div className="bg-gray-50 min-h-screen">
            <div className="container mx-auto p-4 md:p-8">
                {/* Header */}
                <div className="mb-8 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                    <div>
                        <h1 className="text-3xl font-bold text-gray-900">Welcome, {store.officialName}</h1>
                        <div className="flex items-center gap-2 mt-2">
                            <span className="text-gray-600">Status:</span>
                            <Badge variant={store.verificationStatus === 'approved' ? 'default' : 'destructive'}>
                                {store.verificationStatus.toUpperCase()}
                            </Badge>
                        </div>
                    </div>
                    <div className="flex gap-4">
                        <Card className="flex flex-col items-center justify-center px-6 py-3 bg-slate-800 text-white shadow-md border-0">
                            <CardTitle className="text-xs font-medium mb-1">Subscription</CardTitle>
                            <div className="flex items-center gap-2">
                                <CalendarDays className="h-4 w-4" />
                                <span className="text-lg font-bold text-sky-400">{stats.subscriptionDays} days left</span>
                            </div>
                            <span className="text-xs mt-1 text-sky-400">{store.subscription.plan} Plan</span>
                        </Card>
                        <Card className="flex flex-col items-center justify-center px-6 py-3 bg-slate-800 text-white shadow-md border-0">
                            <CardTitle className="text-xs font-medium mb-1">No. of Syncs</CardTitle>
                            <div className="flex items-center gap-2">
                                <Users className="h-4 w-4" />
                                <span className="text-lg font-bold text-sky-400">{stats.syncCount}</span>
                            </div>
                        </Card>
                    </div>
                </div>

                {/* Stat Cards Section */}
                <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 mb-8">
                    <Card className="bg-slate-800 text-white">
                        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                            <CardTitle className="text-sm font-medium">Total Items</CardTitle>
                            <Package className="h-4 w-4 text-muted-foreground" />
                        </CardHeader>
                        <CardContent>
                            <div className="text-2xl font-bold text-sky-400">{stats.totalItems}</div>
                            <p className="text-xs text-muted-foreground text-white">products in inventory</p>
                        </CardContent>
                    </Card>
                    <Card className="bg-slate-800">
                        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                            <CardTitle className="text-sm font-medium text-white">Average Rating</CardTitle>
                            <Star className="h-4 w-4 text-muted-foreground" />
                        </CardHeader>
                        <CardContent>
                            <div className="text-2xl font-bold text-sky-400">{stats.averageRating} / 5</div>
                            <p className="text-xs text-muted-foreground text-white">based on all reviews</p>
                        </CardContent>
                    </Card>
                    <Card className="bg-slate-800 text-white">
                        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                            <CardTitle className="text-sm font-medium">Subscription</CardTitle>
                            <TrendingUp className="h-4 w-4 text-muted-foreground" />
                        </CardHeader>
                        <CardContent>
                            <div className="text-2xl font-bold text-sky-400">{stats.subscriptionDays} days</div>
                            <p className="text-xs text-muted-foreground text-white">left on plan</p>
                        </CardContent>
                    </Card>
                </div>

                        {/* Main Dashboard Grid */}
                        <div className="grid gap-8 lg:grid-cols-3">
                            {/* Views Overview (Line Chart) */}
                            <div className="lg:col-span-2">
                                <StoreViewsLineChart />
                            </div>

                            {/* Recent Activity */}
                            <div className="lg:col-span-1">
                                <Card className="h-full bg-slate-800 text-white">
                                    <CardHeader>
                                        <CardTitle className="flex items-center gap-2 text-sky-400">
                                            <Activity className="h-5 w-5" />
                                            Recent Activity
                                        </CardTitle>
                                    </CardHeader>
                                    <CardContent>
                                        <Table>
                                            <TableHeader>
                                                <TableRow>
                                                    <TableHead className="text-sky-300">Description</TableHead>
                                                    <TableHead className="text-sky-300">Type</TableHead>
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

                        {/* Sales Overview (Bar Chart) */}
                        <div className="mt-8">
                            <StatsChart />
                        </div>
            </div>
        </div>
    );
};

export default StoreDashboardPage;