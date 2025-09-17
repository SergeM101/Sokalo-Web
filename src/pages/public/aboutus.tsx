// in src/pages/public/aboutus.tsx

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const AboutUsPage = () => {
    return (
        <div className="bg-cream">
            <div className="container mx-auto px-4 py-16">
                <Card className="max-w-4xl mx-auto">
                    <CardHeader className="text-center">
                        <CardTitle className="text-4xl">About SOKALO</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-6 text-lg text-gray-700">
                        <p>
                            In Cameroon, medium-sized retailers face significant operational challenges. Unreliable paper-based inventory and generic cloud applications that fail during frequent internet outages lead to financial losses and poor customer engagement.
                        </p>
                        <p>
                            SOKALO was born from this challenge. Our mission is to provide a resilient, hybrid digital platform tailored specifically for the local business environment.
                        </p>
                        <p className="font-semibold text-primary">
                            We empower Cameroonian retailers to formalize their operations, reduce financial leaks, and build a trustworthy, professional brand—both in-store and online.
                        </p>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
};

export default AboutUsPage;