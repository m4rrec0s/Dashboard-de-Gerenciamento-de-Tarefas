import styled from "styled-components";

const ThemeToggleContainer = styled.div`
  padding: 0.4rem;
  background-color: var(--muted);
  border-radius: var(--radius);
  position: fixed;
  bottom: 1rem;
  right: 0.5rem;
  z-index: 90;
  cursor: pointer;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  border: 1px solid var(--border);
`;

export default ThemeToggleContainer;