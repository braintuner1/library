import { useState } from "react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { BookOpen, Download, Clock, Star } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const Profile = () => {
  // Updated user state with a setter
  const [user, setUser] = useState({
    name: "John Doe",
    email: "dalton@example.com",
    school: "Uganda Secondary School",
    level: "O-Level",
    joinDate: "January 2023",
    avatar: null as string | null,
  });
  
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Form states for editing profile
  const [editedName, setEditedName] = useState(user.name);
  const [editedEmail, setEditedEmail] = useState(user.email);
  const [editedSchool, setEditedSchool] = useState(user.school);
  const [editedLevel, setEditedLevel] = useState(user.level);
  const [editedAvatar, setEditedAvatar] = useState<File | null>(null);

  const downloadHistory = [
    { id: 1, title: "Mathematics Workbook", date: "2023-05-10", type: "book" },
    { id: 2, title: "Biology Past Paper 2022", date: "2023-05-08", type: "exam" },
    { id: 3, title: "Chemistry Video Tutorial", date: "2023-05-05", type: "video" },
  ];

  const openModal = () => {
    // Pre-fill the form with current user data.
    setEditedName(user.name);
    setEditedEmail(user.email);
    setEditedSchool(user.school);
    setEditedLevel(user.level);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleProfileUpdate = (e: React.FormEvent) => {
    e.preventDefault();
    // Update the local user state.
    setUser((prevUser) => ({
      ...prevUser,
      name: editedName,
      email: editedEmail,
      school: editedSchool,
      level: editedLevel,
      avatar: editedAvatar ? URL.createObjectURL(editedAvatar) : prevUser.avatar,
    }));
    closeModal();
  };

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold font-heading">My Profile</h1>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Profile Information */}
        <Card className="lg:col-span-1">
          <CardHeader className="flex flex-row items-center gap-4">
            <Avatar className="h-16 w-16">
              <AvatarImage src={user.avatar || ""} alt={user.name} />
              <AvatarFallback className="text-lg">{user.name.charAt(0)}</AvatarFallback>
            </Avatar>
            <div>
              <CardTitle>{user.name}</CardTitle>
              <CardDescription>{user.email}</CardDescription>
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              <div className="flex justify-between">
                <span className="text-muted-foreground">School:</span>
                <span>{user.school}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Education Level:</span>
                <span>{user.level}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Member Since:</span>
                <span>{user.joinDate}</span>
              </div>
            </div>
          </CardContent>
          <CardFooter>
            <Button onClick={openModal} variant="outline" className="w-full">
              Edit Profile
            </Button>
          </CardFooter>
        </Card>
        
        {/* Activity and Stats */}
        <Card className="lg:col-span-2">
          <CardHeader>
            <CardTitle>My Activity</CardTitle>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue="history">
              <TabsList className="mb-4">
                <TabsTrigger value="history">Recent Activity</TabsTrigger>
                <TabsTrigger value="favorites">Favorites</TabsTrigger>
                <TabsTrigger value="statistics">Statistics</TabsTrigger>
              </TabsList>
              
              <TabsContent value="history">
                <div className="space-y-4">
                  {downloadHistory.map((item) => (
                    <div key={item.id} className="flex items-center justify-between p-3 border rounded-md">
                      <div className="flex items-center gap-3">
                        {item.type === "book" ? <BookOpen className="h-5 w-5" /> : 
                         item.type === "exam" ? <Clock className="h-5 w-5" /> : 
                         <Download className="h-5 w-5" />}
                        <span>{item.title}</span>
                      </div>
                      <div className="text-muted-foreground text-sm">
                        {new Date(item.date).toLocaleDateString()}
                      </div>
                    </div>
                  ))}
                </div>
              </TabsContent>
              
              <TabsContent value="favorites">
                <div className="flex flex-col items-center justify-center h-40 text-muted-foreground">
                  <Star className="h-12 w-12 mb-2 opacity-30" />
                  <p>You haven't saved any favorites yet</p>
                </div>
              </TabsContent>
              
              <TabsContent value="statistics">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="p-4 border rounded-md text-center">
                    <div className="text-3xl font-bold">12</div>
                    <div className="text-muted-foreground">Resources Accessed</div>
                  </div>
                  <div className="p-4 border rounded-md text-center">
                    <div className="text-3xl font-bold">5</div>
                    <div className="text-muted-foreground">Downloads</div>
                  </div>
                  <div className="p-4 border rounded-md text-center">
                    <div className="text-3xl font-bold">3</div>
                    <div className="text-muted-foreground">Subjects Explored</div>
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>
      </div>

      {/* Edit Profile Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-background p-6 rounded shadow-lg max-w-md w-full">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-bold">Edit Profile</h2>
              <Button onClick={closeModal} variant="outline">
                Close
              </Button>
            </div>
            <form onSubmit={handleProfileUpdate} className="space-y-4">
              <div className="grid w-full max-w-sm items-center gap-1.5">
                <Label htmlFor="edit-name">Name</Label>
                <Input 
                  id="edit-name" 
                  value={editedName} 
                  onChange={(e) => setEditedName(e.target.value)} 
                  placeholder="Your name" 
                />
              </div>
              <div className="grid w-full max-w-sm items-center gap-1.5">
                <Label htmlFor="edit-email">Email</Label>
                <Input 
                  id="edit-email"
                  type="email"
                  value={editedEmail} 
                  onChange={(e) => setEditedEmail(e.target.value)}
                  placeholder="Your email" 
                />
              </div>
              <div className="grid w-full max-w-sm items-center gap-1.5">
                <Label htmlFor="edit-school">School</Label>
                <Input 
                  id="edit-school" 
                  value={editedSchool} 
                  onChange={(e) => setEditedSchool(e.target.value)} 
                  placeholder="Your school" 
                />
              </div>
              <div className="grid w-full max-w-sm items-center gap-1.5">
                <Label htmlFor="edit-level">Education Level</Label>
                <Input 
                  id="edit-level" 
                  value={editedLevel} 
                  onChange={(e) => setEditedLevel(e.target.value)} 
                  placeholder="Your education level" 
                />
              </div>
              <div className="grid w-full max-w-sm items-center gap-1.5">
                <Label htmlFor="edit-avatar">Profile Picture</Label>
                <Input 
                  id="edit-avatar"
                  type="file"
                  onChange={(e) => setEditedAvatar(e.target.files ? e.target.files[0] : null)}
                />
              </div>
              <Button type="submit" className="w-full">
                Save Changes
              </Button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Profile;
