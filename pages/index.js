import React from 'react';
import Head from 'next/head'

const index = () => {
  return (
    <div className = "flex flex-col bg-mainBg w-screen h-screen overflow-hidden" >
        <Head>
            <title>Videos Blog... Next.js</title>
            <link rel="icon" href="/favicon.ico" />
        </Head>
    </div>
  );
};

export default index;
