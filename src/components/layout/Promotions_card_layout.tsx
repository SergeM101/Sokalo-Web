//import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { motion } from 'framer-motion';

type Promo = {
  id: string | number;
  title: string;
  percentOff?: number;
  start?: string;
  end?: string;
  description?: string;
};

const PromoCard = ({ p }: { p: Promo }) => (
  <motion.div initial={{ opacity: 0, y: 14 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.85, ease: 'easeOut' }}>
    <Card className="hover:shadow-lg shadow-md transition-shadow border rounded-md">
      <CardHeader>
        <CardTitle className="text-lg">{p.title}</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex items-center justify-between">
          <div>
            {p.percentOff && <div className="text-2xl font-bold text-primary">{p.percentOff}% off</div>}
            {p.description && <div className="text-sm text-muted-foreground mt-1">{p.description}</div>}
          </div>
          <div className="text-xs text-muted-foreground text-right">
            <div>{p.start}</div>
            <div>{p.end}</div>
          </div>
        </div>
      </CardContent>
    </Card>
  </motion.div>
);

const PromotionsCardLayout = ({ promos }: { promos: Promo[] }) => {
  return (
    <div className="grid md:grid-cols-3 gap-4">
      {promos.map((p) => (
        <PromoCard key={p.id} p={p} />
      ))}
    </div>
  );
};

export default PromotionsCardLayout;
