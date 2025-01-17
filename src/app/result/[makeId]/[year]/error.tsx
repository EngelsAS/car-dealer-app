"use client";

import Button from "@/components/Shared/Button";
import Link from "next/link";

const Error = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-red-500">404</h1>
        <p className="text-xl mt-4 text-gray-700">
          Oops! The page you are looking for does not exist.
        </p>
        <p className="mt-2 text-gray-500">
          Please check the URL or go back to the homepage.
        </p>
        <Button className="mt-4">
          <Link href="/">Go to Homepage</Link>
        </Button>
      </div>
    </div>
  );
};

export default Error;
