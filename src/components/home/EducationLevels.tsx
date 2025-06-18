
import { BookOpen, BookCopy } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

const EducationLevels = () => {
  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-heading font-bold">Education Levels</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card className="border-l-4 border-l-blue-500">
          <CardHeader>
            <div className="flex items-center gap-3">
              <div className="bg-blue-100 p-2 rounded-full">
                <BookOpen className="h-6 w-6 text-blue-600" />
              </div>
              <CardTitle>O-Level Resources</CardTitle>
            </div>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              Access resources aligned with Uganda's O-Level curriculum including textbooks, 
              practice questions, video lessons and past papers.
            </p>
            <div className="mt-4 grid grid-cols-2 sm:grid-cols-3 gap-2">
              <div className="border rounded p-2 text-center text-sm">
                <div className="font-bold">10+</div>
                <div className="text-xs text-muted-foreground">Subjects</div>
              </div>
              <div className="border rounded p-2 text-center text-sm">
                <div className="font-bold">500+</div>
                <div className="text-xs text-muted-foreground">Books</div>
              </div>
              <div className="border rounded p-2 text-center text-sm">
                <div className="font-bold">200+</div>
                <div className="text-xs text-muted-foreground">Videos</div>
              </div>
            </div>
          </CardContent>
          <CardFooter>
            <Button className="w-full" variant="outline">
              Browse O-Level Resources
            </Button>
          </CardFooter>
        </Card>

        <Card className="border-l-4 border-l-green-500">
          <CardHeader>
            <div className="flex items-center gap-3">
              <div className="bg-green-100 p-2 rounded-full">
                <BookOpen className="h-6 w-6 text-green-600" />
              </div>
              <CardTitle>A-Level Resources</CardTitle>
            </div>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              Explore specialized A-Level content including advanced textbooks, 
              study guides, past examination papers, and video tutorials.
            </p>
            <div className="mt-4 grid grid-cols-2 sm:grid-cols-3 gap-2">
              <div className="border rounded p-2 text-center text-sm">
                <div className="font-bold">15+</div>
                <div className="text-xs text-muted-foreground">Subjects</div>
              </div>
              <div className="border rounded p-2 text-center text-sm">
                <div className="font-bold">300+</div>
                <div className="text-xs text-muted-foreground">Books</div>
              </div>
              <div className="border rounded p-2 text-center text-sm">
                <div className="font-bold">150+</div>
                <div className="text-xs text-muted-foreground">Papers</div>
              </div>
            </div>
          </CardContent>
          <CardFooter>
            <Button className="w-full" variant="outline">
              Browse A-Level Resources
            </Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
};

export default EducationLevels;
