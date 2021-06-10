import React, {useState} from 'react'
import "./FormCalc.css"

const FormCalc = () => {
    // UseState of FormCalc
    const [input1, setInput1] = useState('')
    const [input2, setInput2] = useState('')
    const [data, setData] = useState('')
    const [show, setShow] = useState(false)
    const [succes, setSucces] = useState(false)
    const [tampilkan, setTampilkan] = useState(false)
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
        let spliting2 = spliting.split(",");
        let spliting3 = spliting2.map(ChangeFormToInt)
        return spliting3
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
        console.log("prod")

        console.log(prod)
        console.log(num)
        console.log(rem)
        console.log(k)
        setTotalB (x => prod)
        var result = 0
        for (var j = 0; j < k; j++){
            var pp = Math.floor(prod / num[j])
            console.log("ini pp")
            console.log(pp)
            result = result + rem[j] * inv(pp, num[j]) * pp
            

        }
        setTotalA (x => result)
        
        return (result % prod)
    }
    function penjelasan(num, rem, k) {
        var prod = 1
        for (var i = 0; i < k; i++)  {
            prod = prod * num[i]
        }
        console.log("penjelasan")
        console.log(num)
        console.log(rem)
        console.log(k)
        var result = 0
        var array =[]
        var arrayY = []
        for (var j = 0; j < k; j++){
            var pp = Math.floor(prod / num[j])
            console.log(pp)
            array.push(pp)
            result = result + rem[j] * inv(pp, num[j]) * pp
            arrayY.push(inv(pp, num[j]))
        }
        console.log(array)
        var sum = 1
        for (var k = 0; k < num.length; k++){
            sum = sum * num[k]
        }
        
        return (
            <div className = "penjelasan">
                <p>1. Periksa apakah masing-masing komponen b saling relatif prima</p>
                <p>‏‏‎ ‎</p>
                <p>2. Untuk setiap nilai k, masing-masing komponen a ke dalam variabel ak</p>
                <div>
                    {
                        (rem.map((currElement, index) => <p value={currElement} key={currElement}> ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎a{index+1} = {currElement}</p>))
                    }
                </div>
                <p>‏‏‎ ‎</p>
                <p>3. Tentukan perkalian masing-masing komponen b</p>
                <p>‏‏‎ ‎‏‏‎ ‏‏‎ ‎‎‏‏‎ ‎m = b1 * b2 * b3 * ...</p>
                <p>‏‏‎ ‎‏‏‎ ‏‏‎ ‎‎‏‏‎ ‎m = {sum}</p>
                <p>‏‏‎ ‎</p>
                <p>3. Untuk setiap nilai k, tentukan Mk dengan Mk = m/bk</p>
                <div>
                {
                    (array.map((currElement, index) => <p value={currElement} key={currElement}>‏‏‎ ‎‏‏‎‏‏‎ ‎ ‎‏‏‎ ‎M{index+1} = {sum}/{num[index]}={currElement}</p>))
                }
                </div>
                <p>‏‏‎ ‎</p>
                <p>4.Untuk setiap nilai k temukan yi yang di dapat dari Mi ≡ 1 ( mod mk)</p>
                <div>
                    {
                        (array.map((currElement, index) => <p value={currElement} key={currElement}>‏‏‎ ‎‏‏‎ ‎‏‏‎ ‏‏‎ ‎‎y{index+1} = {arrayY[index]} karena {currElement}.{arrayY[index]} &#8801; 1 ( mod {num[index]} )</p>))
                    }
                </div>
                <p>‏‏‎ ‎</p>
                <p>5. Tentukan solusi unik x dengan x ≡  a1 ⋅ M1 ⋅ y1 +...+ ak ⋅ Mk ⋅ yk ( mod m) </p>
                <p>‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ X &#8801; {totalA} ( mod {totalB} ) </p>
                <p>‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎X = {(data)}</p>
            </div>
        )
    }
    // End of method CRT algorithm

    // Method for displaying result of CRT
    function display () {
        setTampilkan(e => false)
        var data1 = CleanDataForm(input1)
        var data2 = CleanDataForm(input2)
        console.log(data1)
        console.log(data2)
        

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
    function display2 () {
        setTampilkan(e => true)
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
                    placeholder = "a1, a2, a3"
                    required
                    onChange = {(e) => setInput1(e.target.value)}
                />
                </div>
                <div>
                    <label>b : </label>
                <input
                    type ="text"
                    value = {input2}
                    placeholder = "b1, b2, b3"
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
                    <button className = "button2" type = "submit" onClick = {display2}>Penjelasan</button>
                    
                    </div> : null}

                    {tampilkan ?
                    <div>
                        {penjelasan(CleanDataForm(input2), CleanDataForm(input1), CleanDataForm(input1).length)}
                    </div> : null}
                    
            </div>
        </div>
        
        
    )
}
export default FormCalc