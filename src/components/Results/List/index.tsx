import { VehicleDataType } from "@/types/VehicleDataType";
import Card from "../Card";

interface ListProps {
  data: VehicleDataType[];
}

const List = ({ data }: ListProps) => {
  return (
    <div className="flex flex-wrap">
      {data.map((item, index) => (
        <Card key={index} data={item} />
      ))}
    </div>
  );
};

export default List;
