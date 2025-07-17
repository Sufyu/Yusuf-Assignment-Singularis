import React, {useState} from 'react';

function TaskRow({task}) {
    const [crossout, setCrossout] = useState(false);

    return (
        <div>
            {crossout ? <s>{task}</s> : task}
            <input
                type="checkbox"
                checked={crossout}
                onChange={() => setCrossout(!crossout)}
            />
        </div>
    )
};

export default TaskRow;