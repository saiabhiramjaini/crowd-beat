import { LandingNavbar } from "./components/LandingNavbar";
import Image from "next/image";
import landing from "./assets/images/landing.png";
import { LandingGreeenButton } from "./components/LandingGreenButton";
import { Footer } from "./components/Footer";

export default function Home() {
  return (
    <>
      <div className="h-screen flex flex-col justify-between p-8">
        {/* Navbar */}
        <LandingNavbar />

        {/* Main text and Image */}
        <div className="flex justify-between items-end h-full p-10">
          {/* Left text */}
          <div className="font-monoton text-primarygreen text-6xl lg:text-8xl">
            <div>Choose. Listen.</div>
            <div>Enjoy.</div>
            <div>Welcome to</div>
            <div>Crowd Beat.</div>
          </div>

          {/* Right image */}
          <div className="w-1/3">
            <Image
              src={landing}
              alt="Landing image"
              layout="responsive"
              className="object-contain"
            />
          </div>
        </div>
      </div>

      <div className="h-screen">
        <div className="h-1/2 bg-secondarygreen flex justify-center items-center p-8">
          <div className="font-monoton w-1/2 text-5xl">Music On your terms</div>
          <div className="text-white w-1/2">
            You're not just a listener, you're a game-changer. CrowdBeat lets
            you choose the beats that set your world on fire. Get ready to live
            music your way!
          </div>
        </div>
        <div className="h-1/2 bg-black flex flex-col gap-5 justify-center items-center p-8">
          <div className="font-monoton text-white w-1/2 text-5xl text-center">
            Join CrowdBeat
          </div>
          <div className="text-white text-center w-1/2">
            Like a song? Cast your vote, tip the scales, and see your preferred
            track climb up the digital music board. With toolkits fashioned for
            today's digital trends, we are at the exciting nexus of technology
            and creativity!
          </div>
          <LandingGreeenButton text="Get Started" />
        </div>
      </div>

      <div className="">
        <Footer/>
      </div>
    </>
  );
}
