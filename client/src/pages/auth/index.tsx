import {
  SignedIn,
  SignedOut,
  SignInButton,
  SignUpButton,
  UserButton,
} from "@clerk/clerk-react";

import { Navigate } from "react-router-dom";

//modal's mean it is a pop up on the same page rather than sredirection. More user friendly

export const Auth = () => {
  return (
    <div className="sign-in-container">
      <SignedOut>
        <h1> Welcome to Your Own Personal Finance Tracker!</h1>

        <SignUpButton mode="modal" />
        <SignInButton mode="modal" />
      </SignedOut>

      <SignedIn>
        <Navigate to="/" />
      </SignedIn>
    </div>
  );
};
