import * as React from 'react'

//styles
const numberCols = 4;
//const colFrs = "1fr "
//const gCols = "1fr ".repeat(numberCols).trim();
//const gridCol = repeat(4," 1fr");
//console.log(gridCols)
//"1fr 1fr 1fr 1fr"
const gridCols = (numCols) => (
    "1fr ".repeat(numCols).trim()
)
//console.log("gridCols is:",gridCols(4));

const gridContainer = {
    display: "grid",
    //gridTemplateColumns: gridCols(4),
    gridTemplateRows: "none",
    gridGap: "32px 28px",
}

{/*
const Grid = function(props) {
    return (
        <div style={gridContainer}>
            {props.children}
        </div>
    )
}
*/}
const Grid = function(props) {
    return (
        <div style={{ ...gridContainer, gridTemplateColumns: "1fr ".repeat(props.columns).trim() }}>
            {props.children}
        </div>
    )
}

export default Grid