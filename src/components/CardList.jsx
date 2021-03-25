import React, { useContext } from "react";
import Card from "./common/Card";
import { ReactComponent as DoctorSvg } from "../images/img_doctor_90@3x.svg";
import { ReactComponent as PatientSvg } from "../images/img_patient_90@3x.svg";
import CardContext from "../CardContext";

const CardList = ({ className }) => {
  const { targetCard, chooseTargetCard } = useContext(CardContext);
  const handleCardChoose = (val) => {
    chooseTargetCard({
      content: val
    });
  };

  return (
    <ul className={`${className ? className : ""} row text-center`}>
      <li className="grid-6 grid-lg-3 grid-sm-2">
        <Card
          onChoosed={targetCard.content === "Doctor" ? "choosed" : ""}
          onChoose={handleCardChoose}
          avatar={<DoctorSvg className="avatar mb-lg-4 mb-2 mx-auto" />}
        >
          Doctor
        </Card>
      </li>
      <li className="grid-6 grid-lg-3 grid-sm-2">
        <Card
          onChoosed={targetCard.content === "Patient" ? "choosed" : ""}
          onChoose={handleCardChoose}
          avatar={<PatientSvg className="avatar mb-lg-4 mb-2 mx-auto" />}
        >
          Patient
        </Card>
      </li>
    </ul>
  );
};

export default CardList;
