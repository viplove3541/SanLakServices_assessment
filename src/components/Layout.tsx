import React from 'react';
import styled, { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    overflow-x: hidden; /* Hides horizontal scrolling */
  }
`;

const Container = styled.div`
  max-width: 900px;
  margin: auto;
  padding: 20px;
  background: #f5f8fa; /* Light grey background */
  border-radius: 8px;
  box-shadow: 0 4px 24px rgba(0, 0, 0, 0.1);
  overflow: hidden; /* Prevents overflow from child elements */
`;

const Header = styled.header`
  padding: 20px;
  background-color: #0072c6; /* Zoom primary color */
  color: white;
  text-align: center;
  border-radius: 8px 8px 0 0;

  h1 {
    margin: 0;
    font-size: 24px; /* Adjusted font size for better visibility */
    font-family: 'Helvetica Neue', Arial, sans-serif; /* Modern font */
  }
`;

interface LayoutProps {
  title: string;
  children: React.ReactNode;
  actions?: React.ReactNode; // To accept additional elements like buttons
}

const Layout: React.FC<LayoutProps> = ({ title, actions, children }) => {
  return (
    <>
      <GlobalStyle />
      <Container>
        <Header>
          <h1>{title}</h1>
          {actions} {/* Render any additional actions like buttons here */}
        </Header>
        {children}
      </Container>
    </>
  );
};

export default Layout;
