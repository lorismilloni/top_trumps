import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Form extends Component {
  render() {
    // console.log(this.props);
    const {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
      hasTrunfo,
      isSaveButtonDisabled,
      onInputChange,
      onSaveButtonClick,
    } = this.props;
    /* console.log(this.props); */
    return (
      <form>
        <h1>Super Tryunfo</h1>
        <div className="inputs">
          <legend>Adicionar nova carta</legend>
          <label htmlFor="Name">
            Nome
            <input
              name="cardName"
              type="text"
              value={ cardName }
              id="Name"
              onChange={ onInputChange }
              data-testid="name-input"
            />
            {/* como a prop vai enviar o valor que estiver dentro do input,
            precisa ser colocada entre chaves por ser como o valor de uma variável JS */}
          </label>
          <label htmlFor="Description">
            Descrição
            <textarea
              name="cardDescription"
              value={ cardDescription }
              id="Description"
              cols="30"
              rows="10"
              onChange={ onInputChange }
              data-testid="description-input"
            />
          </label>
          <div>
            <label htmlFor="cardAttr1">
              Attr01
              <input
                type="number"
                name="cardAttr1"
                value={ cardAttr1 }
                onChange={ onInputChange }
                data-testid="attr1-input"
              />
            </label>
            <label htmlFor="cardAttr2">
              Attr02
              <input
                type="number"
                name="cardAttr2"
                value={ cardAttr2 }
                onChange={ onInputChange }
                data-testid="attr2-input"
              />
            </label>
            <label htmlFor="cardAttr3">
              Attr03
              <input
                type="number"
                name="cardAttr3"
                value={ cardAttr3 }
                onChange={ onInputChange }
                data-testid="attr3-input"
              />
            </label>
            Pontos restantes = 000
          </div>
          <label htmlFor="Image">
            Imagem
            <input
              type="text"
              name="cardImage"
              value={ cardImage }
              id="Image"
              onChange={ onInputChange }
              data-testid="image-input"
            />
          </label>
          <label htmlFor="Rare">
            Raridade
            <select
              aria-label="input-carta-rara"
              name="cardRare"
              value={ cardRare }
              id="Rare"
              onChange={ onInputChange }
              data-testid="rare-input"
            >
              <option value="normal">Normal</option>
              <option value="raro">Raro</option>
              <option value="muito raro">Muito raro</option>
            </select>
          </label>
          <label htmlFor="cardTrunfo">
            { hasTrunfo ? <p>Você já tem um Super Trunfo em seu baralho</p> : <input
              type="checkbox"
              name="cardTrunfo"
              title="Super Trybe Trunfo"
              checked={ cardTrunfo }
              onChange={ onInputChange }
              data-testid="trunfo-input"
            /> }
            {/* input feito com base no input do Yuri Carvalho,
            que usa a saveCard e deleteCard para validar o super trunfo */}
            Super Trunfo
          </label>
          {/* {console.log(isSaveButtonDisabled)} */}
          <button
            name="save"
            type="button"
            disabled={ isSaveButtonDisabled }
            onClick={ onSaveButtonClick }
            data-testid="save-button"
          >
            Salvar
          </button>
        </div>
      </form>
    );
  }
}

Form.propTypes = {
  cardName: PropTypes.string,
  cardDescription: PropTypes.string,
  cardAttr1: PropTypes.string,
  cardAttr2: PropTypes.string,
  cardAttr3: PropTypes.string,
  cardImage: PropTypes.string,
  cardRare: PropTypes.string,
  cardTrunfo: PropTypes.bool,
  hasTrunfo: PropTypes.bool,
  isSaveButtonDisabled: PropTypes.bool,
  onInputChange: PropTypes.func,
  onSaveButtonClick: PropTypes.func,
}.isRequired;

export default Form;
