"use client";

import { GreenButton } from "../components/GreenButton";
import { TextField } from "../components/Textfield";

export default function Home() {
  return (
    <div className="flex">
      <TextField
        type="text"
        label="Username"
        placeholder="Enter your username"
        value={""}
        onChange={(e) => ""}
      />
      <GreenButton text={"Add to Queue"} onClick={()=>{}}/>
    </div>
  );
}
