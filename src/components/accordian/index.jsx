//single selection
import data from "./data";
import React, { useState } from "react";
import "./styles.css";

function Accordian() {
  const [selected, setSelected] = React.useState(null);
  const [enableMultiSelection, setEnableMultiSelection] = React.useState(false);
  const [multiple, setmultiple] = React.useState([]);

  function handleSingleSelection(getCurrentId) {
    setSelected(getCurrentId === selected ? null : getCurrentId);
  }

  function handleMultiSelection(getCurrentId) {
    let copyMultiple = [...multiple];
    const findIndexOfCurrentId = copyMultiple.indexOf(getCurrentId);
    if (findIndexOfCurrentId === -1) {
      copyMultiple.push(getCurrentId);
    } else {
      copyMultiple.splice(findIndexOfCurrentId, 1);
    }

    setmultiple(copyMultiple);

    console.log(findIndexOfCurrentId, multiple);
  }
  console.log(selected);
  return (
    <div className="Wrapper">
      <button onClick={() => setEnableMultiSelection(!enableMultiSelection)}>
        Enable Multi Selection
      </button>
      <div className="accordian">
        {data && data.length > 0 ? (
          data.map((dataItem) => {
            return (
              <div className="item">
                <div
                  onClick={
                    enableMultiSelection
                      ? () => handleMultiSelection(dataItem.id)
                      : () => handleSingleSelection(dataItem.id)
                  }
                  classname="title"
                >
                  <h3>{dataItem.question}</h3>
                  <span>+</span>
                  <div>
                    {selected === dataItem.id ||
                    multiple.indexOf(dataItem.id) !== -1 ? (
                      <div className="content">{dataItem.answer}</div>
                    ) : null}
                  </div>
                </div>
              </div>
            );
          })
        ) : (
          <div>No data found</div>
        )}
      </div>
    </div>
  );
}

export default Accordian;
