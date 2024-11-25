import React, { useState } from 'react';

const TO_DO_2 = () => {
    const [tasks, setTasks] = useState([]);
    const [input, setInput] = useState('');
    const [editId, setEditId] = useState(null);

    const addTask = () => {
        if (input.trim() !== "") {
            let newTask = { id: Date.now(), text: input, taskCompleted: false };
            setTasks([...tasks, newTask]);
            setInput('');
            console.log(tasks);
            
        }
    };

    const toggleTask = (id) => {
        const updatedTasks = tasks.map((task) =>
            task.id === id ? { ...task, taskCompleted: !task.taskCompleted } : task
        );
        setTasks(updatedTasks);
    };

    const handleEdit = (id, text) => {
        setEditId(id);
        setInput(text);
    };

    const handleUpdateTask = () => {
        const updatedTasks = tasks.map((task) =>
            task.id === editId ? { ...task, text: input } : task
        );
        setTasks(updatedTasks);
        setInput('');
        setEditId(null);
    };

    const handleRemove = (id) => {
        const updatedTasks = tasks.filter((task) => task.id !== id);
        setTasks(updatedTasks);
    };

    return (
        <>
            <div>
                <h1>TO_DO</h1>
                <input
                    type="text"
                    placeholder="Write here!!"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                />
                <button style={{cursor:'pointer'}} onClick={editId ? handleUpdateTask : addTask}>
                    {editId ? "Update" : "Add"}
                </button>
            </div>
            <div>
                <ol>
                    {tasks.map((task) => (
                        <li key={task.id}>
                            <input
                                type="checkbox"
                                checked={task.taskCompleted}
                                onChange={() => toggleTask(task.id)}
                            />
                            <span
                                style={{ textDecoration: task.taskCompleted ? 'line-through' : 'none',cursor:'pointer' }}
                                onDoubleClick={() => handleEdit(task.id, task.text)}
                            >
                                {task.text}
                            </span>
                            <button style={{cursor:'pointer'}} onClick={() => handleRemove(task.id)}>Remove</button>
                        </li>
                    ))}
                </ol>
            </div>
        </>
    );
};

export default TO_DO_2;
