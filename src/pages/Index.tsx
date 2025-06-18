
import HeroSection from "@/components/home/HeroSection";
import FeaturedCategories from "@/components/home/FeaturedCategories";
import EducationLevels from "@/components/home/EducationLevels";
import ResourceGrid from "@/components/resources/ResourceGrid";

// Mock data for resources
const featuredResources = [
  {
    id: "1",
    title: "Mathematics for O-Level - Algebra Fundamentals",
    type: "book" as const,
    subject: "Mathematics",
    level: "o-level" as const,
    description: "Comprehensive guide to algebraic concepts for O-Level students",
  },
  {
    id: "2",
    title: "Biology Practical Experiments - A-Level",
    type: "video" as const,
    subject: "Biology",
    level: "a-level" as const,
    description: "Video demonstrations of key A-Level biology experiments",
  },
  {
    id: "3",
    title: "Uganda Geography - Physical Features",
    type: "book" as const,
    subject: "Geography",
    level: "o-level" as const,
    description: "Detailed study of Uganda's landscape and physical geography",
  },
  {
    id: "4",
    title: "Physics UNEB Past Papers (2018-2022)",
    type: "exam" as const,
    subject: "Physics",
    level: "a-level" as const,
    description: "Compilation of recent UNEB Physics examination papers with solutions",
  }
];

const recentlyAddedResources = [
  {
    id: "5",
    title: "English Literature - Modern African Writers",
    type: "book" as const,
    subject: "English",
    level: "a-level" as const,
    description: "Analysis of contemporary African literary works for A-Level students",
  },
  {
    id: "6",
    title: "Chemistry - Organic Compounds Tutorial",
    type: "video" as const,
    subject: "Chemistry",
    level: "a-level" as const,
    description: "Video lessons explaining organic chemistry concepts",
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
  }
];

const Index = () => {
  return (
    <div className="space-y-10 max-w-7xl mx-auto">
      <HeroSection />
      
      <EducationLevels />
      
      <FeaturedCategories />
      
      <ResourceGrid resources={featuredResources} title="Featured Resources" />
      
      <ResourceGrid resources={recentlyAddedResources} title="Recently Added" />
    </div>
  );
};

export default Index;
