const NavBar = ({setOffense}) => {
  return ( 
    <nav>
      <button onClick={() => setOffense(true)}>Offense</button>
      <button onClick={() => setOffense(false)}>Defense</button>
    </nav>
  );
}
 
export default NavBar;