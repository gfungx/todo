import React from 'react';

import List from './List';
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';

const ToDoTabs = () => {
  return (
    <Tabs className="mt-3" defaultActiveKey="active">
      <Tab eventKey="all" title="All">
        <List />
      </Tab>
      <Tab eventKey="active" title="Active">
        <List filter="active" />
      </Tab>
      <Tab eventKey="completed" title="Completed">
        <List filter="completed" />
      </Tab>
    </Tabs>
  );
};

export default ToDoTabs;
