import React from 'react';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';

export default function Objectives(props) {

    const style = { marginBottom: '1%' };

    return (<>
        <Container style={style}>
            <Card>
                <Card.Header>{props.children}</Card.Header>
                <Card.Body>
                    <Form.Control
                    style={{ marginBottom: '10px' }}
                    as="textarea"
                    placeholder='ex: Assistente fiscal, Garçom, Engenheiro agrícola, Enfermeira'
                    name='objetivo'
                    type='textarea'
                    value={props.data.objetivo}
                    data-index={props.index}
                    onChange={props.changed}>
                        Objetivo
                </Form.Control>
                </Card.Body>
            </Card>
        </Container>
    </>);
}