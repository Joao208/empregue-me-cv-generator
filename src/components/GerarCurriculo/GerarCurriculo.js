import React from 'react';
import Container from 'react-bootstrap/Container';
import { PDFDownloadLink } from "@react-pdf/renderer";
import PdfDocument from '../PdfDocument/PdfDocument';

function GerarCurriculo(props) {

    const style = { marginBottom: '1%' };
    const styleButton = {
        color: '#fff',
        backgroundColor: '#28a745',
        borderColor: '#28a745',
        display: 'block',
        width: '100%',
        cursor: 'pointer',
        textAlign: 'center',
        verticalAlign: 'center',
        border: '1px solid transparent',
        padding: '.375rem .75rem',
        fontSize: '1rem',
        lineHeight: '1.5',
        borderRadius: '.25rem',
        textDecoration: "none"
    };

    return (<>
        <Container style={style}>
            <PDFDownloadLink
                document={<PdfDocument data={props.data} />}
                fileName="curriculo.pdf"
                style={styleButton}
                onClick={props.clicked}
            >Download PDF</PDFDownloadLink>
        </Container>
    </>);
}

export default React.memo(GerarCurriculo);