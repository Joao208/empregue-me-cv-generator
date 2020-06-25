import React from 'react';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import Formacao from './Formacao/Formacao';

export default function FormacaoAcademica(props) {

    const style = { marginBottom: '1%' };

    return (<>
        <Container style={style}>
            <Card>
                <Card.Header>{props.children}</Card.Header>
                <Card.Body>
                    {props.data.map((formacao, index) => {
                        return (
                            <Formacao key={index} data={formacao} index={index} changed={props.changed} deleted={props.deleted} />
                        )
                    })}
                </Card.Body>
            </Card>
        </Container>
    </>);
}