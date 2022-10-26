import React from 'react'
import { Todo } from './Model';
import { SingleTodo } from './SingleTodo';
import './styles.css'

interface Props {
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>
  completedTodos: Todo[];
  setCompletedTodos: React.Dispatch<React.SetStateAction<Todo[]>>

}


export const TodoList: React.FC<Props> = ({ todos, setTodos, completedTodos, setCompletedTodos }) => {
  return (
    <div className="container">
      <div className="todos">
        <span className="todos-heading">Active Tasks</span>
        {todos.map(todo => (
          <SingleTodo todo={todo} key={todo.id} setTodos={setTodos} todos={todos}/>
        ))}
      </div>
      <div className="todos remove">
      <span className="todos-heading">Completed Tasks</span>
        {todos.map(todo => (
          <SingleTodo todo={todo} key={todo.id} setTodos={setTodos} todos={todos}/>
        ))}

      </div>
    </div>
    // <div className='todos'>
    //   {
    //     todos.map(todo => (
    //       <SingleTodo todo={todo} key={todo.id} todos={todos} setTodos={setTodos} />
    //     ))
    //   }
    // </div>
  )
}
