import { useState } from "react";
import NavBar from "./NavBar";
import TypeButtons from "./TypeButtons";


const Home = () => {
  const [offense, setOffense] = useState(true);
  const [type1, setType1] = useState(null);
  const [type2, setType2] = useState(null);

  return ( 
    <div className="home">
      <NavBar setOffense={setOffense} />
      <h1>Pokemon - {offense ? "Offensive" : "Defensive"} Type Strengths and Weaknesses</h1>
      <TypeButtons type1={type1} type2={type2} setType1={setType1} setType2={setType2}/>
      
    </div>
  );
}
 
export default Home;