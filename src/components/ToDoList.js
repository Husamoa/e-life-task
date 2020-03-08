import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { ThemeContext } from '../contexts/ThemeContext';

const ToDoList = ({ items, deleteItem, addToDone }) => {
  const { lightTheme } = useContext(ThemeContext);
  const theme = !lightTheme ? ' darkmode' : '';

  return (
    <div className={`todolist${theme}`}>
      <ul className={`container${theme}`}>
        <h1 className="todo">TO DO</h1>
        {items.map((item, index) => (
        /* eslint-disable */
          <li onClick={e => deleteItem(index)} key={index}>
            <span className="todo-item">{item}</span>
            <button className="left" onClick={e => addToDone(item)}>DONE</button>
            {' '}
          </li>
        /* eslint-enable */
        ))}
      </ul>
    </div>
  );
};

ToDoList.propTypes = {
  items: PropTypes.instanceOf(Array).isRequired,
  deleteItem: PropTypes.func.isRequired,
  addToDone: PropTypes.func.isRequired,
};

export default ToDoList;
