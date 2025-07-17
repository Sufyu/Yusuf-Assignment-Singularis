import React, {useState} from 'react';

function TaskRow({taskitem, deleteTask}) {
    const [crossout, setCrossout] = useState(false);

    return (
        <div>
            {crossout ? <s>{taskitem.task}</s> : taskitem.task}
            <input
                type="checkbox"
                checked={crossout}
                onChange={() => setCrossout(!crossout)}
            />
            <button onClick={() => deleteTask(taskitem.id)}>Delete</button>
        </div>
    )
};

export default TaskRow;