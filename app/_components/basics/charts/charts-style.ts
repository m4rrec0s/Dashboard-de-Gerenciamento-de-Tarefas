import styled from "styled-components";

export const ChartsContainer = styled.div`
  width: 100%;
  max-width: 100vw;
  display: grid;
  grid-template-columns: 1fr;
  justify-items: center;
  margin-top: 2rem;
  padding-bottom: 2rem;
  gap: 1rem;

  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

export const ChartSection = styled.section`
  background-color: var(--card);
  padding: 1.5rem;
  border-radius: var(--radius);
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  max-height: 400px;
  width: 100%;

  h2 {
    font-size: var(--size-lg);
    margin-bottom: 1rem;
    color: var(--foreground);
  }

  canvas {
    width: 100%;
    height: auto;
    aspect-ratio: 2 / 1;
  }

  @media (max-width: 768px) {
    canvas {
      width: 80%;
    }
  }
`;
