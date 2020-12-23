import React from 'react';

import Add from './components/Add';
import Tabs from './components/Tabs'

const App = () => (
  <>
    <h1 className="mt-5 mb-4">Todo List</h1>
    <Add />
    <Tabs />
  </>
);

export default App;
