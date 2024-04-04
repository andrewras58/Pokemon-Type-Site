import { types } from "./type-data";

const TypeButtons = () => {
  console.log(types);
  return ( 
    <div className="type-buttons">
      {Object.keys(types).map(myType => (
        <button>{myType}</button>
      ))}
    </div>
  );
}

export default TypeButtons;