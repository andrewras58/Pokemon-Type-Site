import { types } from "./type-data";
import { useState } from "react";

const TypeResult = ({type1, type2}) => {
  const nullEmptySet = (set) => {
    if (set.size === 0){
      return null;
    }
    return set;
  }

  const [typeInfo, setTypeInfo] = useState({
    superEffective: null,
    notVeryEffective: null,
    noEffect: null,
    weakTo: null,
    resists: null,
    immuneTo: null
  })

  setTimeout(() => {
    if (!type1){
      setTypeInfo({
        superEffective: null,
        notVeryEffective: null,
        noEffect: null,
        weakTo: null,
        resists: null,
        immuneTo: null
      });
    } 
    else if (type1 && !type2){
      let offense = types[type1]['offense'];
      let defense = types[type1]['defense'];
      setTypeInfo({
        superEffective: nullEmptySet(offense['super-effective']),
        notVeryEffective: nullEmptySet(offense['not-very-effective']),
        noEffect: nullEmptySet(offense['no-effect']),
        weakTo: nullEmptySet(defense['weak-to']),
        resists: nullEmptySet(defense['resists']),
        immuneTo: nullEmptySet(defense['immune-to'])
      });
    } else{
      console.log('type pairing feature does not exist... yet');
    }
  }, 0);

  return ( 
    <div className="result">
      {typeInfo.superEffective && <div className="super-effective">Super effective against:<div>{typeInfo.superEffective}</div></div>}
      {typeInfo.notVeryEffective && <div className="not-very-effective">Not very effective against:<div>{typeInfo.notVeryEffective}</div></div>}
      {typeInfo.noEffect && <div className="no-effect">No effect against:<div>{typeInfo.noEffect}</div></div>}
      {typeInfo.weakTo && <div className="weak-to">Weak to:<div>{typeInfo.weakTo}</div></div>}
      {typeInfo.resists && <div className="resits">Resists:<div>{typeInfo.resists}</div></div>}
      {typeInfo.immuneTo && <div className="immune-to">Immune to:<div>{typeInfo.immuneTo}</div></div>}
    </div>
  );
}

export default TypeResult;