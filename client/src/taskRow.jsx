import React, {useState} from 'react';

function TaskRow({taskitem, deleteTask}) {
    const [crossout, setCrossout] = useState(false);

    return (
        <div style={{marginLeft: '70px', marginRight: '10px', marginBotton: '10px'}}>
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