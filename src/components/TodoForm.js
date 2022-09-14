import { useTodoContext } from "../providers/TodoProvider";

const TodoForm = () =>{
    const {todoList} = useTodoContext();

    return (
        <form>
            <h3>{todoList.length}</h3>
            <input type="text"/>
            <button type="submit">Submit</button>
        </form>
    );
};

export default TodoForm;