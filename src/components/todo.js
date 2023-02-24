import { useState } from "react";

export default function Todo({ i, onUpdate, onDelete }) {
    const [isEdit, setIsEdit] = useState(false);
    
    function FormEdit() {
        const [newValue, setNewValue] = useState(i.title);

        function handleSubmit(e){
            e.preventDefault();

        }
        function handleChange(e){
            const value = e.target.value;
            setNewValue(value);
        }

        function handleClickUpdateTodo(e){
            onUpdate(i.id, newValue);
            setIsEdit(false);
        }

        return <form className="todoUpdateForm" onSubmit={handleSubmit}>
            <input type="text" className="todoInput" onChange={handleChange} value={newValue}/>
            <button className="button" onClick={handleClickUpdateTodo}>Actualizame</button>
        </form>
    }

    function TodoElement() {
        return <div className="todoInfo">
            <span className="todoTitle">{i.title}</span>
            <button className="button" onClick={() => setIsEdit(true)}>Editar</button>
            <button className="buttonDelete" onClick={(e)=> onDelete(i.id)}>Eliminar</button>
        </div>
    }

    return (
        <div className="todo">
            {isEdit ? <FormEdit/> : <TodoElement/> }
        </div>



    )

}
