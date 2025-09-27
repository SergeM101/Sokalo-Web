//import React from "react";
import ItemsCardLayout from '@/components/layout/Items_card_layout';

const StoreItemsPage = () => {
	// Use the exact same sample items as in store_profile_view.tsx
	const items = [
		{ id: 1, title: 'Fresh Baguette', price: 250, image: '/images/item 1 bread.jpg', available: true },
		{ id: 2, title: 'Cabbage', price: 450, image: '/images/item 2 Cabbage.jpg', available: true },
		{ id: 3, title: 'Froot Loops Cereal', price: 1200, image: '/images/Item 3 cereal.jpg', available: false },
		{ id: 4, title: 'Croissant', price: 300, image: '/images/item 4 croisant.jpg', available: true },
	];
	return (
		<div className="bg-gray-100 min-h-screen pt-16">
			<div className="container mx-auto p-4 md:p-8">
				<section className="mb-12">
					<h2 className="text-2xl font-bold mb-4">Products Sold</h2>
					<ItemsCardLayout items={items} />
				</section>
			</div>
		</div>
	);
};

export default StoreItemsPage;
