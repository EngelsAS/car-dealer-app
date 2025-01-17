import React from "react";
import { VehicleMakesType } from "@/types/VehicleMakesType";
import VehicleFilter from "./VehicleFilter";

interface HomeWrapperProps {
  data: VehicleMakesType[];
}

const HomeWrapper = ({ data }: HomeWrapperProps) => {
  return (
    <div className="h-screen flex flex-col gap-3 items-center justify-center">
      <div className="flex flex-col gap-3">
        <VehicleFilter data={data} />
      </div>
    </div>
  );
};

export default HomeWrapper;
