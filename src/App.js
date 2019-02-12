  import React, { Component } from 'react';
  import './App.css';
  import ToDo from './components/ToDo.js';

  class App extends Component {
    constructor(props) {
      super(props);
      this.state = {
        todos: [
          { description: 'Walk the cat', isCompleted: true, isDeleted: false },
          { description: 'Throw the dishes away', isCompleted: false, isDeleted: false },
          { description: 'Buy new dishes', isCompleted: false, isDeleted: false }
        ],
          newTodoDescription: '' //standard approach to using values from text inputs is to store the value in state.
      };
    }
    // We need handleChange () to accept the e variable (short for "event"), and then set the state of  newToDoDescription to e.target.value. e.target is the target element, the text input.
    handleChange(e) {
       this.setState({ newTodoDescription: e.target.value })
     }

    handleSubmit(e) { // create the handleSubmit method on the App component
       e.preventDefault(); // Call e.preventDefault() to prevent the default page reload on form submit,
       if (!this.state.newTodoDescription) { return }
       // 1st pass
       // console.log('handleSubmit called'); //add a console.log() with an arbitrary value to test the event listener.

       // 2nd pass
       // On submit, we want a new to-do item to be added to this.state.todos
       // We'll create a new todo object and use this.setState() to add it to this.state.todos
       // To ensure that we don't directly mutate state, we'll use the JavaScript spread syntax to pass setState a new array, with our new todo object added to the end of it.
       const newTodo = { description: this.state.newTodoDescription, isCompleted: false };
       this.setState({ todos: [...this.state.todos, newTodo], newTodoDescription: '' });
     }

    // 1st pass
    // toggleComplete() { //create the event handler as a class method on the App component
    // console.log('toggleComplete executed');
    // }

    // 2nd pass
    //  the anonymous function will be passed to ToDo. It will be up to the  ToDo component to call the anonymous function, through  this.props.toggleComplete which will be called from the onChange listener.
    // toggleComplete(index) {
    // console.log(index)
    // }

    // 3rd pass
    toggleComplete(index) {
      const todos = this.state.todos.slice();
      const todo = todos[index];
      todo.isCompleted = todo.isCompleted ? false : true;
      this.setState({ todos: todos });
    }
    deleteTodo(index) {
      this.setState(prevState => {
      const todos = prevState.todos.filter((todo, i) => i !== index);
      return { todos };
  });
}

    render() {
      return (
        <div className="App">
          <ul>
          {/*// When you don’t have stable IDs for rendered items, you may use the item index as a key as a last resort
          // https://reactjs.org/docs/lists-and-keys.html */}
          { this.state.todos.map((todo, index) => //https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map#Mapping_an_array_of_numbers_to_an_array_of_square_roots
            //pass this function to our ToDo component as a prop.
            //<ToDo key={ index } description={ todo.description } isCompleted={ todo.isCompleted } toggleComplete={ this.toggleComplete } />

            // same as above + To update the 'App' component's state, it will be necessary to know which 'ToDo' item is selected. Instead of passing the 'toggleComplete' function directly to 'ToDo', we can wrap it
            //in an anonymous function. This allows us to pass the function the todo's 'index' from the 'map' function. We'll then use the 'index' to modify the appropriate 'ToDo'.
           <ToDo key={ index } description={ todo.description } isCompleted={ todo.isCompleted } toggleComplete={ () => this.toggleComplete(index)} isDeleted = {todo.isDeleted}  deleteTodo={ () => this.deleteTodo(index)} />
            )}
          </ul>
          {/*
          //make the app to respond to form submissions.
          */}
          <form onSubmit={ (e) => this.handleSubmit(e) }>

          {/*
            // 1st pass - The value of the input is bound to this.state.newTodoDescription, so to change the value in the UI, we need to change the value in state.
            // <input type="text" value={ this.state.newTodoDescription } />          // set the value of the text into to this.state.newTodoDescription.

            // 2nd pass - The value of the input is bound to this.state.newTodoDescription, so to change the value in the UI, we need to change the value in state.
            // To do that, add an onChange event listener to the text input. The value of onChange should be an arrow function that accepts e as a parameter and then calls this.handleChange, passing it the e parameter.
          */}
          <input type="text" value={ this.state.newTodoDescription } onChange={ (e) => this.handleChange(e) } />
          <input type="submit" />
         </form>
        </div>
      );
    }
  }

  export default App;
