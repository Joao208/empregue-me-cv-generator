import React from 'react';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import Qualificacao from './Qualificacao/Qualificacao'

export default function Qualificacoes(props) {

    const style = { marginBottom: '1%' };

    return (<>
        <Container style={style}>
            <Card>
                <Card.Header>{props.children}</Card.Header>
                <Card.Body>
                    {props.data.map((qualificacao, index) => {
                        return (
                            <Qualificacao data={qualificacao} key={index} index={index} changed={props.changed} deleted={props.deleted}/>
                        )
                    })}
                </Card.Body>
            </Card>
        </Container>
    </>);
}