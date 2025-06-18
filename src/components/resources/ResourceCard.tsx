import { Link } from "react-router-dom";
import { Book, Download, BookOpen, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export interface ResourceProps {
  id: string;
  title: string;
  type: "book" | "video" | "document" | "exam";
  subject: string;
  level: "o-level" | "a-level";
  thumbnail?: string;
  description?: string;
  downloadable?: boolean;
  downloadURL: string;
}

interface ResourceCardProps {
  resource: {
    id: string;
    title: string;
    type: "book" | "video" | "exam" | "document";
    downloadURL: string;
    description: string;
  };
}

const ResourceCard = ({ resource }: ResourceCardProps) => {
  const getResourceIcon = () => {
    switch (resource.type) {
      case "book":
        return <Book className="h-12 w-12 text-uganda-yellow" />;
      case "video":
        return <video className="h-12 w-12 text-uganda-red" />;
      case "document":
      case "exam":
      default:
        return <FileText className="h-12 w-12 text-uganda-black" />;
    }
  };

  const levelLabel = resource.level === "o-level" ? "O-Level" : "A-Level";

  // For videos, we use "Play" and for others, "Download"
  const actionLabel = resource.type === "video" ? "Play" : "Download";

  // When clicked, for download open the file in a new tab; for video, perhaps navigate to a player.
  const handleAction = () => {
    if (resource.type === "video") {
      window.open(resource.downloadURL, "_blank");
    } else {
      // Create an anchor element to download
      const link = document.createElement("a");
      link.href = resource.downloadURL;
      link.download = resource.title;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  };

  return (
    <Card className="resource-card h-full">
      <div className="resource-image flex items-center justify-center bg-muted/50">
        {resource.thumbnail ? (
          <img src={resource.thumbnail} alt={resource.title} className="w-full h-full object-cover" />
        ) : (
          <div className="flex items-center justify-center h-full w-full">
            {getResourceIcon()}
          </div>
        )}
      </div>
      <CardHeader className="p-4 pb-0">
        <div className="flex justify-between items-start">
          <CardTitle className="text-base font-medium line-clamp-2">{resource.title}</CardTitle>
        </div>
        <div className="flex gap-2 mt-2">
          <Badge variant="outline" className="text-xs capitalize">{levelLabel}</Badge>
          <Badge variant="secondary" className="text-xs capitalize">{resource.subject}</Badge>
        </div>
      </CardHeader>
      <CardContent className="p-4 pt-2">
        {resource.description && <p className="text-sm text-muted-foreground line-clamp-2">{resource.description}</p>}
      </CardContent>
      <CardFooter className="p-4 pt-0 flex justify-between">
        <Link to={`/resource/${resource.id}`}>
          <Button variant="outline" size="sm">
            <BookOpen className="h-4 w-4 mr-2" />
            Open
          </Button>
        </Link>
        {resource.downloadable && (
          <Button variant="ghost" size="sm" onClick={handleAction}>
            <Download className="h-4 w-4" />
            {actionLabel}
          </Button>
        )}
      </CardFooter>
    </Card>
  );
};

export default ResourceCard;
