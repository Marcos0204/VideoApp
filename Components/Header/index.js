import React from 'react';
import {
  FiberSmartRecord,
  Notifications,
  Search,
  Settings,
} from "@mui/icons-material";
import { IconButton } from "@mui/material";

const Header = () => {
  return (
    <div className="py-4 md:px-8 flex items-center w-full h-[80px] sm:px-4 ">
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
            placeholder="Search..."
            />
        </div>
        <div className='flex item-center justify-evenly h-[40px] lg:w-[25%]   ml-auto'>
          <IconButton className="lg:mx-4">
            <Settings className='text-gray-400 hover:text-textColor'/>
          </IconButton>
          <IconButton className="lg:mx-4">
            <Notifications  className='text-gray-400 hover:text-textColor" '/>
          </IconButton>
          <div className="flex items-center">
            <img
              src="https://firebasestorage.googleapis.com/v0/b/videoblog-d7f8d.appspot.com/o/images%2Fportrait.jpg?alt=media&token=d9acfefa-6920-43a7-8295-7f2b36191ac3"
              alt=""
              className="rounded-full w-[40px] h-[40px] object-cover"
            />
            <p className="text-textColor text-[16px] font-bold ml-2">
              Vetrivel Ravi{" "}
              <span className="block text-[12px] text-gray-500">
                Product Designer
              </span>
            </p>
          </div>
        </div>

    </div>
  );
};

export default Header;
