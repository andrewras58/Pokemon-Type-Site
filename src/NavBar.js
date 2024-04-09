const NavBar = ({setOffense, setType2}) => {
  const handleToggle = (offenseToggle) => {
    if (offenseToggle){
      document.getElementById("offense").className = "toggle activated";
      document.getElementById("defense").className = "toggle";
    } else {
      document.getElementById("offense").className = "toggle";
      document.getElementById("defense").className = "toggle activated";
    }
  }

  return ( 
    <nav>
      <button className="toggle activated" id="offense" onClick={() => {setOffense(true); setType2(null); handleToggle(true);}}>Offense</button>
      <button className="toggle" id="defense" onClick={() => {setOffense(false); handleToggle(false);}}>Defense</button>
    </nav>
  );
}
 
export default NavBar;