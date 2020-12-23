import React, { useState, useRef } from 'react';
import { useRecoilState } from 'recoil';
import { v4 } from 'uuid';

import ToDoState from '../atoms/ToDoState';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Alert from 'react-bootstrap/Alert';

const Add = () => {
  const textRef = useRef();
  const [toDos, setToDos] = useRecoilState(ToDoState);
  const [error, setError] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    setError('');
    if (textRef.current.value) {
      setToDos([...toDos, { text: textRef.current.value, completed: false, uid: v4() }]);
      textRef.current.value = '';
    } else {
      setError('Field cannot be empty');
    };
  };
  return (
    <>
      { error ? <Alert variant="danger">{error}</Alert> : null }
      <Form onSubmit={handleSubmit}>
        <Form.Row className="align-items-center">
          <Col>
            <Form.Control
              id="inlineFormInput"
              placeholder="What do you want to do next?"
              ref={textRef}
            />
          </Col>
          <Col xs="auto">
            <Button type="submit">Add</Button>
          </Col>
        </Form.Row>
      </Form>
    </>
  );
};

export default Add;
