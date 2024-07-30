import { Button } from "reactstrap";
import { LOG_MEASUREMENT, SET_GOALS } from "../../../constants/routes";

const DashboardCoach = () => {

  return (
    <div className="flex flex-row w-full h-full justify-center items-center">
      <Button className="bg-primary text-white mr-10 p-2 rounded" href={SET_GOALS}>Set goals</Button>
      <Button className="bg-danger text-white p2-rounded" href={LOG_MEASUREMENT}>Log measurement</Button>
    </div>
  );
};

export default DashboardCoach;