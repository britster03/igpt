import Image from "next/image";
import Link from "next/link";
import LoginForm from "./login-form";

const LoginPage = () => {
  return (
    <div className="grid w-full h-[100vh] grid-cols-1 md:grid-cols-3">
      <LoginForm />
      {/* Gradient */}
      <div className="relative hidden w-full overflow-hidden md:col-span-2 rounded-l-2xl md:block">
        {/* Content */}
        <div className="absolute inset-0 z-20 flex items-center justify-center px-8">
          <div>
          <h1 className="text-4xl font-bold-200 text-blue-500">💬 GPLC</h1>
            <div className="mt-4">
              <div className="text-2xl font-medium text-neutral-900">
              Enhance your legal practice with AI augmented intelligence
              </div>
              <div className="max-w-xl text-sm text-neutral-700">
              Disclaimer: AI is an area of active research with known problems such as biased generation and misinformation. Do not use this application for high-stakes decisions or advice.
              </div>
            </div>
          </div>
        </div>
        <Image
          priority
          sizes="50vw"
          className="z-0"
          alt="gradient"
          fill
          src="/gradient.png"
        />
      </div>
    </div>
  );
};

export default LoginPage;
