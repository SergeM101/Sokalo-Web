// in src/pages/public/browse_stores.tsx

import { useEffect, useState, useMemo } from 'react';
import { getStores, type Store } from '../../services/storeService';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import StoreCard from '@/components/layout/store-card'; // Assuming you have this component

const BrowseStoresPage = () => {
    const [allStores, setAllStores] = useState<Store[]>([]);
    const [loading, setLoading] = useState(true);
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('all');

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
        <div className="bg-gray-100 min-h-screen">
            <div className="container mx-auto p-4 md:p-8">
                <div className="text-center mb-12">
                    <h1 className="text-4xl font-bold">Browse All Stores</h1>
                    <p className="text-gray-600 mt-2">Find the perfect store for your needs.</p>
                </div>

                {/* Filter and Search Section */}
                <div className="flex flex-col md:flex-row gap-4 mb-8">
                    <Input
                        placeholder="Search by store name..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="flex-grow"
                    />
                    <Select onValueChange={setSelectedCategory} defaultValue="all">
                        <SelectTrigger className="w-full md:w-[200px]">
                            <SelectValue placeholder="Filter by category" />
                        </SelectTrigger>
                        <SelectContent>
                            {categories.map(cat => (
                                <SelectItem key={cat} value={cat} className="capitalize">{cat}</SelectItem>
                            ))}
                        </SelectContent>
                    </Select>
                </div>

                {/* Store Grid Section */}
                {loading ? (
                    <p className="text-center">Loading...</p>
                ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {filteredStores.length > 0 ? (
                            filteredStores.map(store => (
                                <StoreCard key={store.storeID} store={store} />
                            ))
                        ) : (
                            <p className="text-center md:col-span-3">No stores found matching your criteria.</p>
                        )}
                    </div>
                )}
            </div>
        </div>
    );
};

export default BrowseStoresPage;