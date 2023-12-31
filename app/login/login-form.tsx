"use client";

import { Button } from "@/components/ui/button";
import { useAuth } from "@/lib/supabase/supabase-auth-provider";
import { useRouter } from "next/navigation";
import { Github, Laptop } from "lucide-react";
import { useEffect } from "react";

const LoginForm = () => {
  const { signInWithGithub, user } = useAuth();
  const { signInWithGoogle} = useAuth();
  const router = useRouter();

  // Check if there is a user
  useEffect(() => {
    if (user) {
      router.push("/");
    }
  }, [user]);

  return (
    <div className="flex items-center w-full h-full px-8">
      {/* Main Container */}
      <div className="w-full ">
        {/* Text */}
        <div>
          <h1 className="text-4xl font-bold">Login</h1>
          <p className="mt-2 text-neutral-600 dark:text-neutral-400">
            Welcome to the{" "}
            <span className="font-semibold text-neutral-800 dark:text-neutral-200">
              iGPT
            </span>{" "}
            Please login with your Google account.
          </p>
        </div>
        {/* Github Button */}
        <Button
          onClick={signInWithGithub}
          className="flex items-center w-full gap-2 mt-6"
        >
          Login with your Github <Github size="16"/>
        </Button>
        {/* Google Button */}
        <Button
          onClick={signInWithGoogle}
          className="flex items-center w-full gap-2 mt-6"
        >
          Login with Google <Laptop size="16"/>
        </Button>
      </div>
    </div>
  );
};

export default LoginForm;
