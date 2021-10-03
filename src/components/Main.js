import React from 'react';
import '../styles/Main.css';

const Main = ({children, center}) => {

    let classes = `Main ${center?'Main--center':''}`

    return (
        <main className={classes}>
            {children}
        </main>
    );
};

export default Main;