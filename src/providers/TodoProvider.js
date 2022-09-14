import { createContext, useContext, useState } from 'react';


const TodoContext = createContext();
const initialTodoState = ["Context API"];

const TodoProvider = ({children}) => {
    const [todoList, setTodoList] = useState(initialTodoState);

    const getNumberOfTodos = () => todoList.length
    const addTodo = (newTodo) => {
        setTodoList([...todoList, newTodo]);
    };

    const removeTodo = (todoIndex) => {
        const newList = todoList.filter((_, index) => index !== todoIndex);
        setTodoList(newList);
    }

    const contextValue = {
        todoList,
        getNumberOfTodos,
        addTodo,
        removeTodo,
    };
    return (
        <TodoContext.Provider value={contextValue}>{children}</TodoContext.Provider>
    );
};

export const useTodoContext = () => useContext(TodoContext);
export default TodoProvider;