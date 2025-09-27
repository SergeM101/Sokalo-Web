//import React from 'react';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Star } from 'lucide-react';
import { motion } from 'framer-motion';

type Review = {
  id: string | number;
  author: string;
  role?: string;
  comment: string;
  date?: string;
  rating: number;
  avatar?: string;
};

const ReviewCard = ({ r }: { r: Review }) => (
  <motion.div
    initial={{ opacity: 0, y: 18, scale: 0.98 }}
    whileInView={{ opacity: 1, y: 0, scale: 1 }}
    viewport={{ once: true }}
    transition={{ duration: 0.9, ease: 'easeOut' }}
  >
    <Card className="h-full shadow-md hover:shadow-2xl transition-shadow">
      <CardHeader>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            {r.avatar ? (
              <img src={r.avatar} alt={r.author} className="w-12 h-12 rounded-full object-cover shadow-sm" />
            ) : (
              <div className="w-12 h-12 rounded-full bg-muted-foreground/10 flex items-center justify-center text-sm font-semibold">{r.author?.[0]}</div>
            )}
            <div>
              <div className="font-semibold">{r.author}</div>
              {r.role && <div className="text-sm text-muted-foreground">{r.role}</div>}
            </div>
          </div>
          <div className="flex items-center gap-1 text-yellow-500">
            {[...Array(r.rating)].map((_, i) => (
              <Star key={i} className="w-4 h-4 fill-current" />
            ))}
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <blockquote className="text-sm text-gray-700 italic">“{r.comment}”</blockquote>
        {r.date && <div className="text-xs text-muted-foreground mt-3">{r.date}</div>}
      </CardContent>
    </Card>
  </motion.div>
);

const ReviewsCardLayout = ({ reviews }: { reviews: Review[] }) => {
  return (
    <div className="grid md:grid-cols-3 gap-4">
      {reviews.map((r) => (
        <ReviewCard key={r.id} r={r} />
      ))}
    </div>
  );
};

export default ReviewsCardLayout;
