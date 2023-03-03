import React from "react";
import ProgressBar from "@ramonak/react-progress-bar";
import styled from "styled-components";
import classes from "./Progress.module.css";
import icon1 from "../../assets/images/new icons/b-icon1.svg";
import icon2 from "../../assets/images/new icons/b-icon2.svg";
import icon3 from "../../assets/images/new icons/b-icon3.svg";
import icon4 from "../../assets/images/new icons/b-icon4.svg";
import icon5 from "../../assets/images/new icons/b-icon5.svg";

const MyBar = () => {
  const listOfEstates = [
    { icon: icon1, color: "#FFABD5", name: "Unilag", residents: 200, id: "1" },
    { icon: icon2, color: "#00FFA3", name: "Harmony", residents: 400, id: "2" },
    { icon: icon3, color: "#F00500", name: "TM30", residents: 300, id: "3" },
    { icon: icon4, color: "#FF993A", name: "Albert", residents: 200, id: "4" },
    { icon: icon5, color: "#F00500", name: "Others", residents: 350, id: "5" },
  ];
  const maxValue = 500;
  //const classes =   [barContainerClassName={classes.container} completedClassName={classes.barCompleted}  labelClassName={classes.label}]

  return (
    <>
      {listOfEstates.map((estate) => {
        return (
          <div className={classes.progress} key={estate.id}>
            <ResName>
              <img src={estate.icon} />
              <p>{estate.name}</p>
            </ResName>
            <ProgressBar
              key={estate.id}
              completed={estate.residents}
              className={classes.wrapper}
              maxCompleted={maxValue}
              customLabel=" "
              height="12px"
              width="90%"
              margin="-12px 0 12px 5px"
              bgColor={estate.color}
              icon={estate.icon}
            />
          </div>
        );
      })}
    </>
  );
};

export default MyBar;

const ResName = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 14x;
  margin-left: 5px;
  img {
    margin-bottom: 15px;
    width: 20px;
  }

  p {
    font-size: 13px;
    // font-weight: 5;
  }
`;
