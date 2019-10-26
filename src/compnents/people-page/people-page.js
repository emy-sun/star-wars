import React, { Component } from 'react';

import ItemList from '../item-list/item-list';
import PersonDetails from '../person-details/person-details';

import './people-page.css';

export default class PeoplePage extends Component {

    state = {
        selectedPerson: 3
    }

    onPersonSelected = (selectedPerson) => {
        this.setState({ selectedPerson });
    };

    render() {
    
        return (
          <div className="row mb2">
            <div className="col-md-6">
              <ItemList onItemSelected={this.onPersonSelected} />
            </div>
            <div className="col-md-6">
              <PersonDetails personId={this.state.selectedPerson} />
            </div>
          </div>
        );
    }
}