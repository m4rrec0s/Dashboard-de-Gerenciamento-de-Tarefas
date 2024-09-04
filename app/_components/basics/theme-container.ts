import styled from "styled-components";

const ThemeToggleContainer = styled.div`
  padding: 0.4rem;
  background-color: var(--muted);
  border-radius: var(--radius);
  position: fixed;
  bottom: 1rem;
  left: 0.5rem;
  z-index: 999;
  cursor: pointer;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  border: 1px solid var(--border);
`;

export default ThemeToggleContainer;