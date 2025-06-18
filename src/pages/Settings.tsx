import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { Sun, Moon, Bell, Globe, Lock, User } from "lucide-react";
import { Input } from "@/components/ui/input";
import { useTheme } from "@/contexts/ThemeContext";

const Settings = () => {
  const { theme, setTheme } = useTheme();
  const [isModalOpen, setIsModalOpen] = useState(false);

  // State for profile editing
  const [profileName, setProfileName] = useState("");
  const [profileEmail, setProfileEmail] = useState("");
  const [profilePic, setProfilePic] = useState<File | null>(null);

  const handleThemeToggle = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  const handleModalOpen = () => {
    setIsModalOpen(true);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
  };

  const handleProfileSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Add your profile update logic here (e.g. API call)
    console.log("Profile updated:", { profileName, profileEmail, profilePic });
    // Close modal after submission
    handleModalClose();
  };

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold font-heading">Settings</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Appearance Settings */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              {theme === "dark" ? <Moon className="h-5 w-5" /> : <Sun className="h-5 w-5" />}
              Appearance
            </CardTitle>
            <CardDescription>Customize how the application looks</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label htmlFor="theme-toggle">Dark Theme</Label>
                <p className="text-sm text-muted-foreground">
                  Switch between light and dark mode
                </p>
              </div>
              <Switch 
                id="theme-toggle" 
                checked={theme === "dark"}
                onCheckedChange={handleThemeToggle}
              />
            </div>
          </CardContent>
        </Card>
        
        {/* Notification Settings */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Bell className="h-5 w-5" />
              Notifications
            </CardTitle>
            <CardDescription>Configure your notification preferences</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label htmlFor="new-content">New Content Alerts</Label>
                <p className="text-sm text-muted-foreground">
                  Get notified when new resources are added
                </p>
              </div>
              <Switch id="new-content" defaultChecked={true} />
            </div>
            
            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label htmlFor="content-updates">Content Updates</Label>
                <p className="text-sm text-muted-foreground">
                  Get notified when content you've accessed is updated
                </p>
              </div>
              <Switch id="content-updates" defaultChecked={true} />
            </div>
          </CardContent>
        </Card>
        
        {/* Language Settings */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Globe className="h-5 w-5" />
              Language & Region
            </CardTitle>
            <CardDescription>Configure language and regional settings</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="grid w-full max-w-sm items-center gap-1.5">
                <Label htmlFor="language">Display Language</Label>
                <select 
                  id="language"
                  className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                >
                  <option value="en">English</option>
                  <option value="lg">Luganda</option>
                  <option value="sw">Swahili</option>
                </select>
              </div>
            </div>
          </CardContent>
        </Card>
        
        {/* Privacy Settings */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Lock className="h-5 w-5" />
              Privacy & Security
            </CardTitle>
            <CardDescription>Manage your privacy preferences</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label htmlFor="save-history">Save Browsing History</Label>
                <p className="text-sm text-muted-foreground">
                  Track which resources you've viewed
                </p>
              </div>
              <Switch id="save-history" defaultChecked={true} />
            </div>
            
            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label htmlFor="data-usage">Data Usage</Label>
                <p className="text-sm text-muted-foreground">
                  Share anonymous usage data to help us improve
                </p>
              </div>
              <Switch id="data-usage" defaultChecked={false} />
            </div>
            
            <Button variant="outline" className="w-full mt-4">
              Clear Browsing Data
            </Button>
          </CardContent>
        </Card>
        
        {/* Profile Editing - modal trigger */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <User className="h-5 w-5" />
              Profile Editing
            </CardTitle>
            <CardDescription>Edit your profile information</CardDescription>
          </CardHeader>
          <CardContent>
            <Button onClick={handleModalOpen} className="w-full">
              Edit Profile
            </Button>
          </CardContent>
        </Card>
      </div>

      {/* Profile Editing Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-background p-6 rounded shadow-lg max-w-md w-full">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-bold">Edit Profile</h2>
              <Button onClick={handleModalClose} variant="outline">
                Close
              </Button>
            </div>
            <form onSubmit={handleProfileSubmit} className="space-y-4">
              <div className="grid w-full max-w-sm items-center gap-1.5">
                <Label htmlFor="profile-name">Name</Label>
                <Input 
                  id="profile-name" 
                  value={profileName} 
                  onChange={(e) => setProfileName(e.target.value)} 
                  placeholder="Your name" 
                />
              </div>
              <div className="grid w-full max-w-sm items-center gap-1.5">
                <Label htmlFor="profile-email">Email</Label>
                <Input 
                  id="profile-email"
                  type="email"
                  value={profileEmail} 
                  onChange={(e) => setProfileEmail(e.target.value)}
                  placeholder="Your email" 
                />
              </div>
              <div className="grid w-full max-w-sm items-center gap-1.5">
                <Label htmlFor="profile-pic">Profile Picture</Label>
                <Input 
                  id="profile-pic"
                  type="file"
                  onChange={(e) => setProfilePic(e.target.files ? e.target.files[0] : null)}
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

export default Settings;
