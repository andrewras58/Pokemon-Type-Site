const NavBar = ({setOffense, setType2}) => {
  return ( 
    <nav>
      <button onClick={() => {
        setOffense(true);
        setType2(null);
      }}>Offense</button>
      <button onClick={() => setOffense(false)}>Defense</button>
    </nav>
  );
}
 
export default NavBar;