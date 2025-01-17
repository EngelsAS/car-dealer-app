import HomeWrapper from "@/components/Home";
import { fetchVehicleMakes } from "@/services/fetchVehicleMakes";
import React from "react";

const Home = async () => {
  const data = await fetchVehicleMakes();

  return <HomeWrapper data={data} />;
};

export default Home;
