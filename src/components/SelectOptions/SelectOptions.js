import React from 'react';
import Form from 'react-bootstrap/Form';

export default function SelectOption(props) {
    return (<>
        <Form.Group>
            {(props.children !== null) ? <Form.Label>{props.children}</Form.Label> : null}
            <Form.Control as='select' data-index={props.index} name={props.name} type={props.type}
                value={props.value} onChange={props.changed} placeholder={props.placeholder} required>
                <option disabled></option>
                {props.lista.map((item, index) => {
                    return (<option key={index}>{item}</option>)

                })}
            </Form.Control>
        </Form.Group>
    </>);
}