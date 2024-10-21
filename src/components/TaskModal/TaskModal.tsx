import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import styled from 'styled-components';

// Styled components
const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000; /* Ensures modal is on top */
`;

const ModalContent = styled.div`
  background-color: #f9f9f9;
  padding: 30px;
  width: 400px;
  border-radius: 12px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2);
  animation: slideIn 0.3s ease-out;

  @keyframes slideIn {
    from {
      transform: translateY(-20px);
      opacity: 0;
    }
    to {
      transform: translateY(0);
      opacity: 1;
    }
  }

  h2 {
    margin-bottom: 20px;
    color: #333;
    text-align: center;
  }

  label {
    font-weight: bold;
    margin-top: 10px;
    display: block;
    color: #555;
  }

  input, select, textarea {
    width: 100%;
    padding: 10px;
    margin-top: 5px;
    border: 1px solid #ccc;
    border-radius: 5px;
    font-size: 16px;
  }

  textarea {
    resize: none;
  }

  button {
    background-color: #4CAF50; /* Green */
    color: white;
    padding: 10px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    font-size: 16px;
    margin-top: 20px;
    width: 48%;
    margin-right: 4%;
  }

  button:last-child {
    background-color: #f44336; /* Red */
    margin-right: 0; /* Remove right margin for the last button */
  }

  button:hover {
    opacity: 0.9;
  }

  .error {
    color: red;
    font-size: 14px;
  }
`;

// Validation Schema
const validationSchema = Yup.object().shape({
  title: Yup.string().required('Title is required'),
  dueDate: Yup.date().required('Due Date is required'),
  assignee: Yup.string().required('Assignee is required'),
  priority: Yup.string().required('Priority is required'),
  status: Yup.string().required('Status is required'),
});

// Define TaskValues interface for form values
interface TaskValues {
  title: string;
  description: string;
  assignee: string;
  priority: string;
  dueDate: string;
  status: string;
}

interface TaskModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (values: TaskValues) => void; // Use TaskValues type here
}

const TaskModal: React.FC<TaskModalProps> = ({ isOpen, onClose, onSubmit }) => {
  if (!isOpen) return null;

  return (
    <ModalOverlay>
      <ModalContent>
        <h2>Create/Edit Task</h2>
        <Formik
          initialValues={{
            title: '',
            description: '',
            assignee: '',
            priority: 'Low',
            dueDate: '',
            status: 'To Do',
          }}
          validationSchema={validationSchema}
          onSubmit={(values) => {
            onSubmit(values);
            onClose();
          }}
        >
          {() => (
            <Form>
              <label htmlFor="title">Title:</label>
              <Field name="title" placeholder="Task Title" />
              <ErrorMessage name="title" component="div" className="error" />

              <label htmlFor="description">Description:</label>
              <Field name="description" placeholder="Description" as="textarea" rows="4" />

              <label htmlFor="assignee">Assignee:</label>
              <Field name="assignee" as="select">
                <option value="">Select Assignee</option>
                <option value="User1">User1</option>
                <option value="User2">User2</option>
                <option value="User3">User3</option>
              </Field>
              <ErrorMessage name="assignee" component="div" className="error" />

              <label htmlFor="priority">Priority:</label>
              <Field name="priority" as="select">
                <option value="Low">Low</option>
                <option value="Medium">Medium</option>
                <option value="High">High</option>
              </Field>

              <label htmlFor="dueDate">Due Date:</label>
              <Field name="dueDate" type="date" />
              <ErrorMessage name="dueDate" component="div" className="error" />

              <label htmlFor="status">Status:</label>
              <Field name="status" as="select">
                <option value="To Do">To Do</option>
                <option value="In Progress">In Progress</option>
                <option value="Completed">Completed</option>
              </Field>

              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <button type="submit">Submit</button>
                <button type="button" onClick={onClose}>Cancel</button>
              </div>
            </Form>
          )}
        </Formik>
      </ModalContent>
    </ModalOverlay>
  );
};

export default TaskModal;
