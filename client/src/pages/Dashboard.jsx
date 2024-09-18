import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom"
import DashProfile from "../components/DashProfile";
import DashSidebar from "../components/DashSidebar";

export default function Dashboard() {
  const location = useLocation();
  const [tab, setTab] = useState('');

  useEffect(() => {
    const urlParams = new URLSearchParams(location.search);
    const tabFromUrl = urlParams.get('tab');
    if (tabFromUrl) {
      setTab(tabFromUrl);
    }
  }, [location.search]);

  return (
    <div className="flex min-h-screen flex-col md:flex-row">
      {/* Sidebar */}
      <DashSidebar />

     
      <div className="md:w-56"> {/* Adjust the left margin */}
       
        {tab === 'profile' && <DashProfile />}
        
    
        <footer className="mt-8 bg-gray-900 p-4 text-center">
         
        </footer>
      </div>
    </div>
  );
}
