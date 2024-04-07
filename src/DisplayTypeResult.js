const DisplayTypeResult = ({typeSet}) => {
  return ( 
    <ul className="type-list">
      {Array.from(typeSet).map(type => (
        <li key={type} className={`type-result ${type}`}>{type}</li>
      ))}
    </ul>
  );
}

export default DisplayTypeResult;