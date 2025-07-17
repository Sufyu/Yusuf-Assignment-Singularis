import React, { useState, useEffect } from 'react';
import TaskRow from './taskRow.jsx';

function App() {
    const [tasks, setTasks] = useState([]);
    const [newTask, setNewTask] = useState('');

    const addTask = async () => {
        if (!newTask.trim()){
            return;
        }
        try {
            const resp = await fetch('http://localhost:3000/api/tasks', {
                headers: {
                    'Content-Type': 'application/json',
                },
                method: 'POST',
                body: JSON.stringify({task: newTask}),
            })
            if (resp.ok) {
                setNewTask('');
                getTasks();
            } else {
                console.error('Failed to add task');
            }
        }
        catch (error) {
            console.error('Error adding task:', error);
        }
    };

    const getTasks = async () => {
        console.log('Fetching tasks...');
        try {
            const resp = await fetch('http://localhost:3000/api/tasks')
            setTasks(await resp.json());
        }
        catch (error) {
            console.error('Error fetching tasks:', error);
        }
    };

    const deleteTask = async (id) => {
        if (id < 0) {
            return;
        }
        try {
            const resp = await fetch(`http://localhost:3000/api/tasks/${id}`, {
                method: 'DELETE'
            });
            if (resp.ok) {
                await getTasks();
            } else {
                console.error('Failed to delete task');
            }
        }
        catch (error) {
            console.error('error: ', error);
        }
    };

    const tasksList = Object.entries(tasks).map(([id, task]) =>
        <TaskRow key={id} taskitem={task} deleteTask={deleteTask} />
    );

    useEffect(() => {
        getTasks();
    }, []);

    return (
        <div>
            <h1>Add a Task</h1>
            <input
                type="text"
                value={newTask}
                onChange={(e) => setNewTask(e.target.value)}
            />
            <button onClick={addTask}>Add Task</button>
            <h1>Task List</h1>
            <div>
                {tasksList}
            </div>
        </div>
    )

}

export default App;