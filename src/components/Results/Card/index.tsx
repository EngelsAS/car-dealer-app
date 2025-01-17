import { VehicleDataType } from "@/types/VehicleDataType";

interface CardProps {
  data: VehicleDataType;
}

const Card = ({ data }: CardProps) => {
  return (
    <div className="basis-1/2 p-3 overflow-hidden md:basis-1/3  lg:basis-1/4">
      <div className="bg-white rounded-md p-4">
        <h1 title={data.Model_Name} className="truncate">
          {data.Model_Name}
        </h1>
      </div>
    </div>
  );
};

export default Card;
