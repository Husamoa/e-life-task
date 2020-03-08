import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { ThemeContext } from '../contexts/ThemeContext';


const DoneList = ({ done, deleteDone }) => {
  const { lightTheme } = useContext(ThemeContext);
  const theme = !lightTheme ? ' darkmode' : '';
  return (
    <div className={`donelist${theme}`}>
      <ul className={`container${theme}`}>
        <h1 className="done">DONE</h1>
        {done.map((item, index) => (
      /* eslint-disable-next-line */
      <li onClick={e => deleteDone(index)} key={index}>
        <span className="todo-item">{item}</span>
        {' '}
        <span className="left">✔</span>
      </li>
        ))}
      </ul>
    </div>
  );
};

DoneList.propTypes = {
  done: PropTypes.instanceOf(Array).isRequired,
  deleteDone: PropTypes.func.isRequired,
};

export default DoneList;
