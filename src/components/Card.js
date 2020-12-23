import React, { useState } from 'react';
import { useRecoilState } from 'recoil';
import ToDoState from '../atoms/ToDoState';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons'
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';

const ToDoCard = ({ text, completed, uid }) => {
  const [toDos, setToDos] = useRecoilState(ToDoState);
  const idx = toDos.findIndex(e => e.uid === uid);
  const [isCheckHovering, setIsCheckHovering] = useState(false);
  const handleCheckEnter = () => setIsCheckHovering(true);
  const handleCheckLeave = () => setIsCheckHovering(false);
  const handleCheckClick = () => {
    let newToDos = [...toDos.slice(0, idx), { text, completed: !completed, uid }, ...toDos.slice(idx + 1)];
    setToDos(newToDos);
  };

  const [isXHovering, setIsXHovering] = useState(false);
  const handleXEnter = () => setIsXHovering(true);
  const handleXLeave = () => setIsXHovering(false);
  const handleXClick = () => {
    let newToDos = [...toDos.slice(0, idx), ...toDos.slice(idx + 1)];
    setToDos(newToDos);
  };

  return (
    <Card className="mb-3" key={uid}>
      <Card.Body>
        <Form>
          <div className="d-flex flex-row">
            <div>
              <Form.Check
                onChange={handleCheckClick}
                onMouseEnter={handleCheckEnter}
                onMouseLeave={handleCheckLeave}
                checked={completed}
              />
            </div>
            <div
              style={{
                textDecoration: (isCheckHovering || completed ? 'line-through' : 'none'),
                color: (isCheckHovering || completed ? 'grey' : 'black')
              }}
              className="flex-grow-1"
            >{text}</div>
            <div>
              <FontAwesomeIcon icon={faTimes}
                style={{ cursor: (isXHovering ? 'pointer' : 'default') }}
                onMouseEnter={handleXEnter}
                onMouseLeave={handleXLeave}
                onClick={handleXClick}
              />
            </div>
          </div>
        </Form>
      </Card.Body>
    </Card>
  );
};

export default ToDoCard;
