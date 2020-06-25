import React, { useState, useEffect } from 'react';
import './App.css';
import Header from '../components/Header/Header';
import PersonalInfos from '../components/PersonalInfos/PersonalInfos';
import Objectives from '../components/Objectives/Objectives';
import FormacaoAcademica from '../components/FormacaoAcademica/FormacaoAcademica';
import ExperienciaProfissional from '../components/ExperienciaProfissional/ExperienciaProfissional';
import Qualificacoes from '../components/Qualificacoes/Qualificacoes';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import GerarCurriculo from '../components/GerarCurriculo/GerarCurriculo';
import GetEstadoCivil from '../utils/EstadoCivil';
import GetEstadoCidade from '../utils/EstadoCidade';

const title = 'Gerador de Curriculo Online';
const theme = 'dark';
const styleAddNewValues = { alignItems: 'center' };
const classAddNewValues = ['d-flex justify-content-between'];
const classButton = ['btn-secondary'];

const listaEstadoCidade = GetEstadoCidade();
const listaEstadoCivil = GetEstadoCivil();
const listaEstados = listaEstadoCidade.estados.map((estado) => { return estado.estado });

function App() {
  const [dadosCurriculo, setDadosCurriculo] = useState({
    nome: '',
    contato: '',
    email: '',
    nacionalidade: 'brasileiro(a)',
    estadoCivil: '',
    idade: '',
    endereco: '',
    cidade: '',
    estado: '',
    objetivo: '',
    formacao: [{ curso: '', instituicao: '', anoConclusao: '' }],
    experiencia: [{ empresa: '', cargo: '', anoEntrada: '', anoSaida: '', atividades: '', empregoAtual: false }],
    qualificacao: [{ qualificacao: '' }]
  });

  const [listasSelecao, setListasSelecao] = useState({
    estadoCivil: listaEstadoCivil,
    estado: listaEstados,
    cidade: []
  });

  useEffect(() => {
    if (dadosCurriculo.estado !== '') {
      const estadoSelecionado = listaEstadoCidade.estados.find((estado) => estado.estado === dadosCurriculo.estado);
      let listaCidades = listaEstadoCidade.cidades.filter((cidade) => cidade.estadoId === estadoSelecionado.id).map((cidade) => cidade.cidade) || [];
      setListasSelecao(prevState => ({ ...prevState, cidade: listaCidades }));
    }
  }, [dadosCurriculo.estado]);

  //Adicionar novas linhas
  const addFormacao = () => {
    let actualFormacao = [...dadosCurriculo.formacao];
    const newLine = { curso: '', instituicao: '', anoConclusao: '' };
    actualFormacao.push(newLine);
    setDadosCurriculo(prevState => ({ ...prevState, formacao: actualFormacao }));
  };

  const addQualificacao = () => {
    let actualQualificacao = [...dadosCurriculo.qualificacao];
    const newLine = { qualificacao: '' };
    actualQualificacao.push(newLine);
    setDadosCurriculo(prevState => ({ ...prevState, qualificacao: actualQualificacao }));
  };

  const addExperiencia = () => {
    let actualExperiencia = [...dadosCurriculo.experiencia];
    const newLine = { empresa: '', cargo: '', anoEntrada: '', anoSaida: '', atividades: '', empregoAtual: false };
    actualExperiencia.push(newLine);
    setDadosCurriculo(prevState => ({ ...prevState, experiencia: actualExperiencia }));
  };

  //Remover linhas existentes
  const deleteFormacao = (selectedIndex) => {
    const actualFormacao = [...dadosCurriculo.formacao];
    const newFormacao = actualFormacao.filter((_, index) => index !== selectedIndex);
    setDadosCurriculo(prevState => ({ ...prevState, formacao: newFormacao }));
  }

  const deleteQualificacao = (selectedIndex) => {
    let actualQualificacao = [...dadosCurriculo.qualificacao];
    const newFormacao = actualQualificacao.filter((_, index) => index !== selectedIndex);
    setDadosCurriculo(prevState => ({ ...prevState, qualificacao: newFormacao }));
  }

  const deleteExperiencia = (selectedIndex) => {
    let actualExperiencia = [...dadosCurriculo.experiencia];
    const newFormacao = actualExperiencia.filter((_, index) => index !== selectedIndex);
    setDadosCurriculo(prevState => ({ ...prevState, experiencia: newFormacao }));
  }

  //Eventos Handler
  const handleChangeExperienciaProfissional = (event) => {
    const { name, type, checked, value } = event.target;
    const index = event.target.dataset.index;
    let newExperienciaProfissional = [...dadosCurriculo.experiencia];
    const newValue = (type === 'checkbox') ? checked : (type === 'number') ? value.slice(0,4) : value;
    newExperienciaProfissional[index] = { ...newExperienciaProfissional[index], [name]: newValue };
    if (type === 'checkbox') {
      const newAnoSaida = (checked) ? 'Até o momento' : '';
      newExperienciaProfissional[index] = { ...newExperienciaProfissional[index], anoSaida: newAnoSaida };
    }
    setDadosCurriculo(prevState => ({ ...prevState, experiencia: newExperienciaProfissional }));
  }

  const handleChangeQualificacoes = (event) => {
    const { name, value, type } = event.target;
    const index = event.target.dataset.index;
    let newQualificacoes = [...dadosCurriculo.qualificacao];
    const newValue = (type === 'number') ? value.slice(0,4) : value;
    newQualificacoes[index] = { ...newQualificacoes[index], [name]: newValue };
    setDadosCurriculo(prevState => ({ ...prevState, qualificacao: newQualificacoes }));
  }

  const handleChangeFormacaoAcademica = (event) => {
    const { name, value, type } = event.target;
    const index = event.target.dataset.index;
    let newFormacaoAcademica = [...dadosCurriculo.formacao];
    const newValue = (type === 'number') ? value.slice(0,4) : value;
    newFormacaoAcademica[index] = { ...newFormacaoAcademica[index], [name]: newValue };
    setDadosCurriculo(prevState => ({ ...prevState, formacao: newFormacaoAcademica }));
  }

  const handleChangeDadosCurriculo = (event) => {
    const { name, value, type } = event.target;
    const newValue = (type === 'number') ? value.slice(0,4) : value;
    setDadosCurriculo(prevState => ({ ...prevState, [name]: newValue }));
  }

  return (
    <div className="App">
      <Header theme={theme}>{title}</Header>
      <Form>
        <PersonalInfos listas={listasSelecao} data={dadosCurriculo} changed={(event) => handleChangeDadosCurriculo(event)}>
          Dados Pessoais
      </PersonalInfos>
        <Objectives data={dadosCurriculo} changed={(event) => handleChangeDadosCurriculo(event)}>
          Objetivo
      </Objectives>
        <FormacaoAcademica data={dadosCurriculo.formacao} changed={(event) => handleChangeFormacaoAcademica(event)} deleted={deleteFormacao}>
          <div className={classAddNewValues} style={styleAddNewValues}>
            Formação Acadêmica
            <Button className={classButton} onClick={addFormacao}>+</Button>
          </div>
        </FormacaoAcademica>
        <ExperienciaProfissional data={dadosCurriculo.experiencia} changed={(event) => handleChangeExperienciaProfissional(event)} deleted={deleteExperiencia}>
          <div className={classAddNewValues} style={styleAddNewValues}>
            Experiência Profissional
            <Button className={classButton} onClick={addExperiencia}>+</Button>
          </div>
        </ExperienciaProfissional>
        <Qualificacoes data={dadosCurriculo.qualificacao} changed={(event) => handleChangeQualificacoes(event)} deleted={deleteQualificacao}>
          <div className={classAddNewValues} style={styleAddNewValues}>
            Qualificações e Atividades Complementares
            <Button className={classButton} onClick={addQualificacao}>+</Button>
          </div>
        </Qualificacoes>
        <GerarCurriculo data={dadosCurriculo} />
      </Form>
    </div >
  );
}

export default App;
