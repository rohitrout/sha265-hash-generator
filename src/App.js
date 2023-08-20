import "./styles.css";
import { useState } from "react";
import crypto from "crypto";

export default function App() {
  const [text, setText] = useState("");
  const [value, setValue] = useState("");

  const hashFunction = (text) => {
    //creating object of hash
    var hash = crypto.createHash("sha256");
    //Pass the original data to be hashed
    let originalValue = hash.update(`${text}`, "utf-8");
    //Creating the hash value in the specific format
    let hashValue = originalValue.digest("hex");
    //Printing the output on the console
    // console.log("Hash value is : " + hashValue);
    return hashValue;
  };

  return (
    <div className="App">
      <h1>Hash Generator</h1>
      <p style={{ color: "grey" }}>GENERATE A SHA256 HASH</p>
      <p
        style={{ color: "grey" }}
      >{`${"Give me any input, either big or small and I promise you to give a fixed size output!"}`}</p>
      <ul style={{ listStyle: "none", color: "lightsalmon" }}>
        <h4>Wondered !! 🤔 WHY SHA256 ??</h4>
        <li>
          Deterministic : One specific input always maps to the specific output.
        </li>
        <li>
          PseudoRandom : Not possible to guess the output based on the output of
          similar inputs.
        </li>
        <li>One-Way : You cannot determine an input, if given a new output.</li>
        <li>
          Collison-Resitant : 2<sup>256</sup> neglect the possibility of having
          same output.
        </li>
      </ul>

      <h3>Enter Input</h3>
      <div class="container">
        <input value={text} onChange={(e) => setText(e.target.value)} />
        <button
          onClick={() => {
            const data = hashFunction(text);
            console.log(data);
            setValue(data);
          }}
        >
          GENERATE HASH
        </button>
        {value && (
          <div
            className="result"
            style={{
              fontWeight: "bold",
              backgroundColor: "lightgrey",
              padding: "10px"
            }}
          >
            {value}
          </div>
        )}
      </div>
    </div>
  );
}
