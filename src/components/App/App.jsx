import React from 'react';
import PropTypes from 'prop-types';
import {Provider} from 'react-redux';
import FormContainer from '../../containers/FormContainer';
import TitleContainer from '../../containers/TitleContainer';
import OutsideButtonContainer from '../../containers/OutsideButtonContainer';

import './App.css';

function App(props) {
  const {store} = props;

  return (
    <Provider store={store}>
      <div className="App">
        <div className="App-header">
          <TitleContainer />
        </div>
        <div className="App-content">
          <FormContainer />
          <OutsideButtonContainer />
        </div>
      </div>
    </Provider>
  );
}

App.propTypes = {
  store: PropTypes.object.isRequired,
};

export default App;
