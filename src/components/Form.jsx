/* eslint-disable react/jsx-max-depth */
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
        <div className="box columns">
          <div className="column" />
          <div className="column">
            <h1 className="title">TOP TRUMPS</h1>
            <h3 className="subtitle is-3">Crie sua carta com as informações</h3>
            <div className="inputs">
              <div className="field is-grouped">
                <label className="label" htmlFor="Name">
                  Nome
                  <div className="control">
                    { // eslint-disable-next-line react/jsx-max-depth
                      <input
                        name="cardName"
                        className="input"
                        type="text"
                        value={ cardName }
                        id="Name"
                        onChange={ onInputChange }
                        data-testid="name-input"
                      />
                    }
                    {/* como a prop vai enviar o valor que estiver dentro do input,
    precisa ser colocada entre chaves por ser como o valor de uma variável JS */}
                  </div>
                </label>
              </div>
              <div className="field is-grouped">
                <label className="label" htmlFor="Description">
                  Descrição
                  { // eslint-disable-next-line react/jsx-max-depth
                    <textarea
                      name="cardDescription"
                      className="textarea"
                      value={ cardDescription }
                      id="Description"
                      cols="30"
                      rows="10"
                      onChange={ onInputChange }
                      data-testid="description-input"
                    />
                  }
                </label>
              </div>
            </div>
          </div>
          <div className="column" />
          <div className="column">
            <div className="field">
              <div className="field is-grouped">
                <label className="label" htmlFor="cardAttr1">
                  Attr01
                  { // eslint-disable-next-line react/jsx-max-depth
                    <input
                      className="input"
                      type="number"
                      name="cardAttr1"
                      value={ cardAttr1 }
                      onChange={ onInputChange }
                      data-testid="attr1-input"
                    />
                  }
                </label>
              </div>
              <div className="field is-grouped">
                <label className="label" htmlFor="cardAttr2">
                  Attr02
                  { // eslint-disable-next-line react/jsx-max-depth
                    <input
                      className="input"
                      type="number"
                      name="cardAttr2"
                      value={ cardAttr2 }
                      onChange={ onInputChange }
                      data-testid="attr2-input"
                    />
                  }
                </label>
              </div>
              <div className="field is-grouped">
                <label className="label" htmlFor="cardAttr3">
                  Attr03
                  { // eslint-disable-next-line react/jsx-max-depth
                    <input
                      className="input"
                      type="number"
                      name="cardAttr3"
                      value={ cardAttr3 }
                      onChange={ onInputChange }
                      data-testid="attr3-input"
                    />
                  }
                </label>
              </div>
              Pontos restantes = 000
            </div>
            <div className="field is-grouped">
              <label className="label" htmlFor="Image">
                Imagem
                { // eslint-disable-next-line react/jsx-max-depth
                  <input
                    className="input"
                    type="text"
                    name="cardImage"
                    value={ cardImage }
                    id="Image"
                    onChange={ onInputChange }
                    data-testid="image-input"
                  />
                }
              </label>
            </div>
            <div className="field">
              <div>
                { // eslint-disable-next-line jsx-a11y/label-has-associated-control, react/jsx-max-depth
                  <label className="label" htmlFor="Rare">
                    Raridade
                  </label>
                }
              </div>
              <div className="control">
                <div className="select">
                  <select
                    aria-label="input-carta-rara"
                    name="cardRare"
                    value={ cardRare }
                    id="Rare"
                    onChange={ onInputChange }
                    data-testid="rare-input"
                  >
                    { // eslint-disable-next-line react/jsx-max-depth
                      <>
                        <option value="normal">Normal</option>
                        <option value="raro">Raro</option>
                        <option value="muito raro">Muito raro</option>
                      </>
                    }
                  </select>
                </div>
              </div>
            </div>
            <div className="field">
              <label className="checkbox" htmlFor="cardTrunfo">
                {hasTrunfo ? <p>Você já tem um Super Trunfo em seu baralho</p> : <input
                  type="checkbox"
                  name="cardTrunfo"
                  title="Super Trybe Trunfo"
                  checked={ cardTrunfo }
                  onChange={ onInputChange }
                  data-testid="trunfo-input"
                />}
                {/* usa a saveCard e deleteCard para validar o super trunfo */}
                Super Trunfo
                {/* {console.log(isSaveButtonDisabled)} */}
              </label>
              <div className="buttons">
                <button
                  className="button is-primary"
                  name="save"
                  type="button"
                  disabled={ isSaveButtonDisabled }
                  onClick={ onSaveButtonClick }
                  data-testid="save-button"
                >
                  Salvar
                </button>
              </div>
            </div>
          </div>
          <div className="column" />
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
