import { useState } from "react";

const Calculator = () => {

    const [value, setValue] = useState(1);
    const [type, setType] = useState("isPrime");
    // const [type, setType] = useState("isFibonacci");
    const [result, setResult] = useState("");

    const isPrimeToCheck = (num) => {
        for(let i = 2; i < num; i++)
          if(num % i === 0) return false;
        return num > 1;
    }

    const isFibonacciToCheck = (n) => {
        let fib,
          a = (5 * Math.pow(n, 2) + 4),
          b = (5 * Math.pow(n, 2) - 4)
      
        let result = Math.sqrt(a) % 1 === 0,
          res = Math.sqrt(b) % 1 === 0;
      
        //fixed this line
        if (result || res === true) // checks the given input is fibonacci series
        {
            //fib = Math.round(n * 1.618); // finds the next fibonacci series of given input
            //console.log("The next Fibonacci number is " + fib);
            //console.log(`${n} is a fibonacci number`)
            return true
        } else {
            // console.log(`${n} is not a fibonacci number`);
            return false
        }
    }

    const handleCheckMain = (typeSelected, valueSelected) => {
        
        let s_Type = typeSelected
        let s_Value = valueSelected

        // console.log('------------------')
        // console.log('TYPE >>',s_Type)
        // console.log('VALUE >>',s_Value)

        if(s_Type === "isPrime" && !isNaN(s_Value)){ // isPrime && Only Number
            // const res = isPrimeToCheck(parseInt(valueSelected, 10)) ? "YES": "NO";
            // console.log('--RESULT IN PRIME--')
            const res = isPrimeToCheck(parseInt(s_Value,10)) ? "YES": "NO";
            // console.log('res>>',res)
            setResult(res)
        }else if(s_Type === "isFibonacci" && !isNaN(s_Value)){ //isFibonacci && Only Number
            // const res = isFibonacciToCheck(valueSelected) ? "YES FIBO" : "NOT FIBO";
            // console.log('--RESULT IN FIBONACCI--')
            const res = isFibonacciToCheck(parseInt(parseInt(s_Value))) ? "YES FIBO" : "NOT FIBO";
            // console.log('res>>',res)
            setResult(res)
        }else{
            setResult("ERROR");
        }
        // console.log('result>>',result)
    }

    const handleTextbox = (e) => {
        if(e.target.value < 0){
            const replaceNegativeNumber = e.target.value.replace(/^0$|^-?[1-9]\d*(\.\d+)?$/, 1)
            setValue(replaceNegativeNumber);
        }else{
            const onlyNums = e.target.value.replace(/[^1-9-]+/g, '')
            setValue(onlyNums)
        }
        handleCheckMain(type, e.target.value)
    }

    const handleSelect = (e) => {
        let currentType = e.target.value
        setType(currentType)
        handleCheckMain(currentType, value)
        
    }

    
  
    
  
    let text = "";
    let classValue = "";
  
    // if (result === "YES") {
    //     text = `${value} is a prime number`;
    //     classValue = "text-success";
    // } else if (result === "NO") {
    //     text = `${value} is not a prime number`;
    //     classValue="text-danger";
    // } else if (result === "YES FIBO") {
    //     text = `${value} is a fibonacci number`;
    //     classValue="text-success";
    // } else if (result === "NOT FIBO") {
    //     text = `${value} is not a fibonacci number`;
    //     classValue="text-danger";
    // } else if (result === "ERROR") {
    //     text = `${value} is not a number`;
    //     classValue="text-danger";
    // }
    if(result === "YES" || result === "YES FIBO"){
        text = 'true'
        classValue = "text-success";
    }else{
        text = 'false'
        classValue = "text-danger";
    }


    return ( 
        <div className="container-fluid">
            <div className="row">
                <div className="col-md-3 box_left border">
                    <div>
                        {/* <p>Enter number to verify prime number</p> */}
                        <input type="text" value={value} onChange={handleTextbox}/>
                    </div>
                </div>
                <div className="col box_center border">
                    <div>
                        {/* <button className="button" onClick={handleClick}>Check</button> */}
                        <select value={type} onChange={handleSelect}>
                            <option value="isPrime">isPrime</option>
                            <option value="isFibonacci">isFibonacci</option>
                        </select>
                    </div>
                </div>
                <div className="col-md-3 box_right border">
                    <div className={ classValue }>{text}</div>
                </div>
            </div>
        </div>
     );
}
 
export default Calculator;