import InputLabel from "@/components/Shared/InputLabel";
import SelectInput from "@/components/Shared/SelectInput";
import React from "react";
import { yearsArray } from "../../../../utils/yearsArray";
import Button from "@/components/Shared/Button";
import Link from "next/link";
import { VehicleMakesType } from "@/types/VehicleMakesType";
import useVehicleFilterModel from "./model";

interface VehicleFilterViewProps
  extends ReturnType<typeof useVehicleFilterModel> {
  data: VehicleMakesType[];
}

const VehicleFilterView = ({
  data,
  filterValues,
  handleChangeFilterValues,
  handleCheckButtonDisabled,
}: VehicleFilterViewProps) => {
  return (
    <>
      <InputLabel>Vehicle Makes</InputLabel>
      <SelectInput
        defaultValue={""}
        onChange={(event) =>
          handleChangeFilterValues("makeId", event.target.value)
        }
      >
        <option label="Select The Vehicle Make" value="" disabled />

        {data.map((item, index) => (
          <option key={index} label={item.MakeName} value={item.MakeId} />
        ))}
      </SelectInput>

      <InputLabel>Model Year</InputLabel>
      <SelectInput
        defaultValue={""}
        onChange={(event) =>
          handleChangeFilterValues("modelYear", event.target.value)
        }
      >
        <option label="Select The Model Year" value="" disabled />
        {yearsArray.map((year, index) => (
          <option key={index} label={year} value={year} />
        ))}
      </SelectInput>
      <Button disabled={handleCheckButtonDisabled()}>
        <Link href={`/result/${filterValues.makeId}/${filterValues.modelYear}`}>
          Results
        </Link>
      </Button>
    </>
  );
};

export default VehicleFilterView;
