import { useState } from "react";
import NavBar from "./NavBar";
import TypeButtons from "./TypeButtons";
import TypeResult from "./TypeResult";
import { useState } from "react";
const Home = () => {
  const [type1, setType1] = useState(null);
  const [type2, setType2] = useState(null);

  return ( 
    <div className="home">
      <h1>This is Home</h1>
      <TypeButtons type1={type1} type2={type2} setType1={setType1} setType2={setType2}/>
      <TypeResult type1={type1} type2={type2}/>
    </div>
  );
}
 
export default Home;