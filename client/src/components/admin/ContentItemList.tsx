import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ContentItem } from "@shared/schema";
import { Edit, Trash2, ExternalLink } from "lucide-react";

interface ContentItemListProps {
  items: ContentItem[];
  isLoading: boolean;
  onEdit: (item: ContentItem) => void;
  onDelete: (id: number) => void;
}

const ContentItemList = ({ items, isLoading, onEdit, onDelete }: ContentItemListProps) => {
  if (isLoading) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {[...Array(6)].map((_, i) => (
          <Card key={i} className="animate-pulse">
            <CardHeader>
              <div className="h-4 bg-gray-200 rounded w-3/4"></div>
              <div className="h-3 bg-gray-200 rounded w-1/2"></div>
            </CardHeader>
            <CardContent>
              <div className="h-3 bg-gray-200 rounded w-full mb-2"></div>
              <div className="h-3 bg-gray-200 rounded w-2/3"></div>
            </CardContent>
          </Card>
        ))}
      </div>
    );
  }

  if (items.length === 0) {
    return (
      <div className="text-center py-8">
        <p className="text-gray-500">No content items found.</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {items.map((item) => (
        <Card key={item.id} className="relative">
          <CardHeader className="pb-3">
            <div className="flex items-start justify-between">
              <div className="flex-1">
                <CardTitle className="text-lg line-clamp-2">{item.title}</CardTitle>
                <CardDescription className="flex items-center gap-2 mt-1">
                  <Badge variant="outline" className="capitalize">
                    {item.type}
                  </Badge>
                  <Badge variant={item.isActive ? "default" : "secondary"}>
                    {item.isActive ? "Active" : "Inactive"}
                  </Badge>
                </CardDescription>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-gray-600 line-clamp-3 mb-4">
              {item.content}
            </p>
            
            {item.imageUrl && (
              <div className="mb-4">
                <img 
                  src={item.imageUrl} 
                  alt={item.title}
                  className="w-full h-24 object-cover rounded"
                />
              </div>
            )}

            {item.link && (
              <div className="mb-4">
                <a 
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-800 text-sm flex items-center gap-1"
                >
                  <ExternalLink size={14} />
                  View Link
                </a>
              </div>
            )}

            {item.metrics && (
              <div className="mb-4">
                <p className="text-xs text-gray-500 mb-1">Metrics:</p>
                <div className="bg-gray-100 rounded p-2 text-xs">
                  <pre className="whitespace-pre-wrap">
                    {JSON.stringify(JSON.parse(item.metrics), null, 2)}
                  </pre>
                </div>
              </div>
            )}

            <div className="flex items-center justify-between text-xs text-gray-500 mb-4">
              <span>Order: {item.order}</span>
              <span>ID: {item.id}</span>
            </div>

            <div className="flex space-x-2">
              <Button
                variant="outline"
                size="sm"
                onClick={() => onEdit(item)}
                className="flex-1"
              >
                <Edit size={14} />
                <span className="ml-1">Edit</span>
              </Button>
              <Button
                variant="outline"
                size="sm"
                onClick={() => onDelete(item.id)}
                className="flex-1 text-red-600 hover:text-red-800"
              >
                <Trash2 size={14} />
                <span className="ml-1">Delete</span>
              </Button>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default ContentItemList;