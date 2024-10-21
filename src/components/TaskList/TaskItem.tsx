import React from 'react';
import { Task } from '../../types/TaskTypes';
import styled from 'styled-components';

const ListItem = styled.li`
  border: 1px solid #ced4da;
  border-radius: 4px;
  padding: 15px;
  margin-bottom: 15px;
  background-color: #ffffff;
  box-shadow: 0 1px 5px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s;

  &:hover {
    transform: scale(1.02);
  }

  h3 {
    margin: 0 0 5px;
  }

  p {
    margin: 2px 0;
  }
`;

interface TaskItemProps {
  task: Task;
}

const TaskItem: React.FC<TaskItemProps> = ({ task }) => {
  return (
    <ListItem>
      <h3>{task.title}</h3>
      <p><strong>Status:</strong> {task.status}</p>
      <p><strong>Assignee:</strong> {task.assignee}</p>
      <p><strong>Priority:</strong> {task.priority}</p>
      <p><strong>Due Date:</strong> {task.dueDate}</p>
    </ListItem>
  );
};

export default TaskItem;
