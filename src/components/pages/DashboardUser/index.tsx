import { Button } from "reactstrap";

const DashboardUser = () => {

  return (
    <div className="flex flex-row w-full h-full justify-center items-center">
      <Button className="bg-primary text-white mr-10 p-2 rounded">See goals</Button>
      <Button className="bg-danger text-white p-2 rounded">See measurement</Button>
    </div>
  );
};

export default DashboardUser;