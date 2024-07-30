import { Button } from "reactstrap";

const DashboardUser = () => {

  return (
    <div>
      <Button className="bg-primary text-white mr-10">See goals</Button>
      <Button className="bg-danger text-white">See measurement</Button>
    </div>
  );
};

export default DashboardUser;