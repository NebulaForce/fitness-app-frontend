import { Button } from "reactstrap";
import { MEASUREMENT, PROGRESS } from "../../../constants/routes";
import BgTemplate from "../../templates/BgTemplate";
import measurement from "../../../assets/log-measurement.png";
import goals from "../../../assets/set-goals.png";
import workout from "../../../assets/workout.jpg";

const DashboardUser = () => {

  return (
    <BgTemplate bgImage={workout}>
      <div className="p-8 rounded-2xl w-[calc(100%-4rem)] md:w-1/3 bg-transparent-white flex flex-col items-center justify-center gap-y-8 min-h-[420px] text-center">
        <img src={goals} className="w-[80px] h-auto" />
        <h1>See goals</h1>
        <p className="md:max-w-[80%] text-center">
          Compare your initial values, current stats, and progress towards your goal all in one place to see how far you've come.
        </p>
        <Button
          className="mt-4 bg-primary hover:bg-white text-white hover:text-primary p-4 rounded w-[200px] text-center border-primary hover:border-2 border-solid"
          href={PROGRESS}
        >
          Progress
        </Button>
      </div>
      <div className="p-8 rounded-2xl w-[calc(100%-4rem)] md:w-1/3 bg-transparent-white flex flex-col items-center justify-center gap-y-8 min-h-[420px] text-center">
        <img src={measurement} className="w-[80px] h-auto" />
        <h1>Private data</h1>
        <p className="md:max-w-[80%] text-center">
          Just completed a workout? View your latest gym measurements instantly to track your progress and stay motivated.
        </p>
        <Button
          className="mt-4 bg-primary hover:bg-white text-white hover:text-primary p-4 rounded w-[200px] text-center border-primary hover:border-2 border-solid"
          href={MEASUREMENT}
        >
          Measurements
        </Button>
      </div>
    </BgTemplate>
  );
};

export default DashboardUser;