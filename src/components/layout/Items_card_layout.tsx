//import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { motion } from 'framer-motion';

type Item = {
  id: string | number;
  title: string;
  price: number;
  image: string;
  available: boolean;
};

const ItemsCardLayout = ({ items }: { items: Item[] }) => {
  return (
    <div className="space-y-4">
      {items.map((item, idx) => (
        <motion.div key={item.id} initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7, delay: idx * 0.08 }}>
          <Card className="w-full rounded-lg shadow-lg transition-shadow bg-slate-800 text-white border border-slate-700">
            <CardContent className="p-3">
              <div className="flex items-center gap-4 w-full">
                <div className="w-28 h-20 flex-shrink-0 overflow-hidden rounded-md bg-white shadow-sm">
                  <img src={item.image} alt={item.title} className="w-full h-full object-cover" />
                </div>

                <div className="flex-1">
                  <div className="text-base font-semibold">{item.title}</div>
                  <div className="text-sm text-slate-200 mt-1">Quality guaranteed</div>
                </div>

                <div className="whitespace-nowrap text-lg font-bold text-white">FCFA {item.price}</div>

                <div className="ml-4">
                  <span className={`px-3 py-1 text-sm rounded-full font-medium ${item.available ? 'bg-green-600/10 text-green-200 ring-1 ring-green-700/20' : 'bg-red-600/10 text-red-200 ring-1 ring-red-700/20'}`}>
                    {item.available ? 'Available' : 'Out of stock'}
                  </span>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      ))}
    </div>
  );
};

export default ItemsCardLayout;
