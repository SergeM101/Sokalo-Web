// in src/components/StoreCard.tsx

import { Link } from "react-router-dom";
import { type Store } from "../../services/storeService"; // Import the Store type
import { Button } from "../ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";

// Define the props that this component will accept
interface StoreCardProps {
  store: Store;
}

const StoreCard: React.FC<StoreCardProps> = ({ store }) => {
  return (
    <Card className="overflow-hidden hover:shadow-xl transition-shadow duration-300">
      <CardHeader>
        <CardTitle>{store.officialName}</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <p className="text-gray-600 h-12">{store.address}</p> {/* Set a fixed height */}
        <Button asChild className="w-full bg-primary hover:bg-blue-700">
          <Link to={`/stores/${store.storeID}`}>
            Visit Store
          </Link>
        </Button>
      </CardContent>
    </Card>
  );
};

export default StoreCard;