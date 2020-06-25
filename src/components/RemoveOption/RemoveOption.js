import React from 'react';

const styleText = {
    fontSize: '14px',
    textAlign: 'right',
    cursor: 'pointer',
    fontWeight: 'bold',
    textDecorationLine: 'underline',
    color: 'red',
    paddingTop: '5px',
    zIndex: '99',
    width: '40px',
    marginBottom: '-15px'
}

const classes = ['d-flex flex-row-reverse clickable'];

export default function RemoveOption({ deleted, index }) {
    return (
        <div className={classes} >
            <span style={styleText} onClick={() => deleted(index)}>
                <i class="fa fa-trash" aria-hidden="true"/>
            </span>
        </div>
    );
}