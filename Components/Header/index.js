import React from 'react';
import {
  FiberSmartRecord,
  Notifications,
  Search,
  Settings,
} from "@mui/icons-material";

const Header = () => {
  return (
    <div className="py-4 md:px-8 flex items-center w-full h-[80px] sm:px-4 bg-gray-800">
        {/* Logo */}
        <img
            src="https://firebasestorage.googleapis.com/v0/b/videoblog-d7f8d.appspot.com/o/images%2Flogo.png?alt=media&token=3471d70f-174e-4f83-b9a7-49b560c0e873"
            alt="logo"
            className="w-[40px] h-[40px] sm:w-[30px] sm:h-[30px] ml-0 lg:ml-[30px] "
            id="logo"
        />
        {/* searh box */}
        <div className="bg-searchBar h-[40px] flex items-center overflow-hidden px-2 ml-20 sm:hidden md:flex"
            id="searchBox"
        >
            <Search className="text-gray-400" />
            <input
            type="text"
            className="w-full h-full bg-transparent rounded-lg text-textColor outline-none border-none placeholder-gray-400 px-2"
            placeholder="Search"
            />
        </div>
        {/* profile container */}
    </div>
  );
};

export default Header;
