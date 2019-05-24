import React from 'react';

const Results = (props) => (
  <div className="results">
    {props.searchedWord && <h1>{props.searchedWord}:</h1>}
    {props.definition1 && <p>{props.definition1}</p>}
    {props.error && <p>{props.error}</p>}
  </div>
);

export default Results;
