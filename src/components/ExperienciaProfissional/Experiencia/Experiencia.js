import React from 'react';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';
import FormInputText from '../../FormInputText/FormInputText';
import Col from 'react-bootstrap/Col';
import RemoveOption from '../../RemoveOption/RemoveOption';

const style = {
    paddingLeft: '10px',
    paddingRight: '10px',
    backgroundColor: 'rgba(0,0,0,.03)',
    marginBottom: '10px'
};

export default function Experiencia({ data, index, changed, deleted }) {

    const { empresa, cargo, anoEntrada, anoSaida, empregoAtual, atividades } = data;

    return (<>
        <Card style={style}>
            <RemoveOption index={index} deleted={deleted} />
            <FormInputText placeholder='ex: McDonalds, Nestlé, Fazenda do seu João' name='empresa' type='text' value={empresa} index={index} changed={changed}>
                Empresa
            </FormInputText>
            <FormInputText placeholder='ex: Servente, Auxiliar de enfermagem, Diarista' name='cargo' type='text' value={cargo} index={index} changed={changed}>
                Cargo
            </FormInputText>
            <Form.Check style={{ paddingBottom: '10px' }} name='empregoAtual' checked={empregoAtual} onChange={changed} data-index={index} type="checkbox" label="Trabalho atualmente neste cargo" />
            <Form.Row>
                <Col>
                    <FormInputText placeholder='ex: 2012' name='anoEntrada' type='number' value={anoEntrada} index={index} changed={changed}>
                        Ano Início
                </FormInputText>
                </Col>
                <Col>
                    <FormInputText placeholder='ex: 2015' name='anoSaida' type='number' value={anoSaida} index={index} changed={changed} atual={empregoAtual}>
                        Ano Término
                    </FormInputText>
                </Col>
            </Form.Row>
            <Form.Control style={{ marginBottom: '10px' }} as="textarea" placeholder='ex: Atendimento ao público, Análise de documentos fiscais' name='atividades' type='textarea' value={atividades} data-index={index} onChange={changed}>
                Principais Atividades
                </Form.Control>
        </Card>
    </>);
}