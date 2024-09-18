import { Sidebar } from "flowbite-react";
import { HiUser, HiArrowSmRight } from 'react-icons/hi';
import { useEffect, useState } from "react";
import { useLocation, Link } from "react-router-dom";

export default function DashSidebar() {
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
    <>
    <Sidebar className="w-56 h-screen flex left-0 top-0 bg-gray-800">
      <Sidebar.Items>
        <Sidebar.ItemGroup className="flex flex-col gap-1">
          <Link to='/dashboard?tab=profile'>
            <Sidebar.Item  
              active={tab === 'profile'} 
              icon={HiUser} 
              label={'User'} 
              labelColor='dark'
            >
              Profile
            </Sidebar.Item>
          </Link>
          <Sidebar.Item 
            icon={HiArrowSmRight} 
            className='cursor-pointer'
          >
            Sign Out
          </Sidebar.Item>
        </Sidebar.ItemGroup>
      </Sidebar.Items>
    </Sidebar>
    </>
  );
}
