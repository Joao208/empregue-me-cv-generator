import React from 'react';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import FormInputText from '../../FormInputText/FormInputText';
import RemoveOption from '../../RemoveOption/RemoveOption';

export default function Formacao({ data, index, deleted, changed }) {

    const style = {
        paddingLeft: '10px',
        paddingRight: '10px',
        backgroundColor: 'rgba(0,0,0,.03)',
        marginBottom: '10px'
    };

    const { curso, instituicao, anoConclusao } = data;

    return (<>
        <Card style={style}>
            <RemoveOption index={index} deleted={deleted} />
            <Form.Row>
                <Col>
                    <FormInputText index={index} placeholder='ex: Superior completo, Graduação em hotelaria' name='curso' type='text' value={curso} changed={changed}>
                        Curso
                    </FormInputText>
                </Col>
            </Form.Row>
            <Form.Row>
                <Col>
                    <FormInputText index={index} placeholder='ex: Colégio Laços, Faculdade Santa Maria' name='instituicao' type='text' value={instituicao} changed={changed}>
                        Instituição
                    </FormInputText>
                </Col>
                <Col className='col-3'>
                    <FormInputText index={index} placeholder='ex: 2012' name='anoConclusao' type='number' value={anoConclusao} changed={changed}>
                        Conclusão (ou previsão)
                        </FormInputText>
                </Col>
            </Form.Row>
        </Card>
    </>);
}