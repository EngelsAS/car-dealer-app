import React from "react";
import VehicleFilter from "./VehicleFilter";
import { fetchVehicleMakes } from "@/services/fetchVehicleMakes";

const HomeWrapper = async () => {
  const data = await fetchVehicleMakes();

  return (
    <div className="h-screen flex flex-col gap-3 items-center justify-center">
      <div className="flex flex-col gap-3">
        <VehicleFilter data={data} />
      </div>
    </div>
  );
};

export default HomeWrapper;
