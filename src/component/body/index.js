
import {useState} from "react";

function Body(){
  var [income,setincome]=useState("")
  var [expense,setexpense]=useState("")
    return (
        <div className="container-fluid">
        <div className="row">
          <div className="col-7 ">
            <div className="text-left">
              <h1>INCOME <span id="income"></span></h1>
          <input type="number" value={income} onChange={(e)=>setincome(e.target.value)} placeholder="Expense" />
              

<hr/>
<h1>EXPENSE <span id="expense"></span></h1>
<input type="number" value={expense} onChange={(e)=>setexpense(e.target.value)} placeholder="Income" />
            </div>
          </div>
          <div className="col-5">
          <h1>Your Balance:<span>{income}</span></h1>
          <h1></h1>
<h1>Your Expense:<span>{expense}</span></h1>
<h1></h1>
          </div>
        </div>
      </div>

    );
}
export default Body;