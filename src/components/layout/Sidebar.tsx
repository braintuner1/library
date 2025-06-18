
import { NavLink } from "react-router-dom";
import { BookOpen, LibraryBig, Video, FileText, Calendar, User, Settings, Home, Download } from "lucide-react";

interface SidebarProps {
  isOpen: boolean;
}

const Sidebar = ({ isOpen }: SidebarProps) => {
  if (!isOpen) {
    return null;
  }

  return (
    <div className="w-64 bg-sidebar border-r overflow-auto">
      <div className="p-4">
        <div className="space-y-1">
          <div className="px-3 py-2">
            <h2 className="mb-2 text-lg font-semibold">Main Menu</h2>
            <div className="space-y-1">
              <NavLink 
                to="/" 
                className={({ isActive }) => 
                  `nav-link ${isActive ? "nav-link-active" : ""}`
                }
                end
              >
                <Home className="h-5 w-5" />
                <span>Home</span>
              </NavLink>
              <NavLink 
                to="/o-level" 
                className={({ isActive }) => 
                  `nav-link ${isActive ? "nav-link-active" : ""}`
                }
              >
                <BookOpen className="h-5 w-5" />
                <span>O-Level</span>
              </NavLink>
              <NavLink 
                to="/a-level" 
                className={({ isActive }) => 
                  `nav-link ${isActive ? "nav-link-active" : ""}`
                }
              >
                <BookOpen className="h-5 w-5" />
                <span>A-Level</span>
              </NavLink>
              <NavLink 
                to="/library" 
                className={({ isActive }) => 
                  `nav-link ${isActive ? "nav-link-active" : ""}`
                }
              >
                <LibraryBig className="h-5 w-5" />
                <span>Library</span>
              </NavLink>
            </div>
          </div>

          <div className="px-3 py-2">
            <h2 className="mb-2 text-lg font-semibold">Resources</h2>
            <div className="space-y-1">
              <NavLink 
                to="/video-lessons" 
                className={({ isActive }) => 
                  `nav-link ${isActive ? "nav-link-active" : ""}`
                }
              >
                <Video className="h-5 w-5" />
                <span>Video Lessons</span>
              </NavLink>
              <NavLink 
                to="/past-papers" 
                className={({ isActive }) => 
                  `nav-link ${isActive ? "nav-link-active" : ""}`
                }
              >
                <FileText className="h-5 w-5" />
                <span>Past Papers</span>
              </NavLink>
              <NavLink 
                to="/downloads" 
                className={({ isActive }) => 
                  `nav-link ${isActive ? "nav-link-active" : ""}`
                }
              >
                <Download className="h-5 w-5" />
                <span>My Downloads</span>
              </NavLink>
            </div>
          </div>

          <div className="px-3 py-2">
            <h2 className="mb-2 text-lg font-semibold">Account</h2>
            <div className="space-y-1">
              <NavLink 
                to="/profile" 
                className={({ isActive }) => 
                  `nav-link ${isActive ? "nav-link-active" : ""}`
                }
              >
                <User className="h-5 w-5" />
                <span>My Profile</span>
              </NavLink>
              <NavLink 
                to="/settings" 
                className={({ isActive }) => 
                  `nav-link ${isActive ? "nav-link-active" : ""}`
                }
              >
                <Settings className="h-5 w-5" />
                <span>Settings</span>
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
