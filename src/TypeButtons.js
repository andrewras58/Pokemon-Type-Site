import { types } from "./type-data";

const TypeButtons = ({type1, type2, setType1, setType2}) => {
  const handleClick = (e) => {
    if (!type1){
      setType1(e.target.id);
    } else if (e.target.id === type1){
      setType1(type2);
      setType2(null);
    } else if (!type2){
      setType2(e.target.id);
    } else if (e.target.id === type2){
      setType2(null);
    } else{
      setType1(e.target.id);
    }
  }

  return ( 
    <div className="type-buttons">
      {Object.keys(types).map(myType => (
        <button key={myType} className={`type-button ${myType}`} id={myType} onClick={handleClick}>{myType}</button>
      ))}
      <div className="type-pair">
        {type1 && <span className={type1}>{type1}</span>}
        {type2 && <span className={type2}>{type2}</span>}
      </div>
    </div>
  );
}

export default TypeButtons;