import { Button } from "reactstrap";

const DashboardAdmin = () => {

  return (
    <div className="flex flex-row w-full h-full justify-center items-center">
      <Button className="bg-primary text-white mr-10">Assign Coach</Button>
      <Button className="bg-danger text-white">Add Coach</Button>
    </div>
  );
};

export default DashboardAdmin;