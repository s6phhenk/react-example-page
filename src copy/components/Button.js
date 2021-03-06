import React from 'react';
import './Button.css';
import {Link} from 'react-router-dom';

const STYLES = [ 'btn--primary', 'btn--outline']
const sizes = ['btn--medium', 'btn-large']

export const Button = ({children, type, onClick, buttonStyle}) => {
    const checkButtonStyle = STYLES.includes(buttonStyle) ? buttonStyle : STYLES[0]

    return (
        <Link to='/sign-up' className='btn-mobile'>
            <button>
            className={`btn ${checkButtonStyle} ${checkButtonSize}`}
                {children}
            </button>
        
        </Link> 
    )
}
