import { types } from "./type-data";
import { useState, useEffect } from "react";

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
      {offense && <span>Super Effective: {offenseInfo.superEffective}</span>}
      {offense && <span>Neutral: {offenseInfo.superEffective}</span>}
      {offense && <span>Not Very Effective: {offenseInfo.notVeryEffective}</span>}
      {offense && <span>No Effect: {offenseInfo.noEffect}</span>}
      {!offense && <span>Weak to: {defenseInfo.weakTo}</span>}
      {!offense && <span>Neutral: {defenseInfo.neutral}</span>}
      {!offense && <span>Resists: {defenseInfo.resists}</span>}
      {!offense && <span>Immune to: {defenseInfo.immuneTo}</span>}
    </div>
  );
}

export default TypeResult;