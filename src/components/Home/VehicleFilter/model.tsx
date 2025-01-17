import { useState } from "react";

type FilterValuesType = {
  makeId: string;
  modelYear: string;
};

const useVehicleFilterModel = () => {
  const [filterValues, setFilterValues] = useState({
    makeId: "",
    modelYear: "",
  });

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

  return {
    filterValues,
    handleChangeFilterValues,
    handleCheckButtonDisabled,
  };
};

export default useVehicleFilterModel;
