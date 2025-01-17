import { VehicleDataType } from "@/types/VehicleDataType";
import Link from "next/link";
import List from "./List";

interface ResultsWrapperProps {
  data: VehicleDataType[];
  year: string;
}

const ResultsWrapper = ({ data, year }: ResultsWrapperProps) => {
  return (
    <div className="p-5">
      <Link href={"/"} className="underline text-cyan-500">
        <p>Back</p>
      </Link>
      <div className="my-5">
        <h1 className="text-5xl text-orange-500">
          Results for: {data[0]?.Make_Name} - {year}
        </h1>
        <h3 className="text-gray-500">Total Results: {data.length}</h3>
      </div>

      <List data={data} />
    </div>
  );
};

export default ResultsWrapper;
