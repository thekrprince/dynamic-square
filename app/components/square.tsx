import { useEffect, useState } from "react";
import { ERROR_MSG, INPUT_LABEL, colorCodes } from "~/constants";
import styles from "./square.css";

const Square: React.FC = () => {
  const [numberOfSquare, setNumberOfSquare] = useState<number>(0);
  const [showError, setShowError] = useState<boolean>(false);
  const [dynamicBoxHW, setDynamicBoxHW] = useState<number>(0);

  // Calculating the size of box and using same foe height and  width
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

  // Function to generate dynamic square
  const dynamicSquareGenerator = () => {
    if (numberOfSquare > 0 && numberOfSquare.toString().length <= 2) {
      let fullSquare = [];
      for (let i = 0; i < numberOfSquare; i++) {
        let sq = [];
        for (let i = 0; i < numberOfSquare; i++) {
          const randomBg = randomColorPicker();
          sq.push(
            <div
              style={{
                boxSizing: "border-box",
                width: dynamicBoxHW,
                height: dynamicBoxHW,
                border: "0.2px solid white",
                backgroundColor: randomBg,
              }}
            ></div>
          );
        }
        fullSquare.push(<div className="square">{sq}</div>);
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

  const squareNumberChangeHandler = (e: any): void => {
    setNumberOfSquare(e.target.value);
  };

  return (
    <section
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <div className="inputFormStyle">
        <label htmlFor="number">{INPUT_LABEL}</label>
        <br />
        <input
          type="number"
          id="number"
          value={numberOfSquare}
          onChange={squareNumberChangeHandler}
          style={{
            marginLeft: "0.5rem",
            width: "2rem",
            textAlign: "center",
            height: "1rem",
            background: "none",
            border: "1px solid #66B2FF",
            borderRadius: "0.5rem",
            color: "#fff",
          }}
        />
      </div>
      {showError && <div className="errorMsg">{ERROR_MSG}</div>}
      <div className="outerBoxDivStyling" id="mainDiv">
        {dynamicSquareGenerator()}
      </div>
    </section>
  );
};

export default Square;

export function links() {
  return [{ rel: "stylesheet", href: styles }];
}
