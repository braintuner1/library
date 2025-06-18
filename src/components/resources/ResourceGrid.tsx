
import ResourceCard from "./ResourceCard";

interface Resource {
  id: string;
  title: string;
  type: "pdf" | "video" | "exam" | "doc";
  subject: string;
  level: "o-level" | "a-level";
  description: string;
  thumbnail?: string;
}

interface ResourceGridProps {
  resources: Resource[];
  emptyMessage?: string;
}

const ResourceGrid = ({ resources, emptyMessage = "No resources available." }: ResourceGridProps) => {
  if (!resources.length) {
    return (
      <div className="flex flex-col items-center justify-center py-10">
        <p className="text-muted-foreground">{emptyMessage}</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
      {resources.map((resource) => (
        <ResourceCard key={resource.id} resource={resource} />
      ))}
    </div>
  );
};

export default ResourceGrid;
