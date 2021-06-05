import React, {useState} from 'react'
import "./FormCalc.css"

const FormCalc = () => {
    // UseState of FormCalc
    const [input1, setInput1] = useState('')
    const [input2, setInput2] = useState('')
    const [data, setData] = useState('')
    const [show, setShow] = useState(false)
    const [succes, setSucces] = useState(false)
    const [totalA, setTotalA] = useState("")
    const [totalB, setTotalB] = useState("")

    // Method for prevent reloading page
    const handleSubmit = (e) => {
        e.preventDefault();
    }

    // Method for parsing text to integer
    function ChangeFormToInt(num) {
        return parseInt(num);
    }

    // Method for cleaning data form from comma and spacing
    function CleanDataForm(text) {
        let spliting = text.replace(/\s/g, '');
        spliting = spliting.split(",");
        spliting = spliting.map(ChangeFormToInt)
        return spliting
    }

    // Method for searching gcd with more than two number
    function gcd_more_than_two_numbers(input) { 
        var len, a, b;
          len = input.length;
          if ( !len ) {
              return null;
          }
          a = input[ 0 ];
          for ( var i = 1; i < len; i++ ) {
              b = input[ i ];
              a = gcd_two_numbers( a, b );
          }
          
          return a;
      }

    // Method for searching gcd with two number
    function gcd_two_numbers(x, y) {

        x = Math.abs(x);
        y = Math.abs(y);
        while(y) {
            var t = y;
            y = x % y;
            x = t;
        }
        return x;
    }

    // Method for algorithm CRT
    function inv(a, m) {
     
        var m0 = m
        var x0 = 0
        var x1 = 1
    
        if (m === 1) {
            return 0
        }
    
        while (a > 1) {
            var q = Math.floor(a / m)
    
            var t = m
    
            m = a % m
            a = t
    
            t = x0
    
            x0 = x1 - q * x0
    
            x1 = t
        }
        
        if (x1 < 0) {
            x1 = x1 + m0
        }
    
        return x1
    }

    function findMinX(num, rem, k) {
        var prod = 1
        for (var i = 0; i < k; i++)  {
            prod = prod * num[i]
        }
        setTotalB (x => prod)
        var result = 0
    
        for (var j = 0; j < k; j++){
            var pp = Math.floor(prod / num[j])
            console.log(pp)
            result = result + rem[j] * inv(pp, num[j]) * pp
        }
        setTotalA (x => result)
        
        return result % prod
    }
    // End of method CRT algorithm

    // Method for displaying result of CRT
    function display () {
        var data1 = CleanDataForm(input1)
        var data2 = CleanDataForm(input2)

        // Check GCD of b
        if (data2.length === data1.length) {
            if (gcd_more_than_two_numbers(data2) === 1) {
                setData (x => findMinX(data2, data1, data1.length) )
                setSucces (x => true)
            }
            else {
                alert("Komponen-komponen b harus saling relatif prima")
                setSucces (x => false)
            }
        }
        else {
            alert("Jumlah komponen b dan a tidak sama")
            setSucces (x => false)
        }
        
        setShow (x => true)
    }

    //Returning the html tag
    return (
        <div className = "container">
           <h1 className = "judul">Chinese Remainder Theorem</h1>
           <h1 className = "rumus">X &#8801; a ( mod b )</h1>
            <form onSubmit = {handleSubmit}>
                <div>
                    <label>a : </label>
                <input
                    type ="text"
                    value = {input1}
                    required
                    onChange = {(e) => setInput1(e.target.value)}
                />
                </div>
                <div>
                    <label>b : </label>
                <input
                    type ="text"
                    value = {input2}
                    required
                    onChange = {(e) => setInput2(e.target.value)}
                />
                </div>
                
                <button className = "button1" type = "submit" onClick = {display}>Calculate</button>
            </form>
            
            <div id="myDIV">
            
                    {(show && succes)?
                    <div>
                    <h1 className = "hasil1">X &#8801; {totalA} ( mod {totalB} )</h1>
                    <h1 className = "hasil2">X = {data}</h1>
                    </div> : null}
                    
            </div>
        </div>
        
        
    )
}
export default FormCalc