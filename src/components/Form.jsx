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
        <div class="box columns">
          <div class="column"></div>
          <div class="column">
            <div className="inputs">
              <div class="field is-grouped">
                <label class="label" htmlFor="Name">
                  Nome
                  <div class="control">
                    <input
                      name="cardName"
                      class="input"
                      type="text"
                      value={cardName}
                      id="Name"
                      onChange={onInputChange}
                      data-testid="name-input" />
                    {/* como a prop vai enviar o valor que estiver dentro do input,
    precisa ser colocada entre chaves por ser como o valor de uma variável JS */}
                  </div>
                </label>
              </div>
              <div class="field is-grouped">
                <label class="label" htmlFor="Description">
                  Descrição
                  <textarea
                    name="cardDescription"
                    class="textarea"
                    value={cardDescription}
                    id="Description"
                    cols="30"
                    rows="10"
                    onChange={onInputChange}
                    data-testid="description-input" />
                </label>
              </div>
            </div>
          </div>
          <div class="column"></div>
          <div class="column">
            <div class="field">
              <div class="field is-grouped">
                <label class="label" htmlFor="cardAttr1">
                  Attr01
                  <input
                    class="input"
                    type="number"
                    name="cardAttr1"
                    value={cardAttr1}
                    onChange={onInputChange}
                    data-testid="attr1-input" />
                </label>
              </div>
              <div class="field is-grouped">
                <label class="label" htmlFor="cardAttr2">
                  Attr02
                  <input
                    class="input"
                    type="number"
                    name="cardAttr2"
                    value={cardAttr2}
                    onChange={onInputChange}
                    data-testid="attr2-input" />
                </label>
              </div>
              <div class="field is-grouped">
                <label class="label" htmlFor="cardAttr3">
                  Attr03
                  <input
                    class="input"
                    type="number"
                    name="cardAttr3"
                    value={cardAttr3}
                    onChange={onInputChange}
                    data-testid="attr3-input" />
                </label>
              </div>
              Pontos restantes = 000
            </div>
            <div class="field is-grouped">
              <label class="label" htmlFor="Image">
                Imagem
                <input
                  class="input"
                  type="text"
                  name="cardImage"
                  value={cardImage}
                  id="Image"
                  onChange={onInputChange}
                  data-testid="image-input" />
              </label>
            </div>
            <div class="field">
              <div>
                <label class="label" htmlFor="Rare">
                  Raridade
                </label>
              </div>
              <div class="control">
                <div class="select">
                  <select
                    aria-label="input-carta-rara"
                    name="cardRare"
                    value={cardRare}
                    id="Rare"
                    onChange={onInputChange}
                    data-testid="rare-input"
                  >
                    <option value="normal">Normal</option>
                    <option value="raro">Raro</option>
                    <option value="muito raro">Muito raro</option>
                  </select>
                </div>
              </div>
            </div>
            <div class="field">
              <label class="checkbox" htmlFor="cardTrunfo">
                {hasTrunfo ? <p>Você já tem um Super Trunfo em seu baralho</p> : <input
                  type="checkbox"
                  name="cardTrunfo"
                  title="Super Trybe Trunfo"
                  checked={cardTrunfo}
                  onChange={onInputChange}
                  data-testid="trunfo-input" />}
                {/* usa a saveCard e deleteCard para validar o super trunfo */}
                Super Trunfo
                {/* {console.log(isSaveButtonDisabled)} */}
              </label>
              <div class="buttons">
                <button
                  class="button is-primary"
                  name="save"
                  type="button"
                  disabled={isSaveButtonDisabled}
                  onClick={onSaveButtonClick}
                  data-testid="save-button"
                >
                  Salvar
                </button>
              </div>
            </div>
          </div>
          <div class="column"></div>
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
