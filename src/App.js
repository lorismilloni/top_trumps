import React from 'react';
import Form from './components/Form';
import Card from './components/Card';
import Filter from './components/Filter';
import FilterList from './components/FilterList';

class App extends React.Component {
  constructor() {
    super();
    this.handleChange = this.handleChange.bind(this);
    this.state = {
      cardName: '',
      cardDescription: '',
      cardAttr1: '0',
      cardAttr2: '0',
      cardAttr3: '0',
      cardImage: '',
      cardRare: 'normal',
      cardTrunfo: false,
      isSaveButtonDisabled: true,
      cardList: [],
      // inicia no estado a lista de cartas para usarmos nas funções de salvar a carta
      onSaveButtonClick: this.saveCard,
      hasTrunfo: false,
      filterName: '',
      filterRare: 'todas',
      filterTrunfo: false,
    };
    /* this.setState((estadoAnterior, props) => novoEstado) */
  }

  handleChange({ target }) {
    /* console.log(target); */
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    /* console.log({ [name]: value }); */
    this.setState(() => ({
      [name]: value,
    }), this.handleSaveButton);
    // após atualizar o state, a função é chamada, para verificar se o botão salvar deve ficar ou não ativo;
  }

  handleSaveButton = () => {
    let isValid = true;
    const MAX_SUM = 210;
    const MAX_VALUE = 90;
    const MIN_VALUE = 0;

    const {
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardName,
      cardDescription,
      cardImage,
    } = this.state;

    const cardInputs = !(cardName === '' || cardDescription === '' || cardImage === '');
    const cardMax = (((+cardAttr1) + (+cardAttr2) + (+cardAttr3)) <= MAX_SUM);
    const minOrMax1 = ((+cardAttr1 >= MIN_VALUE) && (+cardAttr1 <= MAX_VALUE));
    const minOrMax2 = ((+cardAttr2 >= MIN_VALUE) && (+cardAttr2 <= MAX_VALUE));
    const minOrMax3 = ((+cardAttr3 >= MIN_VALUE) && (+cardAttr3 <= MAX_VALUE));

    isValid = cardInputs && cardMax && minOrMax1 && minOrMax2 && minOrMax3;

    this.setState({ isSaveButtonDisabled: !isValid });
  }

  saveCard = () => {
    const savedCard = { ...this.state };
    // cria a cópia do estado e salva num array
    if (savedCard.cardTrunfo === true) {
      // verifica se a carta é Super Trunfo
      this.setState({
        hasTrunfo: true,
        // se for, o state 'hasTrunfo' passa a ser true
      });
    }
    this.setState((prevState) => ({
      cardName: '',
      cardDescription: '',
      cardAttr1: '0',
      cardAttr2: '0',
      cardAttr3: '0',
      cardImage: '',
      cardRare: 'normal',
      cardTrunfo: false,
      isSaveButtonDisabled: true,
      cardList: [...prevState.cardList, savedCard],
      // recupera a lista anterior com o '...prevState.cardList' e adiciona a carta que foi criada
      onSaveButtonClick: this.saveCard,
      filterName: '',
      filterRare: 'todas',
      filterTrunfo: false,
    }));
  }
  // saveCard adicionados como o requisito do Yuri Carvalho

  deleteCard = (card, cardTrunfo) => {
    const { cardList } = this.state;
    const newList = cardList.filter((cardSelected) => cardSelected !== card);
    if (cardTrunfo) {
      this.setState({
        hasTrunfo: false,
        cardList: newList,
      });
    } else {
      this.setState({
        cardList: newList,
      });
    }
  }
  // função feita com base no PR da Kerli Schroeder

  render() {
    /* console.log('renderizou'); */
    return (
      <main>
        <Form
          { ...this.state }
          onInputChange={ this.handleChange }
        />
        <Card { ...this.state } />
        <Filter onInputChange={ this.handleChange } />
        <FilterList { ...this.state } deleteCard={ this.deleteCard } />
      </main>
    );
  }
}

export default App;
