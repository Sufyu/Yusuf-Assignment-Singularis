import React, { useState, useEffect } from 'react';
import './taskRow.jsx';

function App() {
    const [tasks, setTasks] = useState({});

    const getTasks = async () => {
        try {
            const resp = await fetch('http://localhost:3000/api/tasks')
            setTasks(await resp.json());
        }
        catch (error) {
            console.error('Error fetching tasks:', error);
        }
    };

    const tasksList = Object.entries(tasks).map(([id, task]) =>
        <TaskRow key={id} task={task} />
    );

    useEffect(() => {
        getTasks();
    }, []);

    return (
        <div>
            <h1>Task List</h1>
            <div>
                {tasksList}
            </div>
        </div>
    )

}

export default App;