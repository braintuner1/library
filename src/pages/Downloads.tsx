
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Download, Trash2, BookOpen } from "lucide-react";
import { Progress } from "@/components/ui/progress";

// Mock data
const downloadedResources = [
  {
    id: "1",
    title: "Mathematics for O-Level - Algebra Fundamentals",
    type: "book",
    subject: "Mathematics",
    level: "o-level" as const,
    dateDownloaded: "2024-05-15",
    size: "25.4 MB"
  },
  {
    id: "5",
    title: "English Literature - Modern African Writers",
    type: "book",
    subject: "English",
    level: "a-level" as const,
    dateDownloaded: "2024-05-14",
    size: "18.2 MB"
  },
  {
    id: "11",
    title: "Physics - Mechanics and Motion",
    type: "video",
    subject: "Physics",
    level: "o-level" as const,
    dateDownloaded: "2024-05-10",
    size: "145.7 MB"
  }
];

const downloadsInProgress = [
  {
    id: "7",
    title: "History of East Africa - Colonial Period",
    type: "book",
    subject: "History",
    level: "o-level" as const,
    progress: 65,
    size: "32.1 MB"
  },
  {
    id: "12",
    title: "Literature in English - Poetry Analysis",
    type: "document",
    subject: "Literature",
    level: "a-level" as const,
    progress: 28,
    size: "8.5 MB"
  }
];

const Downloads = () => {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold font-heading">My Downloads</h1>
        <p className="text-muted-foreground mt-2">
          Access your downloaded resources offline
        </p>
      </div>

      <Tabs defaultValue="completed">
        <TabsList>
          <TabsTrigger value="completed">Completed</TabsTrigger>
          <TabsTrigger value="in-progress">In Progress</TabsTrigger>
        </TabsList>
        
        <TabsContent value="completed" className="mt-6">
          <div className="space-y-4">
            {downloadedResources.length > 0 ? (
              downloadedResources.map(item => (
                <Card key={item.id}>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-lg font-medium">{item.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="pb-2">
                    <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-muted-foreground">
                      <div>Subject: {item.subject}</div>
                      <div>Type: {item.type}</div>
                      <div>Level: {item.level === "o-level" ? "O-Level" : "A-Level"}</div>
                      <div>Downloaded: {item.dateDownloaded}</div>
                      <div>Size: {item.size}</div>
                    </div>
                  </CardContent>
                  <CardFooter className="flex gap-2 justify-end">
                    <Button variant="outline" size="sm">
                      <BookOpen className="h-4 w-4 mr-2" />
                      Open
                    </Button>
                    <Button variant="ghost" size="sm" className="text-destructive">
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </CardFooter>
                </Card>
              ))
            ) : (
              <div className="text-center py-10">
                <p className="text-muted-foreground">No downloaded resources yet</p>
              </div>
            )}
          </div>
        </TabsContent>
        
        <TabsContent value="in-progress" className="mt-6">
          <div className="space-y-4">
            {downloadsInProgress.length > 0 ? (
              downloadsInProgress.map(item => (
                <Card key={item.id}>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-lg font-medium">{item.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="pb-2">
                    <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-muted-foreground mb-3">
                      <div>Subject: {item.subject}</div>
                      <div>Type: {item.type}</div>
                      <div>Level: {item.level === "o-level" ? "O-Level" : "A-Level"}</div>
                      <div>Size: {item.size}</div>
                    </div>
                    <div className="space-y-1">
                      <div className="flex justify-between text-sm">
                        <span>Downloading...</span>
                        <span>{item.progress}%</span>
                      </div>
                      <Progress value={item.progress} className="h-2" />
                    </div>
                  </CardContent>
                  <CardFooter className="flex justify-end">
                    <Button variant="ghost" size="sm" className="text-destructive">
                      Cancel
                    </Button>
                  </CardFooter>
                </Card>
              ))
            ) : (
              <div className="text-center py-10">
                <p className="text-muted-foreground">No downloads in progress</p>
              </div>
            )}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Downloads;
