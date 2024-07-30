import { Button } from "reactstrap";
import { LOG_MEASUREMENT, SET_GOALS } from "../../../constants/routes";

const DashboardCoach = () => {

  return (
    <div>
      <Button className="bg-primary text-white mr-10" href={SET_GOALS}>Set goals</Button>
      <Button className="bg-danger text-white" href={LOG_MEASUREMENT}>Log measurement</Button>
    </div>
  );
};

export default DashboardCoach;