import React from "react";
import VehicleFilter from "./VehicleFilter";
import { VehicleMakesType } from "@/types/VehicleMakesType";

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
