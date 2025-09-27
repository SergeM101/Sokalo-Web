import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Plus, Image } from "lucide-react";
import React, { useRef, useState } from "react";

const StoreSettingsPage = () => {
    // Placeholder data
    const storeData = {
        officialName: "FreshMart Supermarket",
        address: "748 Simbock, Yaoundé",
        contactEmail: "contact@freshmart.com",
        contactPhone: "+237 6XX XXX XXX",
        syncKey: "XJ8K2-9QW3Z",
        subscription: { plan: "Premium", daysLeft: 48 },
    };

    const [photos, setPhotos] = useState<(string | null)[]>([null, null, null]);
    const fileInputs = [useRef<HTMLInputElement>(null), useRef<HTMLInputElement>(null), useRef<HTMLInputElement>(null)];

    const handlePhotoChange = (idx: number, e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = (ev) => {
                setPhotos((prev) => {
                    const copy = [...prev];
                    copy[idx] = ev.target?.result as string;
                    return copy;
                });
            };
            reader.readAsDataURL(file);
        }
    };

    return (
        <div className="bg-gray-50 min-h-screen w-full">
            <div className="container mx-auto p-4 md:p-8 max-w-3xl">
                {/* Profile Card */}
                <Card className="mb-8 bg-slate-800 text-white">
                    <CardHeader className="flex flex-row items-center justify-between pb-2">
                        <div>
                            <CardTitle className="text-xl text-sky-400">Custom's Store Profile</CardTitle>
                            <CardDescription>Update your store's public information here.</CardDescription>
                        </div>
                        <div className="flex gap-2">
                            <Button variant="outline" className="border-gray-300">Cancel</Button>
                            <Button type="submit">Save</Button>
                        </div>
                    </CardHeader>
                    <CardContent>
                        <form className="grid gap-6">
                            <div className="grid gap-2 md:grid-cols-2">
                                <div className="grid gap-2">
                                    <Label htmlFor="officialName" className="text-sky-400">Official Store Name</Label>
                                    <Input id="officialName" className="bg-white text-slate-800" defaultValue={storeData.officialName} />
                                </div>
                                <div className="grid gap-2">
                                    <Label htmlFor="contactEmail" className="text-sky-400">Contact Email</Label>
                                    <Input id="contactEmail" type="email" className="bg-white text-slate-800" defaultValue={storeData.contactEmail} />
                                </div>
                                <div className="grid gap-2">
                                    <Label htmlFor="contactPhone" className="text-sky-400">Contact Phone</Label>
                                    <Input id="contactPhone" className="bg-white text-slate-800" defaultValue={storeData.contactPhone} />
                                </div>
                                <div className="grid gap-2">
                                    <Label htmlFor="address" className="text-sky-400">Address</Label>
                                    <Input id="address" className="bg-white text-slate-800" defaultValue={storeData.address} />
                                </div>
                            </div>
                            {/* Store Photos Upload */}
                            <div>
                              <Label>Change Store Photos</Label>
                              <div className="flex gap-4 mt-2">
                                {[1, 2, 3].map((i, idx) => (
                                  <div
                                    key={i}
                                    className="w-24 h-24 bg-white border-2 border-dashed border-gray-300 rounded-lg flex flex-col items-center justify-center cursor-pointer hover:bg-gray-100 transition relative overflow-hidden"
                                    onClick={() => fileInputs[idx].current?.click()}
                                  >
                                    {photos[idx] ? (
                                      <img src={photos[idx]!} alt={`Store photo ${i}`} className="object-cover w-full h-full" />
                                    ) : (
                                      <>
                                        <Image className="w-8 h-8 text-gray-300 mb-1" />
                                        <Plus className="w-5 h-5 text-gray-400" />
                                      </>
                                    )}
                                    <input
                                      ref={fileInputs[idx]}
                                      type="file"
                                      accept="image/*"
                                      className="hidden"
                                      onChange={(e) => handlePhotoChange(idx, e)}
                                    />
                                  </div>
                                ))}
                              </div>
                            </div>
                        </form>
                    </CardContent>
                </Card>

                {/* Sync Key Section */}
                <Card className="mb-8 bg-slate-800 text-white">
                    <CardHeader>
                        <CardTitle>Sync Decryption Key</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="flex items-center gap-4">
                            <Input value={storeData.syncKey} readOnly className="max-w-xs" />
                            <Button variant="outline" type="button">Copy</Button>
                        </div>
                    </CardContent>
                </Card>

                {/* Modify Items List Section */}
                <Card className="mb-8 bg-slate-800 text-white">
                    <CardContent className="flex flex-col md:flex-row items-center justify-between gap-4">
                        <div className="text-lg font-medium">Modify Items List</div>
                        <Button variant="secondary" className="flex items-center gap-2">
                            <Plus className="w-5 h-5" />
                            Items
                        </Button>
                    </CardContent>
                </Card>

                {/* Promotion/Deal Section */}
                <Card className="mb-8 bg-slate-800 text-white">
                    <CardContent className="flex flex-col md:flex-row items-center justify-between gap-4">
                        <div className="text-lg font-medium">Make A Promotion or Deal</div>
                        <Button variant="secondary" className="flex items-center gap-2">
                            Promo
                        </Button>
                    </CardContent>
                </Card>

                {/* Subscription Plan Section */}
                <Card className="bg-slate-800 text-white">
                    <CardContent className="flex flex-col md:flex-row items-center justify-between gap-4">
                        <div className="flex flex-col gap-1">
                            <div className="text-lg font-medium">Current Subscription Plan</div>
                            <div className="text-gray-500 text-sm">{storeData.subscription.plan} ({storeData.subscription.daysLeft} days left)</div>
                        </div>
                        <Button variant="secondary">New</Button>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
};

export default StoreSettingsPage;