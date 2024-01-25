"use client"

import { NextPage } from 'next';
import Cluster from './cluster';
const clusterIds = ["1", "2", "3", "4", "5", "6"];
const Page: NextPage = () => {
    return (
    <div className='flex flex-col mt-10'>
      <div className="flex flex-col items-center justify-top text-6xl text-white font-extrabold">User Clusters</div>
      <div className="mx-auto mt-10 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-6 justify-center align-middle">
        {clusterIds.map((id) => (
          <Cluster id={id} text={"Cluster " + id} />
        ))}
      </div>
    </div>
    );
  };
  
export default Page;