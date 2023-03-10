import { useEffect } from "react";
import useDrones from "../../hooks/useDrones/useDrones";
import { useAppSelector } from "../../store/hooks";
import { DroneCard } from "../DroneCard/DroneCard";
import DronesListStyled from "./DronesListStyled";

const DronesList = (): JSX.Element => {
  const { getDrones } = useDrones();

  useEffect(() => {
    getDrones();
  }, [getDrones]);

  const drones = useAppSelector((state) => state.drones);

  return (
    <>
      <DronesListStyled className="drones-list">
        {drones.map((drone) => (
          <li key={drone.id}>
            <DroneCard drone={drone} />
          </li>
        ))}
      </DronesListStyled>
    </>
  );
};

export default DronesList;
