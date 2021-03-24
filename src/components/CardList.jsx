import React, { useContext } from "react";
import Card from "./common/Card";
import { ReactComponent as DoctorSvg } from "../images/img_doctor_90@3x.svg";
import { ReactComponent as PatientSvg } from "../images/img_patient_90@3x.svg";
import CardContext from "../CardContext";

const InputGroup = () => {
  const { targetCard, chooseTargetCard } = useContext(CardContext);
  const handleCardChoose = (val) => {
    chooseTargetCard({
      content: val
    });
  };

  return (
    <ul className="row justify-content-between mb-4 text-center">
      <Card
        className="w-48"
        onChoosed={targetCard.content === "Doctor" ? "choosed" : ""}
        onChoose={handleCardChoose}
        avatar={<DoctorSvg className="avatar mb-2" />}
      >
        Doctor
      </Card>
      <Card
        className="w-48"
        onChoosed={targetCard.content === "Patient" ? "choosed" : ""}
        onChoose={handleCardChoose}
        avatar={<PatientSvg className="avatar mb-2" />}
      >
        Patient
      </Card>
    </ul>
  );
};

export default InputGroup;
