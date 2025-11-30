import { useState } from 'react';

const FunctionList = ({ functions, title }) => {
    const [openFunctionId, setOpenFunctionId] = useState(null);

    const toggleDetails = (id) => {
        setOpenFunctionId(openFunctionId === id ? null : id);
    };

    return (
        <div className="function-list">
            <h2>{title}</h2>
            {functions.map(func => (
                <div 
                    className="function-preview" 
                    key={func.id} 
                    onClick={() => toggleDetails(func.id)} 
                >
                    <div className="function-header">
                        <h2>{func.title}</h2>
                    </div>
                    
                    <p className="description">{func.description}</p>

                    {openFunctionId === func.id && (
                        <div className="function-details">
                            <p>{func.body}</p>
                        </div>
                    )}
                </div>
            ))}
        </div>
    );
}

export default FunctionList;
