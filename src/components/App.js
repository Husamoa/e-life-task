import React, { Component } from 'react';
import SimpleStorage from 'react-simple-storage';

import Clock from './Clock';
import Input from './Input';
import ToDoList from './ToDoList';
import DoneList from './DoneList';
import ThemeContextProvider from '../contexts/ThemeContext';
import Navbar from './Navbar';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      userInput: '',
      done: [],
    };
    this.deleteItem = this.deleteItem.bind(this);
  }

// METHODS
changingInput=(input) => {
  this.setState({
    userInput: input,
  });
};

addTolist=(input) => {
  const { userInput, items } = this.state;
  if (userInput === '') {
    /* eslint-disable-next-line */
    alert('empty input');
  } else {
    const newitems = items;
    newitems.push(input);

    this.setState({
      items: newitems,
      userInput: '',
    });
  }
}


deleteItem=(indexp) => {
  const { items } = this.state;
  const newarray = items.filter((item, index) => index !== indexp);
  this.setState({
    items: newarray,
  });
}

deleteDone=(indexp) => {
  const { done } = this.state;
  const newarray = done.filter((item, index) => index !== indexp);
  this.setState({
    done: newarray,
  });
}

addToDone=(e) => {
  const { done, items } = this.state;
  const donelist = done;
  donelist.push(e);
  this.setState({
    done: donelist,
  });
  if (items.length === 1) {
    /* eslint-disable-next-line */
    alert('Good job!', 'You clicked the button!', 'success');
  }
}

handleKeyPress = (event) => {
  const { userInput } = this.state;
  if (event.key === 'Enter') {
    this.addTolist(userInput);
  }
}


render() {
  const {
    userInput, items, done,
  } = this.state;
  return (
    <div id="app">
      <ThemeContextProvider>
        <Navbar />
        <SimpleStorage parent={this} />
        <div className="container">
          <Clock />
          <Input
            userInput={userInput}
            handleKeyPress={this.handleKeyPress}
            changingInput={this.changingInput}
            addTolist={this.addTolist}
          />
          <ToDoList
            items={items}
            deleteItem={this.deleteItem}
            addToDone={this.addToDone}
          />
          <DoneList
            done={done}
            deleteDone={this.deleteDone}
          />
        </div>
      </ThemeContextProvider>
    </div>
  );
}
}

export default App;
