import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { RecoilRoot } from 'recoil';
import recoilPersist from 'recoil-persist';

import Container from 'react-bootstrap/Container';
import App from './App';

const { RecoilPersist, updateState } = recoilPersist(
  [],
  {
    key: 'to-do-list',
    storage: localStorage
  }
);

ReactDOM.render(
  <React.StrictMode>
    <RecoilRoot initializeState={updateState}>
      <RecoilPersist />
      <Container style={{ maxWidth: '600px' }}>
        <App />
      </Container>
    </RecoilRoot>
  </React.StrictMode>,
  document.getElementById('root')
);
