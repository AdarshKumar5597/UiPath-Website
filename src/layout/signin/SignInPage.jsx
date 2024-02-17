import { SignIn } from "../../components/SignIn/SignIn";
import Navbar from "../main/Navbar";

export const SignInPage = () => {
  return (
    <div className="h-screen w-screen">
      <Navbar />
      <SignIn />
    </div>
  );
};
