import React from 'react';
import styles from './Input_line.module.sass'

const InputLine = ({placeholder}) => {
    return (
        <div className={styles.box}>
            <input placeholder={placeholder}/>
        </div>
    );
};

export default InputLine
