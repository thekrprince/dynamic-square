import { useEffect, useState } from "react";

const Square = () => {
    const [numberOfSquare, setNumberOfSquare] = useState(0);
    const [showError, setShowError] = useState(false);

    const innerDivStyling = { 
        width: "30px", 
        height: "30px",
        border: "1px solid grey"
    }

    // Function to generate dynamic square
    const dynamicSquareGenerator = () => {
        let sq = [];
        for(let i=0; i<numberOfSquare; i++) {
            sq.push(<div style={innerDivStyling}></div>)
        }
        
        let fullSquare = [];
        for(let i=0; i<numberOfSquare; i++) {
            fullSquare.push(<div>{sq}</div>)
        }

        return fullSquare;
    }

    useEffect(() => {
        if(numberOfSquare.toString().length > 2) {
            setShowError(true);
        }
        setShowError(false);
    }, [numberOfSquare]);

    const squareNumberChangeHandler = (e) => {
        setNumberOfSquare(e.target.value);
    }

    return (
        <section>
            <div>
                <label htmlFor="number">Enter a number to generate N x N matrix to see some magic</label><br />
                <input type="number" id="number" value={numberOfSquare} onChange={squareNumberChangeHandler} />
            </div>
            {numberOfSquare > 0 && <div style={{ display: "flex", width: "90%", height: "90%" }}>{dynamicSquareGenerator()}</div>}
        </section>
    )
};

export default Square;