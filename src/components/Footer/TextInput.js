import React, { useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import './TextInput.scss';

const TextInput = ({ placeholder, onChange }) => {
    const inputRef = useRef(null);
    const [isPlaceholder, setIsPlaceholder] = useState(true);

    const changeDetect = () => {
        const text = inputRef?.current?.textContent;
        if(!!text) {
            setIsPlaceholder(false);
        }
        else {
            setIsPlaceholder(true);    
        }
        onChange(text);
    }

    useEffect(() => {
        inputRef?.current?.focus();
    }, [])

    return (
        <div className="container">
            <div className="input-container">
                <div className="placeholder" style={{ visibility: isPlaceholder ? 'visible' : 'hidden' }}>{placeholder}</div>
                <div className="text-input" onInput={changeDetect} ref={inputRef} contentEditable="true"></div>
            </div>

        </div>
    );
};

TextInput.prototype = {
    placeholder: PropTypes.string.isRequired,
    onChange: PropTypes.func
}

export default TextInput;