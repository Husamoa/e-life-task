import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

const Input = ({
  userInput, handleKeyPress, changingInput, addTolist,
}) => (
  <Fragment>
    <input onKeyPress={handleKeyPress} placeholder="ENTER TASK" onChange={e => changingInput(e.target.value)} value={userInput} type="text" />
    <div className="addbutton" onClick={() => { addTolist(userInput); }} onKeyPress={handleKeyPress} tabIndex="0" role="button">ADD</div>
  </Fragment>
);


Input.propTypes = {
  userInput: PropTypes.string.isRequired,
  handleKeyPress: PropTypes.func.isRequired,
  changingInput: PropTypes.func.isRequired,
  addTolist: PropTypes.func.isRequired,
};

export default Input;
