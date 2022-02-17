import { useState } from 'react'

const AddTodo = ({ onAdd }) => {
    const [text, setText] = useState('')

    const onsubmit = (e) => {
        e.preventDefault()

        if(!text){
            return alert("Text input empty")
        }
        onAdd({ text, isCompleted: false })
        setText('')
    }

    return (
        <form>
            <input type="text" value={text} onChange={(e) => setText(e.target.value)}/>
            <button onClick={onsubmit}>Add Todo</button>
        </form>
    )
}

export default AddTodo
