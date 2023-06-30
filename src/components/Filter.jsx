import React, { Component } from 'react';
import PropTypes from 'prop-types';

// esse componente possui os filtros para exibir os cards criados

class Filter extends Component {
  render() {
    const { onInputChange } = this.props;

    return (
      <div class="box columns">
        <div class="column"></div>
        <div class="field is-grouped column">
          <h4>Busque sua carta</h4>
          <div class="control">
            <input
              class="input"
              name="filterName"
              type="text"
              placeholder="Nome da carta"
              data-testid="name-filter"
              onChange={ onInputChange }
            />
          </div>
          <div class="select">
            <select
              name="filterRare"
              type="select"
              data-testid="rare-filter"
              onChange={ onInputChange }
              defaultValue="todas"
            >
              <option value="todas">Todas</option>
              <option value="normal">Normal</option>
              <option value="raro">Raro</option>
              <option value="muito raro">Muito Raro</option>
            </select>
          </div>
          <input
            name="filterTrunfo"
            type="checkbox"
            data-testid="trunfo-filter"
            onChange={ onInputChange }
          />
        </div>
        <div class="column"></div>
      </div>
    );
  }
}

Filter.propTypes = {
  onInputChange: PropTypes.func,
}.isRequired;

export default Filter;
