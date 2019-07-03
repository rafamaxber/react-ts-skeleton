import React from 'react';
import { Provider } from 'react-redux';

import Rocket from '/assets/rocket.png';
import Planet from '/assets/planets.svg';

import store from '/store';

const App = () => <Provider store={store}><img src={Rocket} /><Planet /><div>hello word</div></Provider>;

export default App;
