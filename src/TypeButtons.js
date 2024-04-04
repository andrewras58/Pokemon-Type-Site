import { types } from "./type-data";

const TypeButtons = () => {
  console.log(types);
  return ( 
    <div className="type-buttons">
      {Object.keys(types).map(myType => (
        <button className={`type-button ${myType}`} id={myType}>{myType}</button>
      ))}
    </div>
  );
}

export default TypeButtons;