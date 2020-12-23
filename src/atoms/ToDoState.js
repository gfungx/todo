import { atom } from 'recoil';

const ToDoState = atom({
  key: 'ToDoState',
  default: [],
  persistence_UNSTABLE: {
    type: 'ToDoState'
  }
});

export default ToDoState;
