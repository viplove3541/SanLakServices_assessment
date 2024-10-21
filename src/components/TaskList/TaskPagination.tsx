import React from 'react';
import styled from 'styled-components';

const PaginationContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
`;

const PaginationButton = styled.button`
  background-color: #007bff;
  color: white;
  padding: 10px 15px;
  border-radius: 5px;
  border: none;
  transition: background-color 0.3s;
  margin: 0 5px;

  &:hover {
    background-color: #0056b3;
  }

  &:disabled {
    background-color: #c0c0c0;
    cursor: not-allowed;
  }
`;

interface TaskPaginationProps {
  handlePagination: () => void;
}

const TaskPagination: React.FC<TaskPaginationProps> = ({ handlePagination }) => {
  return (
    <PaginationContainer>
      <PaginationButton onClick={handlePagination}>Load More</PaginationButton>
    </PaginationContainer>
  );
};

export default TaskPagination;
