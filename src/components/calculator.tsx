import { useState } from "react";
import Button from "./Button";

function Calculator() {
  const [display, setDisplay] = useState("0");

  const handleNumberClick = (num: string) => {
    setDisplay((prev) => (prev === "0" ? num : prev + num));
  };

  const handleOperatorClick = (operator: string) => {
    // Operator logic will be implemented later
    console.log("Operator clicked:", operator);
  };

  const handleClear = () => {
    setDisplay("0");
  };

  const handleEquals = () => {
    // Equals logic will be implemented later
    console.log("Equals clicked");
  };

  const handleAnswer = () => {
    // Answer logic will be implemented later
    console.log("Answer clicked");
  };

  return (
    <div className="w-[320px] h-[550px] bg-gray-800 rounded-2xl p-6 shadow-lg">
      {/* Output display */}
      <div className="h-24 mb-6 bg-gray-900 rounded-xl p-4 flex items-end justify-end text-white text-3xl">
        {display}
      </div>

      {/* Buttons grid */}
      <div className="grid grid-cols-4 gap-4">
        {/* Row 1 */}
        <Button value="C" onClick={handleClear} type="special" />
        <Button
          value="±"
          onClick={() => handleOperatorClick("±")}
          type="special"
        />
        <Button
          value="%"
          onClick={() => handleOperatorClick("%")}
          type="special"
        />
        <Button
          value="÷"
          onClick={() => handleOperatorClick("÷")}
          type="operator"
        />

        {/* Row 2 */}
        <Button value="7" onClick={() => handleNumberClick("7")} />
        <Button value="8" onClick={() => handleNumberClick("8")} />
        <Button value="9" onClick={() => handleNumberClick("9")} />
        <Button
          value="×"
          onClick={() => handleOperatorClick("×")}
          type="operator"
        />

        {/* Row 3 */}
        <Button value="4" onClick={() => handleNumberClick("4")} />
        <Button value="5" onClick={() => handleNumberClick("5")} />
        <Button value="6" onClick={() => handleNumberClick("6")} />
        <Button
          value="-"
          onClick={() => handleOperatorClick("-")}
          type="operator"
        />

        {/* Row 4 */}
        <Button value="1" onClick={() => handleNumberClick("1")} />
        <Button value="2" onClick={() => handleNumberClick("2")} />
        <Button value="3" onClick={() => handleNumberClick("3")} />
        <Button
          value="+"
          onClick={() => handleOperatorClick("+")}
          type="operator"
        />

        {/* Row 5 */}
        <Button value="0" onClick={() => handleNumberClick("0")} />
        <Button value="." onClick={() => handleNumberClick(".")} />
        <Button value="Ans" onClick={handleAnswer} type="operator" />
        <Button value="=" onClick={handleEquals} type="operator" />
      </div>
    </div>
  );
}

export default Calculator;
