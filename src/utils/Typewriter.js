import React, { useEffect, useState } from 'react';

function Typewriter (props) {
    const [typewriterLength, setTypewriterLength] = useState(1);
    
    function updateText() {
        setTypewriterLength(prevState => {
            if (prevState >= props.children.length) {
                return 1;
            } else {
                return prevState + 1;
            }    
        });
    }

    useEffect(() => {
        setInterval(updateText, props.refreshTime);
    }, []);

    return (<div>
        {props.children.substring(0, typewriterLength)}
    </div>);
}

export default Typewriter;
