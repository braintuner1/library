import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Search } from "lucide-react";
import ResourceGrid from "@/components/resources/ResourceGrid";

// Mock data for resources
const allResources = [
  {
    id: "1",
    title: "Mathematics for O-Level - Algebra Fundamentals",
    type: "book" as const,
    subject: "Mathematics",
    level: "o-level" as const,
    description: "Comprehensive guide to algebraic concepts for O-Level students",
    downloadURL: "/files/math_algebra.pdf"
  },
  {
    id: "2",
    title: "Biology Practical Experiments - A-Level",
    type: "video" as const,
    subject: "Biology",
    level: "a-level" as const,
    description: "Video demonstrations of key A-Level biology experiments",
    downloadURL: "/files/biology_experiments.mp4"
  },
  {
    id: "3",
    title: "Uganda Geography - Physical Features",
    type: "book" as const,
    subject: "Geography",
    level: "o-level" as const,
    description: "Detailed study of Uganda's landscape and physical geography",
    downloadURL: "/files/uganda_geography.pdf"
  },
  {
    id: "4",
    title: "Physics UNEB Past Papers (2018-2022)",
    type: "exam" as const,
    subject: "Physics",
    level: "a-level" as const,
    description: "Compilation of recent UNEB Physics examination papers with solutions",
    downloadURL: "/files/physics_papers.zip"
  },
  {
    id: "5",
    title: "English Literature - Modern African Writers",
    type: "book" as const,
    subject: "English",
    level: "a-level" as const,
    description: "Analysis of contemporary African literary works for A-Level students",
    downloadURL: "/files/english_literature.pdf"
  },
  {
    id: "6",
    title: "Chemistry - Organic Compounds Tutorial",
    type: "video" as const,
    subject: "Chemistry",
    level: "a-level" as const,
    description: "Video lessons explaining organic chemistry concepts",
    downloadURL: "/files/chemistry_tutorial.mp4"
  },
  {
    id: "7",
    title: "History of East Africa - Colonial Period",
    type: "book" as const,
    subject: "History",
    level: "o-level" as const,
    description: "Historical account of East Africa during colonialism",
  },
  {
    id: "8",
    title: "Mathematics Practice Workbook",
    type: "document" as const,
    subject: "Mathematics",
    level: "o-level" as const,
    description: "Problem sets and exercises for O-Level mathematics",
  },
  {
    id: "9",
    title: "Computer Science - Programming Fundamentals",
    type: "book" as const,
    subject: "Computer Science",
    level: "a-level" as const,
    description: "Introduction to programming concepts for A-Level students",
  },
  {
    id: "10",
    title: "Agriculture - Crop Production",
    type: "book" as const,
    subject: "Agriculture",
    level: "o-level" as const,
    description: "Comprehensive guide to crop production techniques",
  },
  {
    id: "11",
    title: "Physics - Mechanics and Motion",
    type: "video" as const,
    subject: "Physics",
    level: "o-level" as const,
    description: "Video tutorials on basic mechanics principles",
  },
  {
    id: "12",
    title: "Literature in English - Poetry Analysis",
    type: "document" as const,
    subject: "Literature",
    level: "a-level" as const,
    description: "Analysis of poetic devices and themes in selected poems",
  }
];

// Assume teacher resources are a subset (or come from a different source)
const teacherResources = [
  {
    id: "T1",
    title: "Classroom Management Tips",
    type: "document" as const,
    subject: "General",
    level: "teacher" as const,
    description: "Guidelines for effective classroom management.",
    downloadURL: "/files/classroom_management.pdf"
  },
  {
    id: "T2",
    title: "Teaching Strategies in STEM",
    type: "book" as const,
    subject: "STEM",
    level: "teacher" as const,
    description: "Innovative strategies for teaching STEM subjects.",
    downloadURL: "/files/stem_strategies.pdf"
  }
];

