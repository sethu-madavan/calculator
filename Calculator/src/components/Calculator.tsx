import "./Calculator.css"
import { useState } from "react";

export default function Calculator() {
    const [value, setValue] = useState<string>("");
    const [result, setResult] = useState<number>(0);

    function evaluate() {
        setResult(eval(value));
        setValue("");
    }

    function clear() {
        setValue("");
        setResult(0);
    }

    function backspace() {
        setValue(value.slice(0, -1));
    }

    return (
        <div className="container">
            <div>
                <div id="value">{value}</div>
                <div id="result">{result}</div>
            </div>
            <div>
                <button type="button" className="special" onClick={() => backspace()}> C </button>
                <button type="button" className="special" onClick={() => clear()}> CE </button>
                <button type="button" className="special" onClick={() => evaluate()}> = </button>
                <button type="button" className="operator" onClick={() => setValue(value + "%")}> % </button>
            </div>
            <div>
                <button type="button" className="number" onClick={() => setValue(value + "1")}> 1 </button>
                <button type="button" className="number" onClick={() => setValue(value + "2")}> 2 </button>
                <button type="button" className="number" onClick={() => setValue(value + "3")}> 3 </button>
                <button type="button" className="operator" onClick={() => setValue(value + "+")}> + </button>
            </div>
            <div>
                <button type="button" className="number" onClick={() => setValue(value + "4")}> 4 </button>
                <button type="button" className="number" onClick={() => setValue(value + "5")}> 5 </button>
                <button type="button" className="number" onClick={() => setValue(value + "6")}> 6 </button>
                <button type="button" className="operator" onClick={() => setValue(value + "-")}> - </button>
            </div>
            <div>
                <button type="button" className="number" onClick={() => setValue(value + "7")}> 7 </button>
                <button type="button" className="number" onClick={() => setValue(value + "8")}> 8 </button>
                <button type="button" className="number" onClick={() => setValue(value + "9")}> 9 </button>
                <button type="button" className="operator" onClick={() => setValue(value + "/")}> / </button>
            </div>
            <div>
                <button type="button" className="number" onClick={() => setValue(value + "00")}> 00 </button>
                <button type="button" className="number" onClick={() => setValue(value + "0")}> 0 </button>
                <button type="button" className="operator" onClick={() => setValue(value + ".")}> . </button>
                <button type="button" className="operator" onClick={() => setValue(value + "*")}> x </button>
            </div>
        </div>
    );
}