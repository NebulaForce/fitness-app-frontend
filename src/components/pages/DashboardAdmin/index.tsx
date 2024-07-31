import { Button } from "reactstrap";
import { ASSIGN_COACH, REGISTER_COACH } from "../../../constants/routes";
import BgTemplate from "../../templates/BgTemplate";
import workout from "../../../assets/workout.jpg";
import assignIcon from "../../../assets/assign-icon.png";
import coachIcon from "../../../assets/coach-icon.png";

const DashboardAdmin = () => {

  return (
    <BgTemplate bgImage={workout}>
      <div className="p-8 rounded-2xl w-[calc(100%-4rem)] md:w-1/3 bg-transparent-white flex flex-col items-center justify-center gap-y-8 min-h-[420px] text-center">
        <img src={assignIcon} className="w-[80px] h-auto" />
        <h1>Assign Coach</h1>
        <p className="md:max-w-[80%] text-center">
          Use this feature to connect a coach with a member, helping them work towards their goals. 
        </p>
        <Button
          className="mt-4 bg-primary hover:bg-white text-white hover:text-primary p-4 rounded w-[200px] text-center border-primary hover:border-2 border-solid"
          href={ASSIGN_COACH}
        >
          Assign
        </Button>
      </div>
      <div className="p-8 rounded-2xl w-[calc(100%-4rem)] md:w-1/3 bg-transparent-white flex flex-col items-center justify-center gap-y-8 min-h-[420px] text-center">
        <img src={coachIcon} className="w-[80px] h-auto" />
        <h1>Register Coach</h1>
        <p className="md:max-w-[80%] text-center">
          Hired a new coach? Quickly add their details to our system to get them set up and ready to go.
        </p>
        <Button
          className="mt-4 bg-primary hover:bg-white text-white hover:text-primary p-4 rounded w-[200px] text-center border-primary hover:border-2 border-solid"
          href={REGISTER_COACH}
        >
          Register
        </Button>
      </div>
    </BgTemplate>
  );
};

export default DashboardAdmin;