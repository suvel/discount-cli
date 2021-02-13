import React, { useState, useEffect } from "react";
import "./styles.css";
export default function App() {
  const [txt, setTxt] = useState("");
  const parseArg = (str) => {
    let args = { p: null, d: null };
    const strArr = str.replace(/\r\n/g, "\n").split("\n");
    const tLen = strArr.length;
    const argsStr = strArr[tLen - 1];
    const argsArr = argsStr.split(" ");
    args = { p: argsArr[0], d: argsArr[1] };
    return args;
  };
  const getDiscountedPrice = (amt, dis) => {
    let price = null;
    price = amt * (1 - dis / 100);
    return price;
  };
  const handelOnKeyPress = (e) => {
    var code = e.keyCode ? e.keyCode : e.which;
    if (code == 13) {
      //Enter keycode
      const args = parseArg(txt);
      const price = Number(args.p);
      const discount = Number(args.d);
      const finalPrc = getDiscountedPrice(price, discount);
      setTxt((t) => t + "\n" + `ans>${finalPrc}`);
    }
  };
  return (
    <div className="App">
      <textarea
        style={{
          width: "80vw",
          minHeight: "80vh"
        }}
        value={txt}
        onKeyPress={handelOnKeyPress}
        onChange={(e) => setTxt(e.target.value)}
        row={10}
        col={10}
      />
    </div>
  );
}
