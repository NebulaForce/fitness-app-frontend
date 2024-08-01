import BgTemplate from "../../templates/BgTemplate";
import workout from "../../../assets/workout-2.jpg";
import fatBurnIcon from '../../../assets/fat-burn-icon.png';
import muscleIcon from '../../../assets/muscle-icon.png';
import { Form, FormGroup, Input, Label, Progress as ProgressComponent } from "reactstrap";
import { useContract } from "../../../hooks/useContract";

const Progress = () => {

  const { getLatestMeasurement, getGoalData } = useContract();

  const measurementData = getLatestMeasurement();
  const goalData = getGoalData();

  return (
    <BgTemplate bgImage={workout}>
      <div className="p-8 rounded-2xl w-[calc(100%-4rem)] md:w-1/3 bg-transparent-white flex flex-col items-center justify-center gap-y-8 min-h-[420px] text-center">
        <img src={fatBurnIcon} className="w-[80px] h-auto" />
        <h1>Fat burn</h1>
        <Form className='flex flex-col gap-y-5 w-full text-left'>
          <FormGroup className='flex flex-col gap-y-2'>
            <Label for="initialFat">Initial value (%)</Label>
            <Input
              type="number"
              id="initialFat"
              value={goalData?.[0]}
              disabled
              className='rounded p-2 border border-primary'
            />
          </FormGroup>
          <FormGroup className='flex flex-col gap-y-2'>
            <Label for="currentFat">Current value (%)</Label>
            <Input
              type="number"
              id="currentFat"
              value={measurementData?.bodyFat}
              disabled
              className='rounded p-2 border border-primary'
            />
          </FormGroup>
          <FormGroup className='flex flex-col gap-y-2'>
            <Label for="targetFat">Target value (%)</Label>
            <Input
              type="number"
              id="targetFat"
              value={goalData?.[1]}
              disabled
              className='rounded p-2 border border-primary'
            />
          </FormGroup>
        </Form>
        {goalData && measurementData && (goalData?.[0] !== measurementData?.bodyFat) && (
          <ProgressComponent
            className="my-2 w-full rounded border border-primary text-white bg-[#f9f9f9] text-xs"
            striped
            color="primary"
            value={measurementData?.bodyFat - goalData?.[0]}
            max={goalData?.[1] - goalData?.[0]}
          >
            {
              measurementData?.bodyFat === goalData?.[1] ? 'Goal achieved!' : 'Keep going!'
            }
          </ProgressComponent>
        )}
      </div>
      <div className="p-8 rounded-2xl w-[calc(100%-4rem)] md:w-1/3 bg-transparent-white flex flex-col items-center justify-center gap-y-8 min-h-[420px] text-center">
        <img src={muscleIcon} className="w-[80px] h-auto" />
        <h1>Muscle mass</h1>
        <Form className='flex flex-col gap-y-5 w-full text-left'>
          <FormGroup className='flex flex-col gap-y-2'>
            <Label for="initialMass">Initial value (kg)</Label>
            <Input
              type="number"
              id="initialMass"
              value={goalData?.[2]}
              disabled
              className='rounded p-2 border border-primary'
            />
          </FormGroup>
          <FormGroup className='flex flex-col gap-y-2'>
            <Label for="currentMass">Current value (kg)</Label>
            <Input
              type="number"
              id="currentMass"
              value={measurementData?.muscleMass}
              disabled
              className='rounded p-2 border border-primary'
            />
          </FormGroup>
          <FormGroup className='flex flex-col gap-y-2'>
            <Label for="targetMass">Target value (%)</Label>
            <Input
              type="number"
              id="targetMass"
              value={goalData?.[3]}
              disabled
              className='rounded p-2 border border-primary'
            />
          </FormGroup>
        </Form>
        {goalData && measurementData && (goalData?.[0] !== measurementData?.bodyFat) &&  (
          <ProgressComponent
            className="my-2 w-full rounded border border-primary text-white bg-[#f9f9f9] text-xs"
            striped
            color="primary"
            value={measurementData?.muscleMass - goalData?.[2]}
            max={goalData?.[3] - goalData?.[2]}
          >
            {
              measurementData?.muscleMass === goalData?.[3] ? 'Goal achieved!' : 'Keep going!'
            }
          </ProgressComponent>
        )}
      </div>
    </BgTemplate>
  );
};

export default Progress;