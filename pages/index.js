import React from 'react';
import {
  Chat,
  Dashboard,
  Favorite,
  LocalMovies,
  Logout,
  Stream,
  TrendingUp,
  VideogameAsset,
} from "@mui/icons-material"
import Head from 'next/head'
import Header from '../Components/Header';
import MenuItem from '../Components/MenuItem'


const index = () => {
  return (
    <div className = "flex flex-col bg-mainBg w-screen h-screen overflow-hidden" >
        <Head>
            <title>Videos Blog... Next.js</title>
            <link rel="icon" href="/favicon.ico" />
        </Head>
        <Header/>
        <div className=' w-full h-[calc(100%-80px)]'>
          {/* left menu */}
          <div
            id="leftMenu"
            className="sm:w-[6%] md:w-[10%] min-w-[60px] h-full flex flex-col items-center justify-evenly">
            <MenuItem icon={<Dashboard />} name={"Dashboard"} />
            <MenuItem icon={<VideogameAsset />} name={"Games"} />
            <MenuItem icon={<LocalMovies />} name={"Movies"} />
            <MenuItem icon={<Stream />} name={"Streamer"} />
            <MenuItem icon={<TrendingUp />} name={"Statistics"} />
            <MenuItem icon={<Chat />} name={"Messages"} />
            <MenuItem icon={<Favorite />} name={"Favourite"} />
            <MenuItem icon={<Logout />} name={"Logout"} last={true} />
          </div>
          {/* ---------- */}
          {/* Main menu */}
          <div>

          </div>
          {/* ---------- */}
        </div>
    </div>
  );
};

export default index;
