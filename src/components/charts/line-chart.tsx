import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

// Sample data for line chart
const sampleData = [
  { name: 'Mon', views: 1200 },
  { name: 'Tue', views: 2100 },
  { name: 'Wed', views: 800 },
  { name: 'Thu', views: 1600 },
  { name: 'Fri', views: 900 },
  { name: 'Sat', views: 1700 },
  { name: 'Sun', views: 2200 },
];

const StoreViewsLineChart = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Views Overview</CardTitle>
      </CardHeader>
      <CardContent className="h-[350px] w-full">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={sampleData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Line type="monotone" dataKey="views" stroke="#2563EB" strokeWidth={3} dot={{ r: 5 }} />
          </LineChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
};

export default StoreViewsLineChart;
