"use client";

import { VehicleMakesType } from "@/types/VehicleMakesType";
import useVehicleFilterModel from "./model";
import VehicleFilterView from "./view";

interface VehicleFilterProps {
  data: VehicleMakesType[];
}

const VehicleFilter = ({ data }: VehicleFilterProps) => {
  const vehicleFilterModel = useVehicleFilterModel();

  return <VehicleFilterView {...vehicleFilterModel} data={data} />;
};

export default VehicleFilter;
