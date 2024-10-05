"use client";

import { useEffect } from "react";
import { GreenButton } from "../components/GreenButton";
import { TextField } from "../components/Textfield";
import { AiOutlineLike, AiOutlineDislike } from "react-icons/ai";
import axios from "axios";

export default function Home() {
  const REFRESH_INTERVAL = 5000;

  const refreshStreams = async()=>{
    await axios.get(`/api/streams/my`).then((response)=>{
      console.log(response.data);
    })
  }
  
  useEffect(()=>{
    refreshStreams();
    const interval = setInterval(()=>{

    }, REFRESH_INTERVAL);

  })
  return (
    <div className="bg-secondarygreen h-screen w-screen flex justify-center items-center">
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8 bg-black p-6 rounded-lg shadow-md">
          <div className="flex sm:flex-row gap-4 justify-center">
            <h2 className="font-monoton text-2xl mb-4 text-[#A7C957]">
              Add your song to the queue
            </h2>
            <TextField
              type="text"
              placeholder="Paste Youtube URL"
              value={""}
              onChange={(e) => ""}
            />
            <GreenButton text="Add to Queue" onClick={() => {}} />
          </div>
        </div>

        <div className="flex flex-col md:flex-row gap-8">
          <div className="w-full md:w-1/2 bg-black p-6 rounded-lg shadow-md">
            <h3 className="font-monoton text-2xl mb-4 text-[#A7C957]">
              Now Playing
            </h3>
            <div className="aspect-w-16 aspect-h-9 bg-gray-300 rounded-lg">
              <img
                src="/placeholder-image.jpg"
                alt="Now Playing"
                className="object-cover rounded-lg"
              />
            </div>
          </div>

          <div className="w-full md:w-1/2 bg-black p-6 rounded-lg shadow-md">
            <h3 className="font-monoton text-2xl mb-4 text-[#A7C957]">Queue</h3>
            <div className="space-y-4">
              {[1, 2, 3].map((item) => (
                <div
                  key={item}
                  className="flex items-center bg-white p-3 rounded-lg shadow"
                >
                  <div className="w-16 h-16 bg-gray-300 rounded mr-4">
                    <img
                      src="/placeholder-thumbnail.jpg"
                      alt="Thumbnail"
                      className="w-full h-full object-cover rounded"
                    />
                  </div>
                  <div className="flex-grow">
                    <div className="font-medium">Song Title {item}</div>
                    <div className="text-sm text-gray-500">Artist Name</div>
                  </div>
                  <div className="flex space-x-2">
                    <button className="p-2 hover:bg-gray-100 rounded">
                      <AiOutlineLike className="text-gray-600" />
                    </button>
                    <button className="p-2 hover:bg-gray-100 rounded">
                      <AiOutlineDislike className="text-gray-600" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
