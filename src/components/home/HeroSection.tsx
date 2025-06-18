
import { Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const HeroSection = () => {
  return (
    <div className="relative bg-gradient-to-br from-uganda-black via-uganda-black to-uganda-red/90 text-white rounded-xl overflow-hidden">
      <div className="absolute inset-0 bg-grid-white/5 [mask-image:linear-gradient(to_bottom,white,transparent)]" />
      <div className="relative max-w-5xl mx-auto px-4 py-16 sm:px-6 sm:py-24 lg:px-8 flex flex-col items-center text-center">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold font-heading mb-6">
          Uganda's Digital Library <br />
          <span className="text-uganda-yellow">for the New Curriculum</span>
        </h1>
        <p className="text-lg sm:text-xl max-w-2xl mb-10">
          Access curriculum-aligned textbooks, past papers, videos, and more for O-Level and A-Level students and teachers.
        </p>
        
        <div className="w-full max-w-md">
          <div className="relative">
            <Input 
              type="search"
              placeholder="Search for subjects, topics, resources..." 
              className="pl-4 pr-10 py-6 rounded-full bg-white/10 backdrop-blur-sm text-white placeholder:text-gray-300 border-white/20 focus:border-white focus-visible:ring-1 focus-visible:ring-white" 
            />
            <Button 
              className="absolute right-1 top-1 rounded-full bg-uganda-yellow text-black hover:bg-uganda-yellow/90 h-10 w-10 p-0" 
              aria-label="Search"
            >
              <Search className="h-5 w-5" />
            </Button>
          </div>
        </div>

        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <Button className="bg-white text-uganda-black hover:bg-white/90">
            Browse O-Level
          </Button>
          <Button className="bg-white text-uganda-black hover:bg-white/90">
            Browse A-Level
          </Button>
          <Button className="bg-uganda-yellow text-uganda-black hover:bg-uganda-yellow/90">
            Teacher Resources
          </Button>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
