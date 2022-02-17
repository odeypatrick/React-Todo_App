import TodoItem from "./TodoItem";

const Todos = ({ todos, onToggle, onDelete }) => {
    return (
        <div className="todos">
            {todos.map(todo => (
                <div key={todo.id}>
                    <TodoItem  todo={todo} onToggle={onToggle} onDelete={onDelete}/>
                </div>
            ))}
        </div>
    )
}

export default Todos;
