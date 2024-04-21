'use client'
import React, { useState, useRef, useEffect, RefObject } from 'react';
import { AiOutlineMenu, AiOutlineBell, AiOutlineBug, AiOutlineLogout } from 'react-icons/ai';
import Link from 'next/link';
import { loggedInMenuItems } from '@/utils/menuData';
import { usePathname, useRouter } from 'next/navigation';
import { isActiveLink } from '@/utils/isActiveLink';

const useOnClickOutside = (ref: RefObject<HTMLDivElement>, handler: (event: MouseEvent) => void) => {
  useEffect(() => {
    const listener = (event: MouseEvent) => {
      if (!ref.current || ref.current.contains(event.target as Node)) {
        return;
      }
      handler(event);
    };
    document.addEventListener('mousedown', listener);
    return () => {
      document.removeEventListener('mousedown', listener);
    };
  }, [ref, handler]);
};

const Navbar: React.FC = () => {
  const path = usePathname();
  const router = useRouter();
  const [notificationsCount, setNotificationsCount] = useState(5); // replace with actual count
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const dropdownRef = useRef<HTMLDivElement>(null);

  useOnClickOutside(dropdownRef, () => setDropdownOpen(false));

  const handleDropdownToggle = () => {
    setDropdownOpen(!dropdownOpen);
  };
  const notifications = [
    { id: 1, text: 'Notification 1', read: true },
    { id: 2, text: 'Notification 2', read: true },
    { id: 3, text: 'Notification 3', read: false },
    { id: 4, text: 'Notification 4', read: false },
    { id: 5, text: 'Notification 5', read: false },
  ];

  const handleLogout = () => {
    localStorage.clear();
    router.push('/');
  };
  
  return (
    <div>
      <nav className="fixed w-full  p-4 flex justify-between items-center bg-gray-900   border-b-2 border-b-gray-600">
        <div className='flex flex-row gap-2'>
          <AiOutlineBug className="h-6 w-6 text-white" />
          <div className="text-white font-semibold text-lg">Bug Tracker</div>
        </div>
        <div className="flex items-center">
          <button className="text-white hidden lg:block mr-4">Home</button>
          <button className="text-white hidden lg:block mr-4">Login</button>
          <div className="relative">
            <button onClick={handleDropdownToggle}>
              <AiOutlineBell className="h-6 w-6 text-white" />
              <span className="absolute -top-1 -right-1 text-xs bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center">{notificationsCount}</span>
            </button>
            {dropdownOpen && (
              <div ref={dropdownRef} className="absolute right-0 mt-2 w-48 bg-white rounded-md overflow-hidden shadow-xl z-10">
                {notifications.map((notification, index) => (
                  <div key={notification.id} className={`flex justify-between items-center p-2 ${notification.read ? 'bg-gray-200' : 'bg-white'}`}>
                    <span>{notification.text}</span>
                    {!notification.read && <span className="text-xs text-red-500">New</span>}
                    {index !== notifications.length - 1 && <hr />}
                  </div>
                ))}
              </div>
            )}
          </div>
          <div className="lg:hidden">
          <div className="dropdown dropdown-hover dropdown-bottom dropdown-end">
          <button tabIndex={0} type="button" >
        <AiOutlineMenu className="h-6 w-6 text-white ml-2"/>
      </button>
      <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
        {loggedInMenuItems.map((item) => (
          <li key={item.id}>
            <Link href={item.href} className={isActiveLink(path,item.href) ? "text-blue-500" : "text-white"}>
                <item.icon />
                {item.label}
            </Link>
          </li>
        ))}
        <li >
          <span onClick={handleLogout}>
                <AiOutlineLogout />
                Logout
          </span>
          </li>
      </ul>
    </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;