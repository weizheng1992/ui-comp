import 'react-app-polyfill/ie11';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { ModalTest } from './components/modal';
import { PayListTest } from './components/payList';
import MarkTest from './components/mark/markTest';
import { PaySdk } from '../src';

PaySdk.init('test');

const App = () => {
  return (
    <div>
      <ModalTest />
      <PayListTest />
      <MarkTest />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
