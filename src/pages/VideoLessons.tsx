import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import ResourceGrid from "@/components/resources/ResourceGrid";

// Sample YouTube-based video resources
const videoResources = [
  {
    id: "v1",
    title: "Mathematics - Algebra Fundamentals",
    type: "video" as const,
    subject: "Mathematics",
    level: "o-level" as const,
    description: "Comprehensive guide to algebraic concepts for O-Level students",
    youtubeId: "dQw4w9WgXcQ", // Replace with the actual YouTube video ID
    thumbnail: "",
  },
  {
    id: "v2",
    title: "Biology Practical Experiments",
    type: "video" as const,
    subject: "Biology",
    level: "a-level" as const,
    description: "Video demonstrations of key A-Level biology experiments",
    youtubeId: "abcd1234", // Replace with the actual YouTube video ID
    thumbnail: "https://img.youtube.com/vi/abcd1234/hqdefault.jpg",
  },
  {
    id: "v3",
    title: "Physics - Forces and Motion",
    type: "video" as const,
    subject: "Physics",
    level: "o-level" as const,
    description: "Detailed explanations of Newton's laws and motion principles",
    youtubeId: "efgh5678", // Replace with the actual YouTube video ID
    thumbnail: "https://img.youtube.com/vi/efgh5678/hqdefault.jpg",
  },
  {
    id: "v4",
    title: "Literature - Poetry Analysis",
    type: "video" as const,
    subject: "Literature",
    level: "a-level" as const,
    description: "Techniques for analyzing poetic devices and themes",
    youtubeId: "ijkl9012", // Replace with the actual YouTube video ID
    thumbnail: "https://img.youtube.com/vi/ijkl9012/hqdefault.jpg",
  },
];

const VideoLessons = () => {
  const [filter, setFilter] = useState("all");
  
  // Filter videos based on selected tab: if "all" then all videos, otherwise filter by level.
  const filteredVideos =
    filter === "all"
      ? videoResources
      : videoResources.filter((video) => video.level === filter);

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold font-heading">Video Lessons</h1>
        <p className="text-muted-foreground mt-2">
          Watch curriculum-aligned video lessons for O-Level and A-Level subjects
        </p>
      </div>

      <Tabs defaultValue="all" onValueChange={setFilter}>
        <TabsList>
          <TabsTrigger value="all">All Videos</TabsTrigger>
          <TabsTrigger value="o-level">O-Level</TabsTrigger>
          <TabsTrigger value="a-level">A-Level</TabsTrigger>
        </TabsList>
        
        <TabsContent value="all" className="mt-6">
          <ResourceGrid resources={filteredVideos} />
        </TabsContent>
        
        <TabsContent value="o-level" className="mt-6">
          <ResourceGrid resources={filteredVideos} />
        </TabsContent>
        
        <TabsContent value="a-level" className="mt-6">
          <ResourceGrid resources={filteredVideos} />
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default VideoLessons;