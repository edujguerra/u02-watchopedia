import { useState } from "react"

const Counter = () => {
    const [counter, setConter] = useState(0);

    function incrementCounter(){
        setConter(counter+1)
    }

    function decrementCounter(){
        setConter(counter-1)
    }    

    return (
        <div className="col-12 col-md-4 offset-md-4 border text-white">
            <span className="h2 pt-4 m-2 text-white-50">Fun Counter</span>
            <br/>
            <button className="btn btn-success m-1" onClick={incrementCounter}>+1</button>
            <button className="btn btn-danger m-1" onClick={decrementCounter}>-1</button>
            <br/>
            <span className="h4">
                Counter &nbsp;
                <span className="text-success">{counter}</span>
            </span>
        </div>

    )
}
export default Counter