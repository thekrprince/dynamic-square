import { useEffect, useState } from "react";

const Square: React.FC = () => {
  const [numberOfSquare, setNumberOfSquare] = useState<number>(0);
  const [showError, setShowError] = useState<boolean>(false);
  const [dynamicBoxHW, setDynamicBoxHW] = useState<number>();

  useEffect(() => {
    const elem: HTMLElement | null = document.getElementById("mainDiv");
    const calculateBoxesRequired = elem && elem.clientHeight/numberOfSquare;
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
    border: "1px solid grey",
    background: randomColorPicker(),
  };

  // Function to generate dynamic square
  const dynamicSquareGenerator = () => {
    if (numberOfSquare > 0 && numberOfSquare.toString().length <= 2) {
      let sq = [];
      for (let i = 0; i < numberOfSquare; i++) {
        sq.push(<div style={innerBoxDivStyling}></div>);
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
    if (numberOfSquare.toString().length > 2) {
      setShowError(true);
    }
    if (numberOfSquare.toString().length <= 2) {
      setShowError(false);
    }
  }, [numberOfSquare]);

  const squareNumberChangeHandler = (e) => {
    setNumberOfSquare(e.target.value);
  };

  return (
    <section style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <label htmlFor="number">
          Enter a number to generate N x N matrix to see some magic:
        </label>
        <br />
        <input
          type="number"
          id="number"
          value={numberOfSquare}
          onChange={squareNumberChangeHandler}
          style={{ marginLeft: "0.5rem", width: "2rem", textAlign: "center" }}
        />
      </div>
      {showError && (
        <div style={errorMsg}>
          Please enter the value having Two Digits as that only can fit your
          screen
        </div>
      )}
      <div style={outerBoxDivStyling} id="mainDiv">{dynamicSquareGenerator()}</div>
    </section>
  );
};

export default Square;

// Styling
const outerBoxDivStyling = {
  display: "flex",
  justifyContent: "center",
  margin: "1rem",
  border: "1px solid black",
  width: "31rem",
  height: "31rem",
};

const colorCodes: {[key: number]: string} = {
  1: "#ffff00",
  2: "#ff5050",
  3: "#00ccff",
  4: "#00ff99",
  5: "#e600ac",
  6: "#ff9900",
  7: "#404040",
  8: "#00e6e6",
  9: "#3399ff",
};

const errorMsg = {
  background: "#ff4d4d",
  border: "2px solid #cc0000",
  color: "#cc0000",
  padding: "1rem",
};