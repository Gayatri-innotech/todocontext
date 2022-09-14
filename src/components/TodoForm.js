import { useState } from "react";
import { useTodoContext } from "../providers/TodoProvider";
import './style.css'

const TodoForm = () =>{
    const {getNumberOfTodos, addTodo} = useTodoContext();
    const [todoItem, setTodoItem] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        
        if (!todoItem) {
            return;
        }

        addTodo(todoItem);

        setTodoItem("");
    }
    return (
        <form onSubmit={handleSubmit}>
            <h3>Number of items: {getNumberOfTodos()}</h3>
            <input className="bar" value={todoItem} onChange={(e)=> setTodoItem(e.target.value)} type="text"/>
            <button className="btn" type="submit">Submit</button>
        </form>
    );
};

export default TodoForm;