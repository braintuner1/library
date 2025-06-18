
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useNavigate } from "react-router-dom";
import { Book, BookOpen, Microscope, Beaker, Atom, Globe, History as HistoryIcon, Laptop } from "lucide-react";

// Mock data for A-Level subjects
const subjects = [
  {
    id: "mathematics",
    title: "Mathematics",
    icon: Book,
    resourceCount: 38,
  },
  {
    id: "literature",
    title: "Literature in English",
    icon: BookOpen,
    resourceCount: 25,
  },
  {
    id: "biology",
    title: "Biology",
    icon: Microscope,
    resourceCount: 30,
  },
  {
    id: "chemistry",
    title: "Chemistry",
    icon: Beaker,
    resourceCount: 28,
  },
  {
    id: "physics",
    title: "Physics",
    icon: Atom,
    resourceCount: 26,
  },
  {
    id: "geography",
    title: "Geography",
    icon: Globe,
    resourceCount: 20,
  },
  {
    id: "history",
    title: "History",
    icon: HistoryIcon,
    resourceCount: 22,
  },
  {
    id: "computer-science",
    title: "Computer Science",
    icon: Laptop,
    resourceCount: 18,
  },
];

const ALevel = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("subjects");

  const handleSubjectClick = (subjectId: string) => {
    // Navigate to subject-specific page
    navigate(`/a-level/${subjectId}`);
  };
  
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold font-heading">A-Level Resources</h1>
        <p className="text-muted-foreground mt-2">
          Advanced curriculum-aligned resources for Uganda's Advanced Level education
        </p>
      </div>

      <Tabs defaultValue="subjects" value={activeTab} onValueChange={setActiveTab}>
        <TabsList>
          <TabsTrigger value="subjects">Subjects</TabsTrigger>
          <TabsTrigger value="recent">Recent Resources</TabsTrigger>
          <TabsTrigger value="popular">Most Popular</TabsTrigger>
        </TabsList>
        
        <TabsContent value="subjects" className="mt-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {subjects.map((subject) => (
              <Card 
                key={subject.id} 
                className="cursor-pointer hover:border-primary hover:shadow-md transition-all"
                onClick={() => handleSubjectClick(subject.id)}
              >
                <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
                  <CardTitle className="text-xl">{subject.title}</CardTitle>
                  <subject.icon className="h-6 w-6 text-primary" />
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    {subject.resourceCount} resources available
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>
        
        <TabsContent value="recent" className="mt-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Card>
              <CardHeader>
                <CardTitle>Recent A-Level Resources</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Recent resources will be displayed here.</p>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
        
        <TabsContent value="popular" className="mt-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Card>
              <CardHeader>
                <CardTitle>Popular A-Level Resources</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Most popular resources will be displayed here.</p>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default ALevel;
