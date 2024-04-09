import { useState } from "react";
import NavBar from "./NavBar";
import TypeButtons from "./TypeButtons";
import TypeResult from "./TypeResult";

const Home = () => {
  const [offense, setOffense] = useState(true);
  const [type1, setType1] = useState(null);
  const [type2, setType2] = useState(null);

  return ( 
    <div className="home">
      <NavBar setOffense={setOffense} setType2={setType2} />
      <h1>{offense ? "Offensive" : "Defensive"} Type Strengths and Weaknesses</h1>
      <p>{offense ? "Click the buttons to see offensive type relations" : "Click the buttons to see defensive type relations"}</p>
      <TypeButtons type1={type1} type2={type2} offense={offense} setType1={setType1} setType2={setType2}/>
      <TypeResult type1={type1} type2={type2} offense={offense} />
    </div>
  );
}
 
export default Home;