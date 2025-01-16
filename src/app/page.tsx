import HomeWrapper from "@/components/Home";
import Logo from "@/components/Shared/Logo";
import React, { Suspense } from "react";

const Home = async () => {
  return (
    <Suspense fallback={<Logo />}>
      <HomeWrapper />
    </Suspense>
  );
};

export default Home;
