import React, { useState } from "react";
import Card from "./common/Card";
import { ReactComponent as DoctorSvg } from "../images/img_doctor_90@3x.svg";
import { ReactComponent as PatientSvg } from "../images/img_patient_90@3x.svg";

const InputGroup = () => {
  const [targetCard, setTargetCard] = useState({
    content: ""
  });
  const handleCardChoose = (val) => {
    console.log(val);
    setTargetCard({
      content: val
    });
  };

  return (
    <ul className="d-flex">
      <Card
        className="mb-4 text-center"
        borderStyle={targetCard.content === "Doctor" ? "choosed" : ""}
        onChoose={handleCardChoose}
        avatar={<DoctorSvg className="avatar mb-2" />}
      >
        Doctor
      </Card>
    </ul>
  );
};

export default InputGroup;
