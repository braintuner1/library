
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import ResourceGrid from "@/components/resources/ResourceGrid";
import { useToast } from "@/hooks/use-toast";

// Mock subjects data
const subjects = {
  "mathematics": {
    title: "Mathematics",
    description: "Advanced level mathematics resources including pure mathematics, statistics and mechanics",
    level: "a-level"
  },
  "literature": {
    title: "Literature in English",
    description: "A-Level literature resources covering novels, poetry, drama and critical analysis",
    level: "a-level"
  },
  "biology": {
    title: "Biology",
    description: "A-Level biology resources for understanding organisms, cells, genetics and ecosystems",
    level: "a-level"
  },
  "chemistry": {
    title: "Chemistry", 
    description: "Advanced chemistry resources for organic, inorganic and physical chemistry",
    level: "a-level"
  },
  "physics": {
    title: "Physics",
    description: "A-Level physics materials covering mechanics, electricity, waves and modern physics",
    level: "a-level"
  },
  "geography": {
    title: "Geography",
    description: "Physical and human geography resources for A-Level students",
    level: "a-level"
  },
  "history": {
    title: "History",
    description: "A-Level history materials covering key periods in world and Ugandan history",
    level: "a-level"
  },
  "computer-science": {
    title: "Computer Science",
    description: "Advanced computing resources including programming, theory and systems development",
    level: "a-level"
  }
};

// Mock resources data
const mockResources = [
  {
    id: "r1",
    title: "Introduction to Subject",
    type: "pdf",
    subject: "general",
    level: "a-level",
    description: "A comprehensive introduction to this subject",
  },
  {
    id: "r2",
    title: "Key Concepts Overview",
    type: "video",
    subject: "general",
    level: "a-level",
    description: "Video explanation of the fundamental concepts",
  },
  {
    id: "r3",
    title: "Practice Questions",
    type: "pdf",
    subject: "general",
    level: "a-level",
    description: "Exercises to test your understanding",
  },
  {
    id: "r4",
    title: "UNEB Past Paper 2022",
    type: "exam",
    subject: "general",
    level: "a-level",
    description: "Full exam paper with marking scheme",
  }
];

const SubjectPage = () => {
  const { subjectId } = useParams<{ subjectId: string }>();
  const navigate = useNavigate();
  const { toast } = useToast();
  const [activeTab, setActiveTab] = useState("resources");
  
  // Get subject info or default values if not found
  const subject = subjects[subjectId as keyof typeof subjects] || {
    title: subjectId?.replace(/-/g, ' '),
    description: "Resources for this subject",
    level: "a-level"
  };

  // Check if subject exists on mount
  useEffect(() => {
    if (!subjectId || !subjects[subjectId as keyof typeof subjects]) {
      toast({
        title: "Subject not found",
        description: "The requested subject could not be found",
        variant: "destructive",
      });
    }
  }, [subjectId, toast]);

  const handleBack = () => {
    // Go back to the appropriate level page
    navigate(`/${subject.level}`);
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-2">
        <Button variant="outline" size="icon" onClick={handleBack}>
          <ArrowLeft className="h-4 w-4" />
        </Button>
        <div>
          <h1 className="text-3xl font-bold font-heading capitalize">{subject.title}</h1>
          <p className="text-muted-foreground mt-1">
            {subject.description}
          </p>
        </div>
      </div>

      <Tabs defaultValue="resources" value={activeTab} onValueChange={setActiveTab}>
        <TabsList>
          <TabsTrigger value="resources">Learning Resources</TabsTrigger>
          <TabsTrigger value="videos">Video Lessons</TabsTrigger>
          <TabsTrigger value="papers">Past Papers</TabsTrigger>
        </TabsList>
        
        <TabsContent value="resources" className="mt-6">
          <ResourceGrid resources={mockResources} />
        </TabsContent>
        
        <TabsContent value="videos" className="mt-6">
          <ResourceGrid 
            resources={mockResources.filter(r => r.type === 'video')}
            emptyMessage="No video lessons available for this subject yet." 
          />
        </TabsContent>
        
        <TabsContent value="papers" className="mt-6">
          <ResourceGrid 
            resources={mockResources.filter(r => r.type === 'exam')}
            emptyMessage="No past papers available for this subject yet." 
          />
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default SubjectPage;
