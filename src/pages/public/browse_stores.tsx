// in src/pages/public/browse_stores.tsx

import { useEffect, useState, useMemo } from 'react';
import { getStores, type Store } from '../../services/storeService';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import StoreCard from '@/components/layout/store-card'; // Assuming you have this component
import { Link } from 'react-router-dom';

const BrowseStoresPage = () => {
    const [allStores, setAllStores] = useState<Store[]>([]);
    const [loading, setLoading] = useState(true);
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('all');
    const [isSearchFocused, setIsSearchFocused] = useState(false);

    useEffect(() => {
        const fetchStores = async () => {
            try {
                const data = await getStores();
                setAllStores(data);
            } catch (error) {
                console.error("Failed to fetch stores:", error);
            } finally {
                setLoading(false);
            }
        };
        fetchStores();
    }, []);

    const filteredStores = useMemo(() => {
        return allStores.filter(store => {
            const matchesCategory = selectedCategory === 'all' || store.category.toLowerCase() === selectedCategory;
            const matchesSearch = store.officialName.toLowerCase().includes(searchTerm.toLowerCase());
            return matchesCategory && matchesSearch;
        });
    }, [allStores, searchTerm, selectedCategory]);

    const categories = useMemo(() => {
        const uniqueCategories = [...new Set(allStores.map(store => store.category))];
        return ['all', ...uniqueCategories];
    }, [allStores]);

    return (
        <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
            <div className="container mx-auto p-4 md:p-8 pt-24 md:pt-32">
                <div className="text-center mb-12 space-y-4 animate-fade-in">
                    <h1 className="text-5xl md:text-7xl font-extrabold text-gray-900 tracking-tight">
                        <span className="bg-gradient-to-r from-primary via-primary/90 to-primary/70 bg-clip-text text-transparent animate-gradient">
                            Browse All Stores
                        </span>
                    </h1>
                    <p className="text-gray-600 text-xl md:text-2xl max-w-2xl mx-auto font-medium">
                        Find the perfect store for your needs, all in one place.
                    </p>
                </div>

                {/* Loading Skeleton */}
                {loading && (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 animate-pulse">
                        {[...Array(6)].map((_, index) => (
                            <div key={index} className="bg-white rounded-lg shadow-md h-64">
                                <div className="h-40 bg-gray-200 rounded-t-lg" />
                                <div className="p-4 space-y-3">
                                    <div className="h-4 bg-gray-200 rounded w-3/4" />
                                    <div className="h-4 bg-gray-200 rounded w-1/2" />
                                </div>
                            </div>
                        ))}
                    </div>
                )}

                {/* Filter and Search Section */}
                <div className="max-w-4xl mx-auto mb-12">
                    <div className="bg-white/80 backdrop-blur-lg rounded-2xl shadow-lg p-4 transform transition-all duration-300 hover:shadow-xl">
                        <div className="flex flex-col md:flex-row gap-4">
                            <div className="relative flex-grow">
                                <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
                                    <svg 
                                        className={`w-5 h-5 transition-colors duration-300 ${
                                            isSearchFocused ? 'text-primary' : 'text-gray-400'
                                        }`} 
                                        fill="none" 
                                        stroke="currentColor" 
                                        viewBox="0 0 24 24"
                                    >
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                                    </svg>
                                </div>
                                <Input
                                    placeholder="Search by store name..."
                                    value={searchTerm}
                                    onChange={(e) => setSearchTerm(e.target.value)}
                                    onFocus={() => setIsSearchFocused(true)}
                                    onBlur={() => setIsSearchFocused(false)}
                                    className="pl-10 h-12 bg-white/50 backdrop-blur-sm border-gray-200 rounded-xl focus:ring-primary/20 focus:border-primary/50 transition-all duration-300"
                                />
                            </div>
                            <Select onValueChange={setSelectedCategory} defaultValue="all">
                                <SelectTrigger className="w-full md:w-[200px] h-12 bg-white/50 backdrop-blur-sm border-gray-200 rounded-xl hover:bg-white/70 transition-all duration-300">
                                    <SelectValue placeholder="Filter by category" />
                                </SelectTrigger>
                                <SelectContent className="bg-white/95 backdrop-blur-sm border-gray-200">
                                    {categories.map(cat => (
                                        <SelectItem 
                                            key={cat} 
                                            value={cat} 
                                            className="capitalize hover:bg-primary/5 cursor-pointer transition-colors duration-200"
                                        >
                                            {cat}
                                        </SelectItem>
                                    ))}
                                </SelectContent>
                            </Select>
                        </div>
                    </div>
                </div>

                {/* Store Grid Section */}
                <div className="relative">
                    {/* Background decorative elements */}
                    <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent -z-10"></div>
                    <div className="absolute inset-0 opacity-[0.015]" style={{
                        backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")",
                        backgroundSize: '30px 30px'
                    }}></div>
                    {loading ? (
                        <div className="flex items-center justify-center min-h-[200px]">
                            <div className="animate-spin rounded-full h-12 w-12 border-4 border-primary border-t-transparent"></div>
                        </div>
                    ) : (
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 xl:gap-8">
                            {filteredStores.length > 0 ? (
                                filteredStores.map((store) => (
                                    <div 
                                        key={store.storeID}
                                        className="group transform hover:scale-[1.02] transition-all duration-300"
                                    >
                                        <Link to={`/store/${store.storeID}`}>
                                            <StoreCard store={store} />
                                        </Link>
                                    </div>
                                ))
                            ) : (
                                <div className="col-span-full flex flex-col items-center justify-center py-16 text-center">
                                    <div className="w-16 h-16 mb-4 text-gray-300">
                                        <svg fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                                        </svg>
                                    </div>
                                    <h3 className="text-lg font-medium text-gray-900 mb-1">No stores found</h3>
                                    <p className="text-gray-500">Try adjusting your search or filter criteria</p>
                                </div>
                            )}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

export default BrowseStoresPage;