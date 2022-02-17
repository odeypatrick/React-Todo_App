const TodoItem = ({todo, onToggle, onDelete}) => {
    return (
        <div className="todo-item">
            <div className="is-completed">
                <input type="checkbox" onChange={() => onToggle(todo.id)}/>
                <span 
                    className={`todo-text ${todo.isCompleted ? 'cancel' : ''}`}
                    >{todo.text}</span>
            </div>
            <span className="del-btn" onClick={() => onDelete(todo.id)}>
                &times;
            </span>
        </div>
    )
}

export default TodoItem
