"use client";

import { Button } from "@/components/ui/button";
import { useAuth } from "@/lib/supabase/supabase-auth-provider";
import { useRouter } from "next/navigation";
import { Github, Laptop, Mail } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/seperator";
import { useEffect, useState } from "react";

const LoginForm = () => {
  const { signInWithEmail, signUpWithEmail, signInWithGithub, user } = useAuth();
  const { signInWithGoogle } = useAuth();
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [error, setError] = useState<string | null>(null);
  const [isSignUp, setIsSignUp] = useState(false); // Add state to track sign-up mode
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError(null);
    try {
      if (isSignUp) {
        await signUpWithEmail(email, password);
      } else {
        await signInWithEmail(email, password);
      }
    } catch (error) {
      setError("Something went wrong!");
      console.error("Error:", error);
    }
  };

  // Check if there is a user
  useEffect(() => {
    if (user) {
      router.push("/");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user]);

  return (
    <div className="flex items-center w-full h-full px-8">
      <div className="w-full">
        <div>
          <h1 className="text-4xl font-bold text-blue-500">Login</h1>
          <p className="mt-2 text-neutral-600 dark:text-neutral-400">
            Welcome to the{" "}
            <span className="font-semibold text-neutral-800 dark:text-neutral-200">
              GPLC.
            </span>{" "}
            Please Sign-in to continue.
          </p>
        </div>
        {/* <Button
          onClick={signInWithGithub}
          className="flex items-center w-half gap-2 mt-6"
        >
          Login with your Github <Github size="16" />
        </Button> */}
        <Button
          onClick={signInWithGoogle}
          variant="subtle"
          className="flex items-center w-half gap-2 mt-6"
        >
          Login with Google <Laptop size="16" />
        </Button>
        <div className="flex items-center my-8">
          <Separator /> <span className="mx-6">OR</span> <Separator />
        </div>
        <div className="flex items-center my-8">
          <form onSubmit={handleSubmit}>
            <div className="mt-6 space-y-6">
              <div className="space-y-2">
                <Label>Email</Label>
                <Input
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="space-y-2">
                <Label>Password</Label>
                <Input
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
            </div>
            {error && <div className="mt-4 text-red-500">{error}</div>}
            <Button
              variant="subtle"
              type="submit"
              className="flex items-center w-full gap-2 mt-6"
            >
              {isSignUp ? "Sign Up with Email" : "Login with Email"}
              <Mail size="16" />
            </Button>
          </form>
          <p className="mt-4 text-sm text-neutral-600 dark:text-neutral-400">
            {isSignUp
              ? "Already have an account?"
              : "Don't have an account yet?"}{" "}
            <span
              className="text-primary-500 cursor-pointer"
              onClick={() => setIsSignUp(!isSignUp)}
            >
              {isSignUp ? "Login" : "Sign Up"}
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
