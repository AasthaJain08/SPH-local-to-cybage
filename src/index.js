import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';

import App from './App';
import App2 from './App2';
import App3 from './App3';
import App4 from './App4';
import * as serviceWorker from './serviceWorker';

    
ReactDOM.render(<App />, document.getElementById('cdp_id_1'));
    
ReactDOM.render(<App2 />, document.getElementById('cdp_id_2'));
    
ReactDOM.render(<App3 />, document.getElementById('cdp_id_3'));
    
ReactDOM.render(<App4 />, document.getElementById('cdp_id_4'));

serviceWorker.unregister();
