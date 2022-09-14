import { createContext, useContext, useState } from 'react';


const TodoContext = createContext();

const TodoProvider = ({children}) => {
    const [todoList, setTodoList] = useState();

    const contextValue = {
        todoList,
    };
    return (<TodoContext.Provider value={contextValue}>{children}</TodoContext.Provider>
    );
};

export const useTodoContext = () => useContext(TodoContext);
export default TodoProvider;