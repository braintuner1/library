
import React from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "./contexts/ThemeContext";
import Layout from "./components/layout/Layout";
import Index from "./pages/Index";
import Library from "./pages/Library";
import OLevel from "./pages/OLevel";
import ALevel from "./pages/ALevel";
import Downloads from "./pages/Downloads";
import VideoLessons from "./pages/VideoLessons";
import PastPapers from "./pages/PastPapers";
import Profile from "./pages/Profile";
import Settings from "./pages/Settings";
import NotFound from "./pages/NotFound";
import SubjectPage from "./pages/SubjectPage";

// Create a client
const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <BrowserRouter>
            <Routes>
              <Route element={<Layout />}>
                <Route path="/" element={<Index />} />
                <Route path="/library" element={<Library />} />
                <Route path="/o-level" element={<OLevel />} />
                <Route path="/a-level" element={<ALevel />} />
                <Route path="/a-level/:subjectId" element={<SubjectPage />} />
                <Route path="/o-level/:subjectId" element={<SubjectPage />} />
                <Route path="/downloads" element={<Downloads />} />
                <Route path="/video-lessons" element={<VideoLessons />} />
                <Route path="/past-papers" element={<PastPapers />} />
                <Route path="/profile" element={<Profile />} />
                <Route path="/settings" element={<Settings />} />
              </Route>
              <Route path="*" element={<NotFound />} />
            </Routes>
          </BrowserRouter>
        </TooltipProvider>
      </ThemeProvider>
    </QueryClientProvider>
  );
}

export default App;
