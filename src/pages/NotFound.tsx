
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const navigate = useNavigate();
  
  useEffect(() => {
    console.error("404 Error: Page not found");
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center bg-muted/30">
      <div className="text-center max-w-md mx-auto px-4">
        <h1 className="text-6xl font-bold font-heading mb-4 text-uganda-red">404</h1>
        <p className="text-xl mb-6">The page you're looking for couldn't be found.</p>
        <p className="text-muted-foreground mb-8">
          The link you followed might be broken, or the page may have been removed or renamed.
        </p>
        <Button onClick={() => navigate("/")} className="px-6">
          Return to Home
        </Button>
      </div>
    </div>
  );
};

export default NotFound;
