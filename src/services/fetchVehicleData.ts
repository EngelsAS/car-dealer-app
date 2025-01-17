import { VehicleDataType } from "@/types/VehicleDataType";
import { api } from "../../utils/axiosInstance";

export const fetchVehicleData = async (makeId: string, year: string) => {
  try {
    const resp = await api.get(
      `/vehicles/GetModelsForMakeIdYear/makeId/${makeId}/modelyear/${year}?format=json`,
    );

    console.log(resp.data);

    const data = resp.data.Results as VehicleDataType[];

    return data;
  } catch (error) {
    console.log(error);
    throw new Error();
  }
};
