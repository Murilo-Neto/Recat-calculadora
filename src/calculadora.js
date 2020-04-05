import React, { useState } from 'react';
import './calculadora.css';
import { Jumbotron, Container, Row, Col, Button, Form } from 'react-bootstrap';
import CalculadoraService from './calculadora.service';

function Calculadora() {

  const [calcular,concatenaNNumero, SOMA, SUBTRACAO, DIVISAO, MULTIPLICACAO] = CalculadoraService();

  const [txtNumeros, setTxtNumeros] = useState('0');
  const [numero1, setNumero1] = useState('0');
  const [numero2, setNumero2] = useState(null);
  const [operacao, setOperacao] = useState(null);


  function addNum(numero){
    let resultado;
    if (operacao === null) {
       resultado = concatenaNNumero(numero1, numero);
       setNumero1(resultado);
    }else {
      resultado = concatenaNNumero(numero2, numero);
      setNumero2(resultado);
    }
    setTxtNumeros(resultado);
  }

  function defineOperador(op){
    //apenas define a operacao caso ela não exista
    if (operacao === null) {
      setOperacao(op);
      return;
    }
    //caso a operação estiver definida e o numero2 selecionado, realiza o cálculo da operação
    if (numero2 !== null) {
      const resultado = calcular(parseFloat(numero1), parseFloat(numero2), operacao);
      setOperacao(op);
      setNumero1(resultado.toString());
      setNumero2(null);
      setTxtNumeros(resultado.toString());
    }
  }

  function acaoDoIgual(){
    if (numero2 === null) {
      return;
    }
    const resultado = calcular(parseFloat(numero1), parseFloat(numero2), operacao);
    setTxtNumeros(resultado.toString());
  }

  function limpar(){
    setTxtNumeros('0');
    setNumero1('0');
    setNumero2(null);
    setOperacao(null);
  }

  return (
    <Jumbotron style={{
      background:'transparent !important',
      backgroundColor: '#007bff',
      padding: '5px',
      margin: '5px',
      width:'400px'
   }}>
     <Container>
      <Row>
        <Col xs="3">
          <Button variant="danger"
            onClick={limpar}>C</Button>

        </Col>
        <Col xs="9">
          <Form.Control type="text"
            name="txtNumeros"
            className="text-right"
            readOnly="readonly"
            value={txtNumeros} />
        </Col>
      </Row>

      <Row>
        <Col>
          <Button variant="light"
            onClick={() => addNum('7')}>7</Button>
        </Col>
        <Col>
          <Button variant="light"
            onClick={() => addNum('8')}>8</Button>
        </Col>
        <Col>
          <Button variant="light"
            onClick={() => addNum('9')}>9</Button>
        </Col>
        <Col>
          <Button variant="warning"
            onClick={() => defineOperador(DIVISAO)}>/</Button>
        </Col>
      </Row>

      <Row>
        <Col>
          <Button variant="light"
            onClick={() => addNum('4')}>4</Button>
        </Col>
        <Col>
          <Button variant="light"
            onClick={() => addNum('5')}>5</Button>
        </Col>
        <Col>
          <Button variant="light"
            onClick={() => addNum('6')}>6</Button>
        </Col>
        <Col>
          <Button variant="warning"
            onClick={() => defineOperador(MULTIPLICACAO)}>*</Button>
        </Col>
      </Row>

      <Row>
        <Col>
          <Button variant="light"
            onClick={() => addNum('1')}>1</Button>
        </Col>
        <Col>
          <Button variant="light"
            onClick={() => addNum('2')}>2</Button>
        </Col>
        <Col>
          <Button variant="light"
            onClick={() => addNum('3')}>3</Button>
        </Col>
        <Col>
          <Button variant="warning"
            onClick={() => defineOperador(SUBTRACAO)}>-</Button>
        </Col>
      </Row>

      <Row>
        <Col>
          <Button variant="light"
            onClick={() => addNum('0')}>0</Button>
        </Col>
        <Col>
          <Button variant="light"
            onClick={() => addNum('.')}>.</Button>
        </Col>
        <Col>
          <Button variant="success"
            onClick={acaoDoIgual}>=</Button>
        </Col>
        <Col>
          <Button variant="warning"
            onClick={() => defineOperador(SOMA)}>+</Button>
        </Col>
      </Row>
     </Container>
    </Jumbotron>
  );
}

export default Calculadora;
