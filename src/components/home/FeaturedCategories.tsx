
import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const categories = [
  {
    id: "math",
    name: "Mathematics",
    icon: "📊",
    color: "bg-blue-50 text-blue-600",
    count: 126
  },
  {
    id: "science",
    name: "Sciences",
    icon: "🧪",
    color: "bg-green-50 text-green-600",
    count: 98
  },
  {
    id: "languages",
    name: "Languages",
    icon: "📝",
    color: "bg-purple-50 text-purple-600",
    count: 74
  },
  {
    id: "humanities",
    name: "Humanities",
    icon: "🌍",
    color: "bg-amber-50 text-amber-600",
    count: 65
  }
];

const FeaturedCategories = () => {
  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-heading font-bold">Subject Categories</h2>
        <Link to="/subjects" className="flex items-center text-sm text-primary hover:underline">
          View all
          <ChevronRight className="ml-1 h-4 w-4" />
        </Link>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
        {categories.map(category => (
          <Link to={`/subjects/${category.id}`} key={category.id}>
            <Card className="hover:shadow-md transition-shadow">
              <CardContent className="p-4 flex items-center">
                <div className={`flex items-center justify-center w-12 h-12 rounded-full ${category.color} mr-3 text-2xl`}>
                  {category.icon}
                </div>
                <div>
                  <h3 className="font-medium">{category.name}</h3>
                  <p className="text-sm text-muted-foreground">{category.count} resources</p>
                </div>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default FeaturedCategories;
