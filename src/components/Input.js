import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { ThemeContext } from '../contexts/ThemeContext';

const Input = ({
  userInput, handleKeyPress, changingInput, addTolist,
}) => {
  const { lightTheme } = useContext(ThemeContext);
  const theme = !lightTheme ? ' darkmode' : '';
  return (
    <div className={`inputContainer${theme}`}>
      <div className="userinput">
        <input onKeyPress={handleKeyPress} placeholder="ENTER TASK" onChange={e => changingInput(e.target.value)} value={userInput} type="text" />
        <div className={`addbutton${theme}`} onClick={() => { addTolist(userInput); }} onKeyPress={handleKeyPress} tabIndex="0" role="button">ADD</div>
      </div>
    </div>
  );
};


Input.propTypes = {
  userInput: PropTypes.string.isRequired,
  handleKeyPress: PropTypes.func.isRequired,
  changingInput: PropTypes.func.isRequired,
  addTolist: PropTypes.func.isRequired,
};

export default Input;
