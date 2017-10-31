import React from 'react';
import ReactDOM from 'react-dom';

const Info = (props) => (
  <div>
    <h1>info</h1>
    <p>{props.info}</p>
  </div>
)

ReactDOM.render(<Info info='details' />, document.getElementById('app'));
