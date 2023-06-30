import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Card extends Component {
  render() {
    const {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
    } = this.props;

    return (
      <div className="columns is-mobile">
        <div className="card has-background-warning column is-half is-offset-one-quarter">
          <div className="card-image">
            <img src={ cardImage } alt={ cardName } data-testid="image-card" />
          </div>
          <div className="card-content">
            <div className="media-content">
              <p className="title is-4" data-testid="name-card">{ cardName }</p>
              <p
                className="subtitle is-6"
                data-testid="description-card"
              >
                { cardDescription }
              </p>
              <p className="subtitle is-6" data-testid="attr1-card">{ cardAttr1 }</p>
              <p className="subtitle is-6" data-testid="attr2-card">{ cardAttr2 }</p>
              <p className="subtitle is-6" data-testid="attr3-card">{ cardAttr3 }</p>
              <p className="subtitle is-6" data-testid="rare-card">{ cardRare }</p>
              { cardTrunfo
              && <p className="title is-5" data-testid="trunfo-card">Super Trunfo</p> }
              {/* renderização condicional */}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Card.propTypes = {
  cardName: PropTypes.string,
  cardDescription: PropTypes.string,
  cardAttr1: PropTypes.string,
  cardAttr2: PropTypes.string,
  cardAttr3: PropTypes.string,
  cardImage: PropTypes.string,
  cardRare: PropTypes.string,
  cardTrunfo: PropTypes.bool,
}.isRequired;

export default Card;
