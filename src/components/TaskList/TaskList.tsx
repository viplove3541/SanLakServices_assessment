import React from 'react';
import styled from 'styled-components';

// Define the Task interface to specify the structure of a task
interface Task {
    id: number; // or string, depending on how you manage IDs
    title: string;
    status: string; // Add appropriate types based on your actual data
    assignee: string;
    priority: string;
    dueDate: string; // Adjust type if you have a Date object or other formats
}

// Styled components
const TaskListContainer = styled.div`
  padding: 20px;
  background: linear-gradient(135deg, #e3f2fd, #bbdefb); /* Fresh gradient background */
  border-radius: 15px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  animation: fadeIn 1s ease-in-out;

  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  @media (max-width: 768px) {
    padding: 15px;
  }

  @media (max-width: 480px) {
    padding: 10px;
    border-radius: 10px;
  }
`;

const TaskItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px;
  margin: 10px 0;
  background: linear-gradient(135deg, rgba(173, 232, 244, 0.9), rgba(255, 255, 255, 0.9)); /* Light blue gradient */
  border-radius: 10px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.05);
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 6px 25px rgba(0, 0, 0, 0.15);
  }

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
  }

  @media (max-width: 480px) {
    padding: 10px;
  }
`;

const TaskDetails = styled.div`
  flex-grow: 1;
  margin-right: 15px;

  @media (max-width: 768px) {
    margin-right: 0;
    margin-bottom: 10px;
  }
`;

const TaskTitle = styled.h3`
  margin: 0;
  color: #0d47a1; /* Fresh, deep blue for title */
  font-weight: 600;

  @media (max-width: 768px) {
    font-size: 18px;
  }

  @media (max-width: 480px) {
    font-size: 16px;
  }
`;

const TaskInfo = styled.p`
  margin: 4px 0;
  color: #546e7a; /* Fresh cool grey */
  font-size: 14px;

  @media (max-width: 768px) {
    font-size: 13px;
  }

  @media (max-width: 480px) {
    font-size: 12px;
  }
`;

const DeleteButton = styled.button`
  background-color: #e53935; /* Fresh vibrant red for delete */
  color: white;
  border: none;
  border-radius: 8px;
  padding: 10px 15px;
  cursor: pointer;
  font-size: 14px;
  transition: background-color 0.3s ease, transform 0.2s ease;

  &:hover {
    background-color: #ff5252; /* Lighter red */
    transform: translateY(-2px);
  }

  &:active {
    transform: translateY(0);
    background-color: #d32f2f; /* Slightly darker red on click */
  }

  @media (max-width: 768px) {
    padding: 8px 12px;
    font-size: 13px;
  }

  @media (max-width: 480px) {
    padding: 6px 10px;
    font-size: 12px;
  }
`;

// Update the TaskList component to use the Task type
const TaskList: React.FC<{ tasks: Task[]; onDelete: (id: number) => void }> = ({ tasks, onDelete }) => {
  return (
    <TaskListContainer>
      {tasks.map((task) => (
        <TaskItem key={task.id}>
          <TaskDetails>
            <TaskTitle>{task.title}</TaskTitle>
            <TaskInfo>Status: {task.status}</TaskInfo>
            <TaskInfo>Assignee: {task.assignee}</TaskInfo>
            <TaskInfo>Priority: {task.priority}</TaskInfo>
            <TaskInfo>Due Date: {task.dueDate}</TaskInfo>
          </TaskDetails>
          <DeleteButton onClick={() => onDelete(task.id)}>Delete</DeleteButton>
        </TaskItem>
      ))}
    </TaskListContainer>
  );
};

export default TaskList;
