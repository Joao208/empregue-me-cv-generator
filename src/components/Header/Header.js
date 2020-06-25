import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';

export default function Header(props) {

    const classes = ['justify-content-between'];
    const style = { marginBottom: '10px' };

    return (<>
        <Navbar bg={props.theme} variant={props.theme} className={classes} style={style}>
            <Container>
                <Navbar.Brand>{props.children}</Navbar.Brand>
            </Container>
        </Navbar>
    </>);
}