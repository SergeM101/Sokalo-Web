// in src/pages/protected/store_settings.tsx

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const StoreSettingsPage = () => {
    // We'll pre-fill this with real data from the API later
    const storeData = {
        officialName: "FreshMart Supermarket",
        address: "748 Simbock, Yaoundé",
        contactEmail: "contact@freshmart.com",
        contactPhone: "+237 6XX XXX XXX",
    };

    return (
        <div className="container mx-auto p-4 md:p-8">
            <Card>
                <CardHeader>
                    <CardTitle>Store Settings</CardTitle>
                    <CardDescription>Update your store's public information here.</CardDescription>
                </CardHeader>
                <CardContent>
                    <form className="grid gap-6">
                        <div className="grid gap-2">
                            <Label htmlFor="officialName">Official Store Name</Label>
                            <Input id="officialName" defaultValue={storeData.officialName} />
                        </div>
                        <div className="grid gap-2">
                            <Label htmlFor="address">Address</Label>
                            <Input id="address" defaultValue={storeData.address} />
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                            <div className="grid gap-2">
                                <Label htmlFor="contactEmail">Contact Email</Label>
                                <Input id="contactEmail" type="email" defaultValue={storeData.contactEmail} />
                            </div>
                            <div className="grid gap-2">
                                <Label htmlFor="contactPhone">Contact Phone</Label>
                                <Input id="contactPhone" defaultValue={storeData.contactPhone} />
                            </div>
                        </div>
                        <Button type="submit" className="w-fit">Save Changes</Button>
                    </form>
                </CardContent>
            </Card>
        </div>
    );
};

export default StoreSettingsPage;