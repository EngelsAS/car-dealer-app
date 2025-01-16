"use client";

import { VehicleMakesType } from "@/types/VehicleMakesType";
import SelectInput from "../Shared/SelectInput";
import Button from "../Shared/Button";
import InputLabel from "../Shared/InputLabel";
import { useState } from "react";
import Link from "next/link";

interface VehicleFilterProps {
  data: VehicleMakesType[];
}

type FilterValuesType = {
  makeId: string;
  modelYear: string;
};

const VehicleFilter = ({ data }: VehicleFilterProps) => {
  const [filterValues, setFilterValues] = useState({
    makeId: "",
    modelYear: "",
  });

  const startYear = 2015;
  const currentYear = new Date().getFullYear();

  const years = Array.from({ length: currentYear - startYear + 1 }, (_, i) =>
    (startYear + i).toString(),
  );

  const handleChangeFilterValues = <K extends keyof FilterValuesType>(
    key: K,
    value: (typeof filterValues)[K],
  ) => {
    setFilterValues((prev) => ({
      ...prev,
      [key]: value,
    }));
  };

  const handleCheckButtonDisabled = () => {
    const isSomeValueEmpty = Object.values(filterValues).some(
      (value) => value === "",
    );

    return isSomeValueEmpty;
  };

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
          <option key={index} label={item.MakeName} value={item.MakeName} />
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
        {years.map((year, index) => (
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

export default VehicleFilter;
