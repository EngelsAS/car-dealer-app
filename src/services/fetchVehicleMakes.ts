import { VehicleMakesType } from "@/types/VehicleMakesType";
import { api } from "../../utils/axiosInstance";

export const fetchVehicleMakes = async () => {
  try {
    const resp = await api.get(
      "/vehicles/GetMakesForVehicleType/car?format=json",
    );

    const data = resp.data.Results as VehicleMakesType[];

    const vehicleMakes = data.map((item) => {
      const { MakeId, MakeName } = item;

      return {
        MakeId,
        MakeName,
      };
    });

    return vehicleMakes;
  } catch (error) {
    console.log(error);
    return [];
  }
};
