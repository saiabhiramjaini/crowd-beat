import { LandingGreeenButton } from "./LandingGreenButton";

export const LandingNavbar = () => {
  return (
    <div className="bg-mist flex justify-between">
      <div className="font-monoton text-primarygreen text-2xl">Crowd Beat</div>
      <div className="font-spline text-primarygreen mt-1">Home</div>
      <div className="font-spline text-primarygreen mt-1">Features</div>
      <LandingGreeenButton
        text="Sign In"
      />
    </div>
  );
};
