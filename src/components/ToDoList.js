import React from 'react';
import PropTypes from 'prop-types';


const ToDoList = ({ items, deleteItem, addToDone }) => (
  <ul>
    <h1 className="todo">TO DO</h1>
    {items.map((item, index) => (
      /* eslint-disable */
      <li onClick={e => deleteItem(index)} key={index}>
        {item}
        <button className="left" onClick={e => addToDone(item)}>DONE</button>
        {' '}
      </li>
      /* eslint-enable */
    ))}
  </ul>
);

ToDoList.propTypes = {
  items: PropTypes.instanceOf(Array).isRequired,
  deleteItem: PropTypes.func.isRequired,
  addToDone: PropTypes.func.isRequired,
};

export default ToDoList;
