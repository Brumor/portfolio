import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
//import {createStore} from 'redux';
import ShowItems from './containers/ShowItems';
import './index.css'

import { library } from '@fortawesome/fontawesome-svg-core'
import { faMobile, faLaptop, faCode } from '@fortawesome/free-solid-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'

library.add(fab, faMobile, faLaptop, faCode)

//import rootReducer from './reducers/index';

//const store = createStore(rootReducer);

ReactDOM.render((
  <Provider
    //store={store}
    style={{height: "100%",}}>
    <ShowItems/>
  </Provider>
  ), document.getElementById('root'));
