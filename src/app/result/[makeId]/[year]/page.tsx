import { fetchVehicleData } from "@/services/fetchVehicleData";
import { fetchVehicleMakes } from "@/services/fetchVehicleMakes";
import { yearsArray } from "../../../../../utils/yearsArray";
import ResultsWrapper from "@/components/Results";

export async function generateStaticParams() {
  const vehicleMakes = await fetchVehicleMakes();
  const params = vehicleMakes.flatMap((item) =>
    yearsArray.map((year) => ({
      makeId: item.MakeId.toString(),
      year,
    })),
  );

  return params;
}

interface ResultProps {
  params: Promise<{ makeId: string; year: string }>;
}

const Result = async ({ params }: ResultProps) => {
  const { makeId, year } = await params;

  const data = await fetchVehicleData(makeId, year);

  return <ResultsWrapper data={data} year={year} />;
};

export default Result;
