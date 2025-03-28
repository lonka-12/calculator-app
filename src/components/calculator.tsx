import { useState } from "react";
import Button from "./Button";

function Calculator() {
  const [display, setDisplay] = useState("0");
  const [previousDisplay, setPreviousDisplay] = useState<string | null>(null);
  const [answer, setAnswer] = useState<number | null>(null);

  const handleNumberClick = (num: string) => {
    if (display === "0") {
      setDisplay(num);
    } else {
      setDisplay(display + num);
    }
  };

  const isLastCharOperator = (str: string): boolean => {
    const lastChar = str.slice(-1);
    return ["+", "-", "×", "÷", "%"].includes(lastChar);
  };

  const handleOperatorClick = (op: string) => {
    if (isLastCharOperator(display)) {
      setDisplay(display.slice(0, -1) + op);
    } else {
      setDisplay(display + op);
    }
  };

  const handleClear = () => {
    setDisplay("0");
  };

  const handlePlusMinus = () => {};

  const handleAnswer = () => {};

  const handleEquals = () => {
    const parts = display.split(/([×÷+-])/);
    const calculate = (a: string, b: string, operator: string): number => {
      const num1 = Number(a);
      const num2 = Number(b);
      switch (operator) {
        case "×":
          return num1 * num2;
        case "÷":
          return num1 / num2;
        case "+":
          return num1 + num2;
        case "-":
          return num1 - num2;
        default:
          return 0;
      }
    };

    // Handle multiplication and division first
    for (let i = 0; i < parts.length; i++) {
      if (parts[i] === "×" || parts[i] === "÷") {
        const result = calculate(parts[i - 1], parts[i + 1], parts[i]);
        parts[i - 1] = result.toString();
        parts.splice(i, 2);
        i--;
      }
    }

    // Then handle addition and subtraction
    for (let i = 0; i < parts.length; i++) {
      if (parts[i] === "+" || parts[i] === "-") {
        const result = calculate(parts[i - 1], parts[i + 1], parts[i]);
        parts[i - 1] = result.toString();
        parts.splice(i, 2);
        i--;
      }
    }

    setAnswer(Number(parts[0]));
    setPreviousDisplay(display + "=" + parts[0]);
    setDisplay(parts[0]);
  };

  return (
    <div className="w-80 h-[540px] bg-gray-800 rounded-2xl p-6 shadow-lg shadow-gray-900/50">
      {/* Output display */}
      <div className="w-full h-20 bg-gray-900 rounded-2xl p-4 mb-6 flex flex-col justify-end">
        {previousDisplay && (
          <div className="text-gray-400 text-sm opacity-75 text-right">
            {previousDisplay}
          </div>
        )}
        <div className="text-gray-100 text-2xl font-medium text-right">
          {display}
        </div>
      </div>

      {/* Buttons grid */}
      <div className="grid grid-cols-4 gap-4">
        {/* Row 1 */}
        <Button value="C" onClick={handleClear} type="special" />
        <Button value="±" onClick={handlePlusMinus} type="special" />
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
