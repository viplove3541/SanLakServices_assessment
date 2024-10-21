import React, { useEffect, useState } from 'react';
import TaskList from '../components/TaskList/TaskList';
import TaskModal from '../components/TaskModal/TaskModal';
import styled from 'styled-components';
import Layout from '../components/Layout';

// Styled components
const AppContainer = styled.div`
  background-color: #d1e7fd; /* Light blue background */
  min-height: 100vh;
  padding: 40px 20px; /* Increased padding for a spacious feel */
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; /* Modern font */
  overflow-x: hidden; /* Hide horizontal scrolling */
`;

const Button = styled.button`
  background-color: #007bff; /* Bootstrap primary color */
  color: white;
  border: none;
  padding: 12px 20px; /* Increased padding for better button size */
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
  margin: 10px; /* Added margin for spacing */
  transition: background-color 0.3s, transform 0.2s;

  &:hover {
    background-color: #0056b3; /* Darker shade on hover */
    transform: translateY(-2px); /* Slight lift effect */
  }
`;

const FilterSelect = styled.select`
  margin: 10px 0;
  padding: 10px;
  border-radius: 5px;
  border: 1px solid #ccc;
  font-size: 16px; /* Larger font for better readability */
`;

// Initial tasks
const initialTasks = [
  { id: 1, title: 'Task 1', status: 'To Do', assignee: 'User1', priority: 'Low', dueDate: '2024-10-30' },
  { id: 2, title: 'Task 2', status: 'In Progress', assignee: 'User2', priority: 'Medium', dueDate: '2024-10-25' },
  { id: 3, title: 'Task 3', status: 'Completed', assignee: 'User3', priority: 'High', dueDate: '2024-10-20' },
];

// Define Task interface for type safety
interface Task {
  id: number;
  title: string;
  description?: string; // Optional field
  assignee: string;
  priority: string;
  dueDate: string;
  status: string;
}

const App: React.FC = () => {
  const [tasks, setTasks] = useState<Task[]>(initialTasks);
  const [isModalOpen, setModalOpen] = useState(false);
  const [filterStatus, setFilterStatus] = useState<string>('All');

  const handleDelete = (id: number) => {
    const updatedTasks = tasks.filter((task) => task.id !== id);
    setTasks(updatedTasks);
    localStorage.setItem('tasks', JSON.stringify(updatedTasks)); // Save to local storage
  };

  const handleModalSubmit = (task: Task) => { // Use Task type here
    const newTask = { id: Date.now(), ...task }; // Creating a new task with a unique ID
    const updatedTasks = [...tasks, newTask];
    setTasks(updatedTasks);
    localStorage.setItem('tasks', JSON.stringify(updatedTasks)); // Save to local storage
  };

  const handleModalClose = () => setModalOpen(false);

  useEffect(() => {
    const storedTasks = localStorage.getItem('tasks');
    if (storedTasks) {
      setTasks(JSON.parse(storedTasks));
    }
  }, []);

  // Filter tasks based on selected status
  const filteredTasks = tasks.filter((task) => {
    return filterStatus === 'All' || task.status === filterStatus;
  });

  return (
    <AppContainer>
      <Layout
        title="Project Dashboard"
        actions={
          <>
            <Button onClick={() => setModalOpen(true)}>Add Task</Button>
            <FilterSelect value={filterStatus} onChange={(e) => setFilterStatus(e.target.value)}>
              <option value="All">All</option>
              <option value="To Do">To Do</option>
              <option value="In Progress">In Progress</option>
              <option value="Completed">Completed</option>
            </FilterSelect>
          </>
        }
      >
        <TaskList tasks={filteredTasks} onDelete={handleDelete} />
        <TaskModal isOpen={isModalOpen} onClose={handleModalClose} onSubmit={handleModalSubmit} />
      </Layout>
    </AppContainer>
  );
};

export default App;
