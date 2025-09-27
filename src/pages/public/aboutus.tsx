// in src/pages/public/aboutus.tsx

import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useEffect } from "react";

const AboutUsPage = () => {
    useEffect(() => {
        // Add smooth scroll behavior
        const sections = document.querySelectorAll("section");
        const observerOptions = {
            root: null,
            threshold: 0.1,
            rootMargin: "-50px"
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("fade-in-section", "is-visible");
                }
            });
        }, observerOptions);

        sections.forEach(section => {
            section.classList.add("fade-in-section");
            observer.observe(section);
        });

        return () => observer.disconnect();
    }, []);
    return (
        <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 pt-20">
            {/* Hero Section */}
            <div className="relative bg-gradient-to-r from-primary/10 to-primary/5 overflow-hidden">
                <div className="container mx-auto px-4 py-16 md:py-24">
                    <div className="grid md:grid-cols-2 gap-8 items-center">
                        <div className="space-y-6 animate-fade-in stagger-animate">
                            <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent animate-gradient hover-shine">
                                Transforming Retail in Cameroon
                            </h1>
                            <p className="text-xl text-gray-600 slide-in-left">
                                SOKALO is revolutionizing how Cameroonian businesses operate, bringing enterprise-grade technology to local retailers.
                            </p>
                            <div className="flex gap-4 pt-4">
                                <Button className="bg-primary hover:bg-primary/90 text-white px-6 py-3 rounded-lg animate-float">
                                    Get Started
                                </Button>
                                <Button variant="outline" className="hover:bg-primary/10 px-6 py-3 rounded-lg">
                                    Learn More
                                </Button>
                            </div>
                        </div>
                        <div className="relative h-[400px] animate-fade-in">
                            <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent rounded-lg overflow-hidden">
                                <img 
                                    src="/images/about-bg.jpg" 
                                    alt="SOKALO Platform" 
                                    className="w-full h-full object-cover mix-blend-overlay"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Mission Section */}
            <div className="container mx-auto px-4 py-16">
                <Card className="max-w-4xl mx-auto shadow-xl border-0">
                    <CardHeader className="text-center">
                        <CardTitle className="text-3xl font-bold text-gray-900">Our Mission</CardTitle>
                        <CardDescription className="text-lg text-gray-600">
                            Driving digital transformation in Cameroon's retail sector
                        </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-6 p-8">
                        <div className="grid md:grid-cols-3 gap-8">
                            <Card className="border-0 shadow-md hover:shadow-xl transition-all animate-fade-in group cursor-pointer">
                                <CardHeader>
                                    <div className="h-1 w-20 bg-primary mb-4 group-hover:w-full transition-all duration-300"></div>
                                    <CardTitle className="text-xl group-hover:text-primary transition-colors">Local Focus</CardTitle>
                                </CardHeader>
                                <CardContent className="relative overflow-hidden">
                                    <div className="absolute inset-0 bg-primary/5 scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></div>
                                    <p className="text-gray-600 relative z-10">Built specifically for Cameroon's unique business environment and challenges.</p>
                                </CardContent>
                            </Card>
                            <Card className="border-0 shadow-md hover:shadow-xl transition-all animate-fade-in hover:scale-105 delay-100">
                                <CardHeader>
                                    <div className="h-1 w-20 bg-primary mb-4"></div>
                                    <CardTitle className="text-xl">Resilient Design</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-gray-600">Works seamlessly even during internet outages, ensuring business continuity.</p>
                                </CardContent>
                            </Card>
                            <Card className="border-0 shadow-md hover:shadow-xl transition-all animate-fade-in hover:scale-105 delay-200">
                                <CardHeader>
                                    <div className="h-1 w-20 bg-primary mb-4"></div>
                                    <CardTitle className="text-xl">Digital Growth</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-gray-600">Empowering retailers to build professional, trustworthy digital brands.</p>
                                </CardContent>
                            </Card>
                        </div>
                    </CardContent>
                </Card>
            </div>

            {/* Services Section */}
            <div className="bg-gradient-to-b from-gray-50 to-gray-100 py-16">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent inline-block">
                            Our Services
                        </h2>
                    </div>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        <Card className="border-0 shadow-lg hover:shadow-xl transition-all animate-fade-in hover:-translate-y-1">
                            <CardHeader>
                                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                                    <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                                    </svg>
                                </div>
                                <CardTitle className="text-xl">Inventory Management</CardTitle>
                                <CardDescription>Robust inventory tracking that works online and offline.</CardDescription>
                            </CardHeader>
                        </Card>
                        <Card className="border-0 shadow-lg hover:shadow-xl transition-all animate-fade-in hover:-translate-y-1 delay-100">
                            <CardHeader>
                                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                                    <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                                    </svg>
                                </div>
                                <CardTitle className="text-xl">Sales Analytics</CardTitle>
                                <CardDescription>Real-time insights and reporting for better decision making.</CardDescription>
                            </CardHeader>
                        </Card>
                        <Card className="border-0 shadow-lg hover:shadow-xl transition-all animate-fade-in hover:-translate-y-1 delay-200">
                            <CardHeader>
                                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                                    <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                                    </svg>
                                </div>
                                <CardTitle className="text-xl">Payment Processing</CardTitle>
                                <CardDescription>Secure, reliable payment solutions for all transactions.</CardDescription>
                            </CardHeader>
                        </Card>
                    </div>
                </div>
            </div>

            {/* Team Section */}
            <section className="relative py-20 overflow-hidden">
                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-5">
                    <div className="absolute inset-0" style={{
                        backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")",
                        backgroundSize: '60px 60px'
                    }}></div>
                </div>
                <div className="container mx-auto px-4 relative">
                    <div className="text-center mb-16 stagger-animate">
                        <h2 className="text-3xl font-bold bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent inline-block mb-4 animate-gradient">
                            Meet Our Team
                        </h2>
                        <p className="text-gray-600 text-lg">Passionate developers building the future of retail</p>
                    </div>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
                        <Card className="border-0 shadow-lg group hover:shadow-2xl transition-all duration-300 animate-fade-in">
                            <CardHeader className="relative overflow-hidden p-0">
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity z-10"></div>
                                <img 
                                    src="/public/user 2.jpg" 
                                    alt="Team Member"
                                    className="w-full h-64 object-cover object-center group-hover:scale-110 transition-transform duration-500"
                                />
                                <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-full group-hover:translate-y-0 transition-transform z-20">
                                    <div className="flex gap-4 justify-center">
                                        <a href="#" className="hover:text-primary transition-colors">
                                            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                                                <path d="M22.23 0H1.77C.8 0 0 .77 0 1.72v20.56C0 23.23.8 24 1.77 24h20.46c.98 0 1.77-.77 1.77-1.72V1.72C24 .77 23.2 0 22.23 0zM7.27 20.1H3.65V9.24h3.62V20.1zM5.47 7.76h-.03c-1.22 0-2-.83-2-1.87 0-1.06.8-1.87 2.05-1.87 1.24 0 2 .8 2.02 1.87 0 1.04-.78 1.87-2.05 1.87zM20.34 20.1h-3.63v-5.8c0-1.45-.52-2.45-1.83-2.45-1 0-1.6.67-1.87 1.32-.1.23-.11.55-.11.88v6.05H9.28s.05-9.82 0-10.84h3.63v1.54a3.6 3.6 0 0 1 3.26-1.8c2.39 0 4.18 1.56 4.18 4.89v6.21z"/>
                                            </svg>
                                        </a>
                                        <a href="#" className="hover:text-primary transition-colors">
                                            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                                                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
                                            </svg>
                                        </a>
                                    </div>
                                </div>
                            </CardHeader>
                            <CardContent className="text-center p-6">
                                <CardTitle className="text-xl mb-2">Ade Serge</CardTitle>
                                <CardDescription className="text-gray-600">Lead Developer</CardDescription>
                            </CardContent>
                        </Card>

                        <Card className="border-0 shadow-lg group hover:shadow-2xl transition-all duration-300 animate-fade-in delay-100">
                            <CardHeader className="relative overflow-hidden p-0">
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity z-10"></div>
                                <img 
                                    src="/public/user 1.jpg" 
                                    alt="Team Member"
                                    className="w-full h-64 object-cover object-center group-hover:scale-110 transition-transform duration-500"
                                />
                                <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-full group-hover:translate-y-0 transition-transform z-20">
                                    <div className="flex gap-4 justify-center">
                                        <a href="#" className="hover:text-primary transition-colors">
                                            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                                                <path d="M22.23 0H1.77C.8 0 0 .77 0 1.72v20.56C0 23.23.8 24 1.77 24h20.46c.98 0 1.77-.77 1.77-1.72V1.72C24 .77 23.2 0 22.23 0zM7.27 20.1H3.65V9.24h3.62V20.1zM5.47 7.76h-.03c-1.22 0-2-.83-2-1.87 0-1.06.8-1.87 2.05-1.87 1.24 0 2 .8 2.02 1.87 0 1.04-.78 1.87-2.05 1.87zM20.34 20.1h-3.63v-5.8c0-1.45-.52-2.45-1.83-2.45-1 0-1.6.67-1.87 1.32-.1.23-.11.55-.11.88v6.05H9.28s.05-9.82 0-10.84h3.63v1.54a3.6 3.6 0 0 1 3.26-1.8c2.39 0 4.18 1.56 4.18 4.89v6.21z"/>
                                            </svg>
                                        </a>
                                        <a href="#" className="hover:text-primary transition-colors">
                                            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                                                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
                                            </svg>
                                        </a>
                                    </div>
                                </div>
                            </CardHeader>
                            <CardContent className="text-center p-6">
                                <CardTitle className="text-xl mb-2">Sarah Chen</CardTitle>
                                <CardDescription className="text-gray-600">UI/UX Designer</CardDescription>
                            </CardContent>
                        </Card>

                        <Card className="border-0 shadow-lg group hover:shadow-2xl transition-all duration-300 animate-fade-in delay-200">
                            <CardHeader className="relative overflow-hidden p-0">
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity z-10"></div>
                                <img 
                                    src="/public/user 3.jpg" 
                                    alt="Team Member"
                                    className="w-full h-64 object-cover object-center group-hover:scale-110 transition-transform duration-500"
                                />
                                <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-full group-hover:translate-y-0 transition-transform z-20">
                                    <div className="flex gap-4 justify-center">
                                        <a href="#" className="hover:text-primary transition-colors">
                                            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                                                <path d="M22.23 0H1.77C.8 0 0 .77 0 1.72v20.56C0 23.23.8 24 1.77 24h20.46c.98 0 1.77-.77 1.77-1.72V1.72C24 .77 23.2 0 22.23 0zM7.27 20.1H3.65V9.24h3.62V20.1zM5.47 7.76h-.03c-1.22 0-2-.83-2-1.87 0-1.06.8-1.87 2.05-1.87 1.24 0 2 .8 2.02 1.87 0 1.04-.78 1.87-2.05 1.87zM20.34 20.1h-3.63v-5.8c0-1.45-.52-2.45-1.83-2.45-1 0-1.6.67-1.87 1.32-.1.23-.11.55-.11.88v6.05H9.28s.05-9.82 0-10.84h3.63v1.54a3.6 3.6 0 0 1 3.26-1.8c2.39 0 4.18 1.56 4.18 4.89v6.21z"/>
                                            </svg>
                                        </a>
                                        <a href="#" className="hover:text-primary transition-colors">
                                            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                                                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
                                            </svg>
                                        </a>
                                    </div>
                                </div>
                            </CardHeader>
                            <CardContent className="text-center p-6">
                                <CardTitle className="text-xl mb-2">David Kouam</CardTitle>
                                <CardDescription className="text-gray-600">Backend Developer</CardDescription>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </section>

            {/* Contact Section */}
            <div className="container mx-auto px-4 py-16">
                <div className="max-w-4xl mx-auto">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent inline-block">
                            Get In Touch
                        </h2>
                    </div>
                    <div className="grid md:grid-cols-2 gap-8">
                        <div className="space-y-4 animate-fade-in">
                            <Card className="border-0 shadow-md hover:shadow-lg transition-all">
                                <CardHeader className="flex flex-row items-center gap-4">
                                    <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                                        <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <CardTitle className="text-lg">Phone</CardTitle>
                                        <CardDescription>+237 XXX XXX XXX</CardDescription>
                                    </div>
                                </CardHeader>
                            </Card>
                            <Card className="border-0 shadow-md hover:shadow-lg transition-all">
                                <CardHeader className="flex flex-row items-center gap-4">
                                    <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                                        <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <CardTitle className="text-lg">Email</CardTitle>
                                        <CardDescription>contact@sokalo.com</CardDescription>
                                    </div>
                                </CardHeader>
                            </Card>
                            <Card className="border-0 shadow-md hover:shadow-lg transition-all">
                                <CardHeader className="flex flex-row items-center gap-4">
                                    <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                                        <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <CardTitle className="text-lg">Location</CardTitle>
                                        <CardDescription>Yaoundé, Cameroon</CardDescription>
                                    </div>
                                </CardHeader>
                            </Card>
                        </div>
                        <Card className="border-0 shadow-xl animate-fade-in overflow-hidden">
                            <CardContent className="p-0">
                                <div className="bg-gradient-to-tr from-primary/20 to-transparent p-6">
                                    <img 
                                        src="/images/about-bg.jpg" 
                                        alt="Office Location" 
                                        className="w-full h-48 object-cover rounded-lg shadow-lg hover:scale-105 transition-transform duration-300" 
                                    />
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutUsPage;