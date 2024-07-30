import { Button } from "reactstrap";
import { ASSIGN_COACH, REGISTER_COACH } from "../../../constants/routes";

const DashboardAdmin = () => {

  return (
    <div className="flex flex-row w-full h-full justify-center items-center">
      <Button className="bg-primary text-white mr-10 p-2 rounded" href={ASSIGN_COACH}>Assign Coach</Button>
      <Button className="bg-danger text-white p-2 rounded" href={REGISTER_COACH}>Add Coach</Button>
    </div>
  );
};

export default DashboardAdmin;