const Library = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [subject, setSubject] = useState<string | undefined>(undefined);
  const [resourceType, setResourceType] = useState<string | undefined>(undefined);
  const navigate = useNavigate();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    // In a full application, you might navigate to a search results page passing query and filters.
    console.log("Searching for:", searchQuery, "with filters:", { subject, resourceType });
  };

  // Filter resources based on level (for tabs)
  const oLevelResources = allResources.filter(resource => resource.level === "o-level");
  const aLevelResources = allResources.filter(resource => resource.level === "a-level");

  // Redirect functions for tabs and subject buttons
  const handleTabChange = (value: string) => {
    if (value === "o-level") {
      navigate("/resources/olevel");
    } else if (value === "a-level") {
      navigate("/resources/alevel");
    } else if (value === "teacher") {
      navigate("/resources/teacher");
    }
  };

  const handleSubjectClick = (subjectName: string) => {
    // Navigate to a subject-specific resource page
    navigate(`/resources/subject/${subjectName}`);
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold font-heading">Library Resources</h1>
      </div>
      
      <div className="bg-card p-4 rounded-lg border">
        <form onSubmit={handleSearch} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="lg:col-span-2">
            <Input
              placeholder="Search resources..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          
          <Select value={subject} onValueChange={setSubject}>
            <SelectTrigger>
              <SelectValue placeholder="Subject" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="mathematics">Mathematics</SelectItem>
              <SelectItem value="english">English</SelectItem>
              <SelectItem value="science">Science</SelectItem>
              <SelectItem value="history">History</SelectItem>
              <SelectItem value="geography">Geography</SelectItem>
              <SelectItem value="chemistry">Chemistry</SelectItem>
              <SelectItem value="biology">Biology</SelectItem>
            </SelectContent>
          </Select>
          
          <Select value={resourceType} onValueChange={setResourceType}>
            <SelectTrigger>
              <SelectValue placeholder="Resource Type" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="book">Books</SelectItem>
              <SelectItem value="video">Videos</SelectItem>
              <SelectItem value="document">Documents</SelectItem>
              <SelectItem value="exam">Past Papers</SelectItem>
            </SelectContent>
          </Select>
          
          <div className="lg:col-span-4 flex justify-end">
            <Button type="submit">
              <Search className="h-4 w-4 mr-2" />
              Search
            </Button>
          </div>
        </form>
      </div>
      
      {/* Extra categories in "View All" section */}
      <div className="flex flex-wrap gap-4">
        <Button variant="link" onClick={() => handleSubjectClick("mathematics")}>Mathematics</Button>
        <Button variant="link" onClick={() => handleSubjectClick("english")}>English</Button>
        <Button variant="link" onClick={() => handleSubjectClick("science")}>Science</Button>
        <Button variant="link" onClick={() => handleSubjectClick("history")}>History</Button>
        <Button variant="link" onClick={() => handleSubjectClick("geography")}>Geography</Button>
        <Button variant="link" onClick={() => handleSubjectClick("chemistry")}>Chemistry</Button>
        <Button variant="link" onClick={() => handleSubjectClick("biology")}>Biology</Button>
      </div>

      {/* Tabs for overall resources */}
      <Tabs defaultValue="all" onValueChange={handleTabChange}>
        <TabsList>
          <TabsTrigger value="all">All Resources</TabsTrigger>
          <TabsTrigger value="o-level">O-Level</TabsTrigger>
          <TabsTrigger value="a-level">A-Level</TabsTrigger>
          <TabsTrigger value="teacher">Teacher Resources</TabsTrigger>
        </TabsList>
        
        <TabsContent value="all" className="mt-6">
          <ResourceGrid resources={allResources} />
        </TabsContent>
        
        <TabsContent value="o-level" className="mt-6">
          <ResourceGrid resources={oLevelResources} />
        </TabsContent>
        
        <TabsContent value="a-level" className="mt-6">
          <ResourceGrid resources={aLevelResources} />
        </TabsContent>
        
        <TabsContent value="teacher" className="mt-6">
          <ResourceGrid resources={teacherResources} />
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Library;
