
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useNavigate } from "react-router-dom";
import { Book, BookOpen, Calculator, Beaker, Atom, Globe, HistoryIcon, Languages } from "lucide-react";

// Mock data for O-Level subjects
const subjects = [
  {
    id: "mathematics",
    title: "Mathematics",
    icon: Calculator,
    resourceCount: 42,
  },
  {
    id: "english",
    title: "English Language",
    icon: BookOpen,
    resourceCount: 35,
  },
  {
    id: "biology",
    title: "Biology",
    icon: Book,
    resourceCount: 28,
  },
  {
    id: "chemistry",
    title: "Chemistry",
    icon: Beaker,
    resourceCount: 25,
  },
  {
    id: "physics",
    title: "Physics",
    icon: Atom,
    resourceCount: 30,
  },
  {
    id: "geography",
    title: "Geography",
    icon: Globe,
    resourceCount: 22,
  },
  {
    id: "history",
    title: "History",
    icon: HistoryIcon,
    resourceCount: 18,
  },
  {
    id: "languages",
    title: "Languages",
    icon: Languages,
    resourceCount: 20,
  },
];

const OLevel = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("subjects");

  const handleSubjectClick = (subjectId: string) => {
    // Navigate to subject-specific page
    navigate(`/o-level/${subjectId}`);
  };
  
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold font-heading">O-Level Resources</h1>
        <p className="text-muted-foreground mt-2">
          Standard curriculum-aligned resources for Uganda's Ordinary Level education
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
                <CardTitle>Recent O-Level Resources</CardTitle>
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
                <CardTitle>Popular O-Level Resources</CardTitle>
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

export default OLevel;
