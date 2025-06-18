
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import ResourceGrid from "@/components/resources/ResourceGrid";

// Mock data for past papers
const pastPapers = [
  {
    id: "p1",
    title: "Mathematics UNEB 2022",
    type: "exam" as const,
    subject: "Mathematics",
    level: "o-level" as const,
    description: "Uganda National Examinations Board O-Level Mathematics Paper, 2022",
  },
  {
    id: "p2",
    title: "Physics UNEB 2021",
    type: "exam" as const,
    subject: "Physics",
    level: "a-level" as const,
    description: "Uganda National Examinations Board A-Level Physics Paper, 2021",
  },
  {
    id: "p3",
    title: "English Language UNEB 2022",
    type: "exam" as const,
    subject: "English",
    level: "o-level" as const,
    description: "Uganda National Examinations Board O-Level English Paper, 2022",
  },
  {
    id: "p4",
    title: "Chemistry UNEB 2021",
    type: "exam" as const,
    subject: "Chemistry",
    level: "a-level" as const,
    description: "Uganda National Examinations Board A-Level Chemistry Paper, 2021",
  }
];

const PastPapers = () => {
  const [filter, setFilter] = useState("all");
  
  // Filter papers based on selected tab
  const filteredPapers = filter === "all" 
    ? pastPapers 
    : pastPapers.filter(paper => paper.level === filter);

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold font-heading">Past Papers</h1>
        <p className="text-muted-foreground mt-2">
          Access previous UNEB examination papers for O-Level and A-Level
        </p>
      </div>

      <Tabs defaultValue="all" onValueChange={setFilter}>
        <TabsList>
          <TabsTrigger value="all">All Papers</TabsTrigger>
          <TabsTrigger value="o-level">O-Level</TabsTrigger>
          <TabsTrigger value="a-level">A-Level</TabsTrigger>
        </TabsList>
        
        <TabsContent value="all" className="mt-6">
          <ResourceGrid resources={filteredPapers} />
        </TabsContent>
        
        <TabsContent value="o-level" className="mt-6">
          <ResourceGrid resources={filteredPapers} />
        </TabsContent>
        
        <TabsContent value="a-level" className="mt-6">
          <ResourceGrid resources={filteredPapers} />
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default PastPapers;
