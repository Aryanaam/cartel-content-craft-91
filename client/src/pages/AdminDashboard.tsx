import { useState, useEffect } from "react";
import { useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { useToast } from "@/hooks/use-toast";
import { apiRequest } from "@/lib/queryClient";
import { ContentItem } from "@shared/schema";
import { Plus, Edit, Trash2, LogOut, Settings } from "lucide-react";
import ContentItemForm from "@/components/admin/ContentItemForm";
import ContentItemList from "@/components/admin/ContentItemList";

const AdminDashboard = () => {
  const [, setLocation] = useLocation();
  const [user, setUser] = useState<any>(null);
  const [showForm, setShowForm] = useState(false);
  const [editingItem, setEditingItem] = useState<ContentItem | null>(null);
  const [activeTab, setActiveTab] = useState("all");
  const { toast } = useToast();
  const queryClient = useQueryClient();

  useEffect(() => {
    const adminUser = localStorage.getItem("admin_user");
    if (!adminUser) {
      setLocation("/admin/login");
      return;
    }
    setUser(JSON.parse(adminUser));
  }, [setLocation]);

  const { data: contentItems = [], isLoading } = useQuery({
    queryKey: ["/api/admin/content"],
    enabled: !!user,
  });

  const deleteMutation = useMutation({
    mutationFn: (id: number) => apiRequest(`/api/admin/content/${id}`, { method: "DELETE" }),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["/api/admin/content"] });
      toast({
        title: "Content deleted",
        description: "The content item has been deleted successfully.",
      });
    },
    onError: () => {
      toast({
        title: "Error",
        description: "Failed to delete the content item.",
        variant: "destructive",
      });
    },
  });

  const handleLogout = () => {
    localStorage.removeItem("admin_user");
    setLocation("/admin/login");
  };

  const handleEdit = (item: ContentItem) => {
    setEditingItem(item);
    setShowForm(true);
  };

  const handleDelete = (id: number) => {
    if (confirm("Are you sure you want to delete this content item?")) {
      deleteMutation.mutate(id);
    }
  };

  const handleFormClose = () => {
    setShowForm(false);
    setEditingItem(null);
  };

  const getContentByType = (type: string) => {
    return contentItems.filter((item: ContentItem) => item.type === type);
  };

  const getStats = () => {
    return {
      total: contentItems.length,
      active: contentItems.filter((item: ContentItem) => item.isActive).length,
      hero: getContentByType("hero").length,
      services: getContentByType("service").length,
      portfolio: getContentByType("portfolio").length,
      testimonials: getContentByType("testimonial").length,
      clients: getContentByType("client").length,
    };
  };

  if (!user) {
    return <div>Loading...</div>;
  }

  const stats = getStats();

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="border-b bg-white">
        <div className="flex h-16 items-center justify-between px-6">
          <div className="flex items-center space-x-4">
            <h1 className="text-2xl font-bold">Content Cartel Admin</h1>
            <Badge variant="outline">Welcome, {user.username}</Badge>
          </div>
          <div className="flex items-center space-x-4">
            <Button
              onClick={() => setLocation("/admin/size-editor")}
              variant="outline"
              className="flex items-center space-x-2"
            >
              <Settings size={16} />
              <span>Size Editor</span>
            </Button>
            <Button
              onClick={() => setShowForm(true)}
              className="flex items-center space-x-2"
            >
              <Plus size={16} />
              <span>Add Content</span>
            </Button>
            <Button variant="outline" onClick={handleLogout}>
              <LogOut size={16} />
              <span className="ml-2">Logout</span>
            </Button>
          </div>
        </div>
      </div>

      <div className="p-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-medium">Total Content</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stats.total}</div>
              <p className="text-xs text-muted-foreground">
                {stats.active} active items
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-medium">Hero Content</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stats.hero}</div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-medium">Services</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stats.services}</div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-medium">Portfolio</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stats.portfolio}</div>
            </CardContent>
          </Card>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Content Management</CardTitle>
            <CardDescription>
              Manage your website content items
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Tabs value={activeTab} onValueChange={setActiveTab}>
              <TabsList className="grid w-full grid-cols-6">
                <TabsTrigger value="all">All</TabsTrigger>
                <TabsTrigger value="hero">Hero</TabsTrigger>
                <TabsTrigger value="service">Services</TabsTrigger>
                <TabsTrigger value="portfolio">Portfolio</TabsTrigger>
                <TabsTrigger value="testimonial">Testimonials</TabsTrigger>
                <TabsTrigger value="client">Clients</TabsTrigger>
              </TabsList>
              
              <TabsContent value="all" className="mt-4">
                <ContentItemList
                  items={contentItems}
                  isLoading={isLoading}
                  onEdit={handleEdit}
                  onDelete={handleDelete}
                />
              </TabsContent>
              
              {["hero", "service", "portfolio", "testimonial", "client"].map(type => (
                <TabsContent key={type} value={type} className="mt-4">
                  <ContentItemList
                    items={getContentByType(type)}
                    isLoading={isLoading}
                    onEdit={handleEdit}
                    onDelete={handleDelete}
                  />
                </TabsContent>
              ))}
            </Tabs>
          </CardContent>
        </Card>
      </div>

      {showForm && (
        <ContentItemForm
          item={editingItem}
          onClose={handleFormClose}
          onSuccess={() => {
            queryClient.invalidateQueries({ queryKey: ["/api/admin/content"] });
            handleFormClose();
          }}
        />
      )}
    </div>
  );
};

export default AdminDashboard;