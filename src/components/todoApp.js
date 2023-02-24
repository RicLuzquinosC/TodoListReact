import { useState, useRef } from 'react';
import Todo from "./todo";
import "./todoApp.css"

export default function TodoApp() {
    //use state devuelve dos arreglos, hay que desestructurarlo.
    //los elementos serán como un getter y un setter
    //useState permite un valor inicial

    const [title, setTitle] = useState("");
    const [todos, setTodos] = useState([])

    function handleChange(e) {
        const value = e.target.value;
        setTitle(value);
    }

    function handleSubmit(e) {
        e.preventDefault();
        if (title == "") {
            alert("Por favor, ¿Dime qué tarea quieres agregar?")
        } else {
            const newTodo = {
                id: crypto.randomUUID(),
                title: title,
                completed: false
            };
            setTodos([...todos, newTodo]);
            setTitle("");

        }

    }

    function handleUpdate(id, value) {
        const temp = [...todos];
        const item = temp.find(item => item.id === id);
        item.title = value;
        setTodos(temp);
    }

    function handleDelete(id) {
        const temp = todos.filter(item => item.id !== id);
        setTodos(temp);

    }

    return <div className="todoContainer">
        <h1>Lista de tareas pendientes - RicLuzquinosC</h1>
        <form className="todoCreateForm" onSubmit={handleSubmit}>
            <input onChange={handleChange} className="todoInput" value={title} placeholder="Digita tu tarea"  />
            <input onClick={handleSubmit} type="submit" value="Agregar" className="buttonCreate" />
        </form>
        <div className='todosContainer'>
            {todos.map((item) => (
                <Todo
                    key={item.id}
                    i={item}
                    onUpdate={handleUpdate}
                    onDelete={handleDelete} />
            ))}
        </div>
    </div>

}