import { types } from "./type-data";

const TypeButtons = ({type1, type2, offense, setType1, setType2}) => {
  const handleClick = (e) => {
    if (!type1){
      setType1(e.target.id);
    } else if (!offense && !type2 && type1 !== e.target.id){
      setType2(e.target.id);
    }
  }

  return ( 
    <div className="type-buttons">
      {Object.keys(types).map(myType => (
        <button key={myType} className={`type-button ${myType}`} id={myType} onClick={handleClick}>{myType}</button>
      ))}
      <div className="type-pair">
        {type1 && <button className={`type-button ${type1} selected`} onClick={ () => {setType1(type2); setType2(null);} }>{type1}<span>X</span></button>}
        {type2 && <button className={`type-button ${type2} selected`} onClick={ () => setType2(null) }>{type2}<span>X</span></button>}
      </div>
    </div>
  );
}
export default TypeButtons;