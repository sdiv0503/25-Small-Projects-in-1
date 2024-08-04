import { useEffect, useState } from "react";

function RandomColor() {
  const [typeOfColor, setTypeOfColor] = useState("hex");
  const [color, setColor] = useState("black");

  function RandomColorUtility(length) {
    return Math.floor(Math.random() * length);
  }

  function handleCreateRandomHexColor() {
    const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
    let hexColor = "#";
    for (let i = 0; i < 6; i++) {
      hexColor += hex[RandomColorUtility(hex.length)];
    }
    setColor(hexColor);
  }

  function handleCreateRandomRgbColor() {
    const r = RandomColorUtility(256);
    const g = RandomColorUtility(256);
    const b = RandomColorUtility(256);
    setColor(`rgb(${r},${g},${b})`);
  }

  useEffect(() => {
    if (typeOfColor === "rgb") handleCreateRandomRgbColor();
    else handleCreateRandomHexColor();
  }, [typeOfColor]);

  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        background: color
      }}
    >
      <button
        onClick={
          typeOfColor === "hex"
            ? handleCreateRandomHexColor
            : handleCreateRandomRgbColor
        }
      >
        Generate Random Color
      </button>
      <button onClick={() => setTypeOfColor("hex")}>Generate Hex Color</button>
      <button onClick={() => setTypeOfColor("rgb")}>Generate RGB Color</button>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          color: "white",
          fontSize: "60px",
          margintop: "50px",
          flexDirection: "column",
          gap: "20px"
        }}
      >
        <h3>{typeOfColor === "rgb" ? "RGB Color" : "Hex Color"}</h3>
        <h1>{color}</h1>
      </div>
    </div>
  );
}

export default RandomColor;
