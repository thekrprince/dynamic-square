import { useEffect, useState } from "react";

const Square = () => {
  const [numberOfSquare, setNumberOfSquare] = useState(0);
  const [showError, setShowError] = useState(false);

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

  useEffect(() => {
    if (numberOfSquare.toString().length > 2) {
      setShowError(true);
    }
    if (numberOfSquare.toString().length <= 2) {
      setShowError(false);
    }
  }, [numberOfSquare]);

  console.log(numberOfSquare.toString().length > 2);

  const squareNumberChangeHandler = (e) => {
    setNumberOfSquare(e.target.value);
  };

  return (
    <section>
      <div>
        <label htmlFor="number">
          Enter a number to generate N x N matrix to see some magic
        </label>
        <br />
        <input
          type="number"
          id="number"
          value={numberOfSquare}
          onChange={squareNumberChangeHandler}
        />
        {showError && (
          <div style={errorMsg}>
            Please enter the value having Two Digits as that only can fit your
            screen
          </div>
        )}
      </div>
      {numberOfSquare > 0 && (
        <div style={outerBoxDivStyling}>{dynamicSquareGenerator()}</div>
      )}
    </section>
  );
};

export default Square;

// Styling
const outerBoxDivStyling = {
  display: "flex",
  justifyContent: "center",
  padding: "1rem"
};

const colorCodes = {
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

const randomColorPicker = () => {
  const colorSelected = Math.floor(Math.random() * 10);
  return colorCodes[colorSelected];
};

const innerBoxDivStyling = {
  width: "30px",
  height: "30px",
  border: "1px solid grey",
  background: randomColorPicker(),
};

const errorMsg = {
  background: "#ff4d4d",
  border: "2px solid #cc0000",
  color: "#cc0000",
  padding: "1rem",
};
