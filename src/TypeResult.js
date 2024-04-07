import { types } from "./type-data";
import { useState, useEffect } from "react";
import DisplayTypeResult from "./DisplayTypeResult";

const TypeResult = ({type1, type2, offense}) => {
  const nullEmptySet = (mySet) =>{
    return mySet.size === 0 ? null : mySet;
  }

  const [offenseInfo, setOffenseInfo] = useState({
    superEffective: null,
    neutral: null,
    notVeryEffective: null,
    noEffect: null
  });

  const [defenseInfo, setDefenseInfo] = useState({
    doubleWeakTo: null,
    weakTo: null,
    neutral: null,
    resists: null,
    doubleResists: null,
    immuneTo: null
  })

  useEffect(() => {
    if (!type1){  // wipe the results when there are no types selected
      setOffenseInfo({
        superEffective: null,
        notVeryEffective: null,
        neutral: null,
        noEffect: null
      });

      setDefenseInfo({
        doubleWeakTo: null,
        weakTo: null,
        neutral: null,
        resists: null,
        doubleResists: null,
        immuneTo: null
      })
    }
  }, [type1])

  useEffect(() => {
    if (offense && type1){
      setOffenseInfo({
        superEffective: nullEmptySet(types[type1]['offense']['super-effective']),
        notVeryEffective: nullEmptySet(types[type1]['offense']['not-very-effective']),
        neutral: nullEmptySet(types[type1]['offense']['neutral']),
        noEffect: nullEmptySet(types[type1]['offense']['no-effect'])
      });
    }
  }, [type1, offense]);

  useEffect(() => {
    if (!offense && type1 && !type2){
      setDefenseInfo({
        doubleWeakTo: null,
        weakTo: nullEmptySet(types[type1]['defense']['weak-to']),
        neutral: nullEmptySet(types[type1]['defense']['neutral']),
        resists: nullEmptySet(types[type1]['defense']['resists']),
        doubleResists: null,
        immuneTo: nullEmptySet(types[type1]['defense']['immune-to'])
      });
    } else if (!offense && type1 && type2) {
      let resultTyping = {
        doubleWeakTo: new Set([]),
        weakTo: new Set([]),
        neutral: new Set([]),
        resists: new Set([]),
        doubleResists: new Set([]),
        immuneTo: new Set([])
      };
  
      let type1Defense = types[type1]['defense'];
      let type2Defense = types[type2]['defense'];
  
      // (better organization of data could make this step simpler [perhaps assigning points to all types rather than sets with string literals])
      // but this works for now so I'll keep it for now
  
      // check how type2 interacts with type1's weakness
      for (const myType of type1Defense['weak-to']){
        if (type2Defense['weak-to'].has(myType)){
          resultTyping.doubleWeakTo.add(myType);
        } else if (type2Defense['neutral'].has(myType)){
          resultTyping.weakTo.add(myType);
        } else if (type2Defense['resists'].has(myType)){
          resultTyping.neutral.add(myType);
        } else {
          resultTyping.immuneTo.add(myType);
        }
      }
  
      // if type1 has a neutral typing apply how it is in type2
      for (const myType of type1Defense['neutral']){
        if (type2Defense['weak-to'].has(myType)){
          resultTyping.weakTo.add(myType);
        } else if (type2Defense['neutral'].has(myType)){
          resultTyping.neutral.add(myType);
        } else if (type2Defense['resists'].has(myType)){
          resultTyping.resists.add(myType);
        } else {
          resultTyping.immuneTo.add(myType);
        }
      }
  
      // check how type 2 interacts with type1's resistances
      for (const myType of type1Defense['resists']){
        if (type2Defense['weak-to'].has(myType)){
          resultTyping.neutral.add(myType);
        } else if (type2Defense['neutral'].has(myType)){
          resultTyping.resists.add(myType);
        } else if (type2Defense['resists'].has(myType)){
          resultTyping.doubleResists.add(myType);
        } else {
          resultTyping.immuneTo.add(myType);
        }
      }
  
      // doesn't matter what the other type has, if there is an immunity then it overrides everything
      for (const myType of type1Defense['immune-to']){
        resultTyping.immuneTo.add(myType);
      }

      setDefenseInfo({
        doubleWeakTo: nullEmptySet(resultTyping.doubleWeakTo),
        weakTo: nullEmptySet(resultTyping.weakTo),
        neutral: nullEmptySet(resultTyping.neutral),
        resists: nullEmptySet(resultTyping.resists),
        doubleResists: nullEmptySet(resultTyping.doubleResists),
        immuneTo: nullEmptySet(resultTyping.immuneTo)
      })
    }
  }, [type1, type2, offense]);

  return ( 
    <div className="result">
      {offense && offenseInfo.superEffective && <span>Super Effective: <DisplayTypeResult typeSet={offenseInfo.superEffective}></DisplayTypeResult></span>}
      {offense && offenseInfo.neutral && <span>Neutral: <DisplayTypeResult typeSet={offenseInfo.neutral}></DisplayTypeResult></span>}
      {offense && offenseInfo.notVeryEffective && <span>Not Very Effective: <DisplayTypeResult typeSet={offenseInfo.notVeryEffective}></DisplayTypeResult></span>}
      {offense && offenseInfo.noEffect && <span>No Effect: <DisplayTypeResult typeSet={offenseInfo.noEffect}></DisplayTypeResult></span>}
      {!offense && defenseInfo.doubleWeakTo && <span>Double Weak to: <DisplayTypeResult typeSet={defenseInfo.doubleWeakTo}></DisplayTypeResult></span>}
      {!offense && defenseInfo.weakTo && <span>Weak to: <DisplayTypeResult typeSet={defenseInfo.weakTo}></DisplayTypeResult></span>}
      {!offense && defenseInfo.neutral && <span>Neutral: <DisplayTypeResult typeSet={defenseInfo.neutral}></DisplayTypeResult></span>}
      {!offense && defenseInfo.resists && <span>Resists: <DisplayTypeResult typeSet={defenseInfo.resists}></DisplayTypeResult></span>}
      {!offense && defenseInfo.doubleResists && <span>Double Resists: <DisplayTypeResult typeSet={defenseInfo.doubleResists}></DisplayTypeResult></span>}
      {!offense && defenseInfo.immuneTo && <span>Immune To: <DisplayTypeResult typeSet={defenseInfo.immuneTo}></DisplayTypeResult></span>}
    </div>
  );
}

export default TypeResult;