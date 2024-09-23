import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import DashProfile from "../components/DashProfile";
import DashSidebar from "../components/DashSidebar";
import DashPosts from "../components/DashPosts";
import Redirect from "../components/Redirect";


export default function Dashboard() {
  
  


  const location = useLocation();
  const [tab, setTab] = useState("");
 

  useEffect(() => {
    const urlParams = new URLSearchParams(location.search);
    const tabFromUrl = urlParams.get("tab");
    if (tabFromUrl) {
      setTab(tabFromUrl);
    }
  }, [location.search]);

  
 


  return (
    <>
    <Redirect/>
    <div className="min-h-screen flex">
      {/* Sidebar */}
      <div className="w-56">
        <DashSidebar />
      </div>
      {/* Main Content */}
      <div className="flex-1 flex items-center justify-center p-4">
        {/* Profile Content */}
        {tab === "profile" && <DashProfile />}
        {/* posts... */}
        {tab === 'posts' && <DashPosts/>}
      </div>
    </div>
    </>
  );
}

