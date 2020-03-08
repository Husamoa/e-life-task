import React from 'react';
import PropTypes from 'prop-types';

const DoneList = ({ done, deleteDone }) => (
  <ul>
    <h1 className="done">DONE</h1>
    {done.map((item, index) => (
      /* eslint-disable-next-line */
      <li onClick={e => deleteDone(index)} key={index}>
        {item}
        {' '}
        <span>✔</span>
      </li>
    ))}
  </ul>
);

DoneList.propTypes = {
  done: PropTypes.instanceOf(Array).isRequired,
  deleteDone: PropTypes.func.isRequired,
};

export default DoneList;
