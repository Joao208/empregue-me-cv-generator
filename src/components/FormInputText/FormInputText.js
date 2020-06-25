import React from 'react';
import Form from 'react-bootstrap/Form';
import InputMask from 'react-input-mask';

export default function FormInputText(props) {
    const classes = ['form-control'];

    const typeAtual = (!props.atual) ? props.type : 'text';
    const statusAtual = (!props.atual) ? null : 'disabled';

    return (<>
        <Form.Group>
            {(props.children !== null) ? <Form.Label>{props.children}</Form.Label> : null}
            <InputMask className={classes} mask={props.mask} name={props.name} type={typeAtual}
                value={props.value} onChange={props.changed} placeholder={props.placeholder} data-index={props.index}
                disabled={statusAtual}>
            </InputMask>
        </Form.Group>
    </>);
}