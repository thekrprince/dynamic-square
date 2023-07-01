import { useEffect, useState } from "react";
import { ERROR_MSG, INPUT_LABEL, colorCodes } from "~/constants";

const Square: React.FC = () => {
  const [numberOfSquare, setNumberOfSquare] = useState<number>(0);
  const [showError, setShowError] = useState<boolean>(false);
  const [dynamicBoxHW, setDynamicBoxHW] = useState<number>();

  useEffect(() => {
    const elem: HTMLElement | null = document.getElementById("mainDiv");
    const calculateBoxesRequired = elem && elem.clientHeight / numberOfSquare;
    setDynamicBoxHW(calculateBoxesRequired as number);
  }, [numberOfSquare]);

  // Styling for inner divs
  const randomColorPicker = () => {
    const colorSelected = Math.floor(Math.random() * 10);
    return colorCodes[colorSelected];
  };

  const innerBoxDivStyling = {
    boxSizing: "border-box",
    width: dynamicBoxHW,
    height: dynamicBoxHW,
    border: "0.2px solid white",
  };

  // Function to generate dynamic square
  const dynamicSquareGenerator = () => {
    if (numberOfSquare > 0 && numberOfSquare.toString().length <= 2) {
      let sq = [];
      for (let i = 0; i < numberOfSquare; i++) {
        const randomBg = randomColorPicker();
        sq.push(
          <div
            style={{ ...innerBoxDivStyling, backgroundColor: randomBg }}
          ></div>
        );
      }
      let fullSquare = [];
      for (let i = 0; i < numberOfSquare; i++) {
        fullSquare.push(<div>{sq}</div>);
      }
      return fullSquare;
    }
  };

  // Side effects to show and hide Error alert
  useEffect(() => {
    if (numberOfSquare > 99) {
      setShowError(true);
    }
    if (numberOfSquare <= 99) {
      setShowError(false);
    }
  }, [numberOfSquare]);

  const squareNumberChangeHandler = (e) => {
    setNumberOfSquare(e.target.value);
  };

  return (
    <section
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <div
        style={inputFormStyle}
      >
        <label htmlFor="number">{INPUT_LABEL}</label>
        <br />
        <input
          type="number"
          id="number"
          value={numberOfSquare}
          onChange={squareNumberChangeHandler}
          style={inputBoxStyling}
        />
      </div>
      {showError && <div style={errorMsg}>{ERROR_MSG}</div>}
      <div style={outerBoxDivStyling} id="mainDiv">
        {dynamicSquareGenerator()}
      </div>
    </section>
  );
};

export default Square;

// Styling
const outerBoxDivStyling = {
  display: "flex",
  justifyContent: "center",
  margin: "0.2rem",
  border: "1px solid white",
  width: "31rem",
  height: "31rem",
};

const errorMsg = {
  background: "rgb(22, 11, 11)",
  borderRadius: "4px",
  color: "rgb(244, 199, 199)",
  fontSize: "10px",
  padding: "0.3rem",
  marginBottom: "0.3rem",
};

// Input Box Styling
const inputFormStyle = {
  backgroundColor: "rgb(7, 19, 24)",
  color: "rgb(184, 231, 251)",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  marginBottom: "0.2rem",
  padding: "0.5rem",
  borderRadius: "0.5rem",
}

const inputBoxStyling = {
  marginLeft: "0.5rem",
  width: "2rem",
  textAlign: "center",
  height: "1rem",
  background: "none",
  border: "1px solid #66B2FF",
  borderRadius: "0.5rem",
  color: "#fff"
}
