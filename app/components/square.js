import { useEffect, useState } from "react";

const Square = () => {
  const [numberOfSquare, setNumberOfSquare] = useState(0);
  const [showError, setShowError] = useState(false);

  // Function to generate dynamic square
  const dynamicSquareGenerator = () => {
    if (numberOfSquare > 0) {
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
    setShowError(false);
  }, [numberOfSquare]);

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
      </div>
      {numberOfSquare > 0 && (
        <div style={outerBoxDivStyling}>{dynamicSquareGenerator()}</div>
      )}
    </section>
  );
};

export default Square;

// Styling
const outerBoxDivStyling = { display: "flex", width: "90%", height: "90%" };

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
