import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Card from './Card';

export default class CardList extends Component {
  render() {
    const { cardList, deleteCard } = this.props;

    /* aqui o .map() é usado para passar pelo array, ele cria um novo array, que exibe na página as cartas salvas na variável cardList */
    /* const id = `${Math.random()}${cardName}`; */

    return (
      <section>
        <h2>Seu baralho</h2>
        {
          cardList.map((card) => (
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
          ))
        }
      </section>
    );
  }
}

CardList.propTypes = {
  cardList: PropTypes.array,
  deleteCard: PropTypes.func,
}.isRequired;
