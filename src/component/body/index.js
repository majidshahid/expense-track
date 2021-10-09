
import {useState} from "react";

function Body(){
  var [income,setincome]=useState()
  var [expense,setexpense]=useState("")
  var [balance,setbalance]=useState(0)
  var [xpencse,setxpense]=useState(0);
  var [val,setvalue]=useState("")
  const[todo,settodo]=useState([])
var addincome=()=>{
    var A= [...todo,];
    A.push(val);
    settodo(A)
    }
  var a =balance-xpencse;
 
  function Foo(){
    var a = +income + +balance;
    setbalance(a);
    var A= [...todo,];
    A.push(val);
    var c =`${A} : ${a}`
   console.log(c)
    settodo(A)

    setincome("")
   
  }
  function Expense(){
var a = +expense + +xpencse;
setxpense(a)
setexpense("")

  }
 
 
    return (
        <div className="container-fluid">
        <div className="row">
          <div className="col-7 ">
            <div className="text-left">
              <h1>INCOME <span id="income"></span></h1>
          <input type="number" value={income} onChange={(e)=>setincome(e.target.value)} placeholder="Expense" />
          <input value={val} onChange={(e)=>setvalue(e.target.value)} type="input" placeholder="Source" />
              <button onClick={Foo}>Add</button>

<hr/>
<h1>EXPENSE <span id="expense"></span></h1>
<input type="number" value={expense} onChange={(e)=>setexpense(e.target.value)} placeholder="Income" />
<button onClick={Expense}>Add</button>
            </div>
          </div>
          <div className="col-5">
          <h1>Total INCOME :{balance}</h1>
          <h1>Your Balance:<span>{a}</span></h1>
          
<h1 style={{color: "red"}}>Your Expense:<span>{xpencse}</span></h1>
<h1></h1>
          </div>
        </div>


<div>
<ul>
{todo.map((v,i)=>{
    return <li key ={i}>{v}</li>
  })}
</ul>
</div>






      </div>

    );
}
export default Body;