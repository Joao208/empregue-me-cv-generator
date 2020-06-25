import React from "react";
import { Page, Text, View, Document, StyleSheet } from "@react-pdf/renderer";

const styles = StyleSheet.create({
  page: {
    backgroundColor: "#ffffff"
  },

  nome: {
    fontSize: 20,
    marginBottom: '10px'
  },

  item: {
    fontWeight: 'bold',
    fontSize: 16
  },

  nextItem: {
    marginBottom: '10px'
  },

  section: {
    margin: 10,
    padding: 10,
    flexGrow: 1,
    fontSize: 12,
  },

  header: {
    borderTop: '1px solid #ccc',
    borderBottom: '1px solid #ccc',
    backgroundColor: '#ddd',
    marginTop: '20px',
    marginBottom: '5px',
    fontWeight: 'bold',
    fontSize: 14
  }
});

export default function PdfDocument(props) {
  const { nome, contato, email, nacionalidade, estadoCivil, idade,
    endereco, cidade, estado, objetivo, formacao, experiencia, qualificacao } = props.data;


  return (<>
    <Document>
      <Page size='A4' style={styles.page}>
        <View style={styles.section}>
          <Text style={styles.nome}>{nome}</Text>
          <Text>{nacionalidade}, {estadoCivil}, {idade} anos</Text>
          <Text>{endereco} - {cidade}/{estado}</Text>
          <Text>Contato: {contato}</Text>
          <Text>E-mail: {email}</Text>
          {(objetivo.length > 0) ? <Text style={styles.header}>Objetivo</Text> : null}
          <Text>{objetivo}</Text>
          {(formacao.filter(linha => linha.curso !== '').length > 0) ? <Text style={styles.header}>Formação Acadêmica</Text> : null}
          {
            formacao.map((linhaFormacao, index) => {
              return (linhaFormacao.curso !== '') ? (<View key={index}>
                <Text style={styles.item}>{linhaFormacao.curso}</Text>
                <Text style={styles.nextItem}>{linhaFormacao.instituicao} / {linhaFormacao.anoConclusao}</Text>
              </View>
              ) : null;
            })
          }
          {(experiencia.filter(linha => linha.cargo !== '').length > 0) ? <Text style={styles.header}>Experiência Profissional</Text> : null}
          {
            experiencia.map((linhaExperiencia, index) => {

              return (linhaExperiencia.cargo !== '') ? (<View key={index}>
                <Text style={styles.item}>{linhaExperiencia.cargo}</Text>
                <Text>{linhaExperiencia.empresa} [{linhaExperiencia.anoEntrada} - {linhaExperiencia.anoSaida}]</Text>
                <Text style={styles.nextItem}>Principais Atividades: {linhaExperiencia.atividades}</Text>
              </View>
              ) : null;
            })
          }
          {(qualificacao.filter(linha => linha.qualificacao !== '').length > 0) ? <Text style={styles.header}>Qualificações e Atividades Complementares</Text> : null}
          {
            qualificacao.map((linhaQualificacao, index) => {
              return (linhaQualificacao.qualificacao !== '') ? (<View key={index}>
                <Text>{linhaQualificacao.qualificacao}</Text>
              </View>
              ) : null;
            })
          }
        </View>
      </Page>
    </Document>
  </>);
}