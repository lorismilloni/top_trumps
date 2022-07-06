import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Card from './Card';

// Requisito 10, 11 e 12 feitos seguindo o PR do Leonardo Vogel, com o objetivo de treinar a implementação da função e quem sabe deixar o joguinho funcional depois. Obrigada Leo.
// Obrigada Eduardo Bazler por me ajudar a resolver o conflito no requisito, para passar no teste e não imprimir mais duas listas no meu Tryunfo, precisei remover do App o CardList, que continua comitado para consulta, a exibição anterior da lista que eu tinha criado para passar no requisito 8.
// Agora só a lista com os filtros é exibida na minha página do Tryunfo.

export default class FilterList extends Component {
  render() {
    const {
      cardList,
      deleteCard,
      filterName,
      filterRare,
      filterTrunfo,
    } = this.props;

    let filterCards = [...cardList];
    // aqui o filtro atualiza o array de cards de acordo com o que foi aplicado, um valor inicial recebe a lista de cartas, para que caso não seja aplicado nenhum filtro, ele exiba todos as cartas;

    // caso exista alguma coisa no input de filtro por nome, ele executa um filter atualizando o próprio filterCards, adicionando ao novo array apenas aqueles cards que tenham no nome o que foi passado no input;

    if (filterName) {
      // se a string não for vazia, considera como true;
      filterCards = filterCards.filter(({ cardName }) => cardName.includes(filterName));
    }
    if (filterRare !== 'todas') {
      filterCards = filterCards.filter(({ cardRare }) => (cardRare === filterRare));
      // se o filtro por raridade for diferente de todas as cartas, ele atualiza o filterCards, colocando no novo array apenas os cards que possuem a raridade informada, como essa condição aparece depois da filtragem por nome, caso já esteja sendo filtrado algo pelo nome, ele usa como array inicial o que já está filtrado, tornando assim os dois acumulativos.
    }
    if (filterTrunfo) {
      filterCards = cardList.filter(({ cardTrunfo }) => cardTrunfo);
      // caso o checkbox de filtro por Super Trunfo seja marcado, ele atualiza o filterCards, usando como array base o array cardList original, por esse motivo, por isso é a última condição, não sendo cumulativa;
    }
    // depois de realizar os filtros, o .map será executado para renderizar com o componente Card, os que precisam a lista que precisa ser renderizada;

    return (
      <section>
        { filterCards.map((card) => (
          <div key={ card.cardName }>
            <Card
              { ...card }
            />
            <button
              type="button"
              data-testid="delete-button"
              onClick={ () => deleteCard(card, card.cardTrunfo) }
            >
              Excluir
            </button>
          </div>
        ))}
      </section>);
  }
}

FilterList.propTypes = {
  cardList: PropTypes.array,
  deteleCard: PropTypes.func,
  filterName: PropTypes.string,
  filterRare: PropTypes.string,
  filterTrunfo: PropTypes.string,
}.isRequired;
