import { types } from "./type-data";
import { useState, useEffect } from "react";
import DisplayTypeResult from "./DisplayTypeResult";

const TypeResult = ({type1, type2, offense}) => {
  
  const [offenseInfo, setOffenseInfo] = useState({
    superEffective: null,
    neutral: null,
    notVeryEffective: null,
    noEffect: null
  });

  const [defenseInfo, setDefenseInfo] = useState({
    weakTo: null,
    neutral: null,
    resists: null,
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
        weakTo: null,
        neutral: null,
        resists: null,
        immuneTo: null
      })
    }
  }, [type1])

  useEffect(() => {
    if (offense && type1){
      setOffenseInfo({
        superEffective: types[type1]['offense']['super-effective'],
        notVeryEffective: types[type1]['offense']['not-very-effective'],
        neutral: types[type1]['offense']['neutral'],
        noEffect: types[type1]['offense']['no-effect']
      });
    }
  }, [type1, offense]);

  useEffect(() => {
    if (!offense && type1){
      setDefenseInfo({
        weakTo: types[type1]['defense']['weak-to'],
        neutral: types[type1]['defense']['neutral'],
        resists: types[type1]['defense']['resists'],
        immuneTo: types[type1]['defense']['immune-to']
      });
    }
  }, [type1, type2, offense]);

  return ( 
    <div className="result">
      {offense && <span>Super Effective: {offenseInfo.superEffective && <DisplayTypeResult typeSet={offenseInfo.superEffective}></DisplayTypeResult>}</span>}
      {offense && <span>Neutral: {offenseInfo.neutral && <DisplayTypeResult typeSet={offenseInfo.neutral}></DisplayTypeResult>}</span>}
      {offense && <span>Not Very Effective: {offenseInfo.notVeryEffective && <DisplayTypeResult typeSet={offenseInfo.notVeryEffective}></DisplayTypeResult>}</span>}
      {offense && <span>No Effect: {offenseInfo.noEffect && <DisplayTypeResult typeSet={offenseInfo.noEffect}></DisplayTypeResult>}</span>}
      {!offense && <span>Weak to: {defenseInfo.weakTo}</span>}
      {!offense && <span>Neutral: {defenseInfo.neutral}</span>}
      {!offense && <span>Resists: {defenseInfo.resists}</span>}
      {!offense && <span>Immune to: {defenseInfo.immuneTo}</span>}
    </div>
  );
}

export default TypeResult;