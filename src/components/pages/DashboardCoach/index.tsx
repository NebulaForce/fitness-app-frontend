import { Button } from "reactstrap";
import { LOG_MEASUREMENT, SET_GOALS } from "../../../constants/routes";
import BgTemplate from "../../templates/BgTemplate";
import measurement from "../../../assets/log-measurement.png";
import goals from "../../../assets/set-goals.png";
import workout from "../../../assets/workout-2.jpg";

const DashboardCoach = () => {

  return (
    <BgTemplate bgImage={workout}>
      <div className="p-8 rounded-2xl w-[calc(100%-4rem)] md:w-1/3 bg-transparent-white flex flex-col items-center justify-center gap-y-8 min-h-[420px] text-center">
        <img src={goals} className="w-[80px] h-auto" />
        <h1>Set user goals</h1>
        <p className="md:max-w-[80%] text-center">
          Use this feature to connect a coach with a member, helping them work towards their goals. 
        </p>
        <Button
          className="mt-4 bg-primary hover:bg-white text-white hover:text-primary p-4 rounded w-[200px] text-center border-primary hover:border-2 border-solid"
          href={SET_GOALS}
        >
          Goals
        </Button>
      </div>
      <div className="p-8 rounded-2xl w-[calc(100%-4rem)] md:w-1/3 bg-transparent-white flex flex-col items-center justify-center gap-y-8 min-h-[420px] text-center">
        <img src={measurement} className="w-[80px] h-auto" />
        <h1>Log user data</h1>
        <p className="md:max-w-[80%] text-center">
          Hired a new coach? Quickly add their details to our system to get them set up and ready to go.
        </p>
        <Button
          className="mt-4 bg-primary hover:bg-white text-white hover:text-primary p-4 rounded w-[200px] text-center border-primary hover:border-2 border-solid"
          href={LOG_MEASUREMENT}
        >
          Log
        </Button>
      </div>
    </BgTemplate>
  );
};

export default DashboardCoach;