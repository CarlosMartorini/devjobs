import styled from "styled-components";

export const Box = styled.div`
  background: var(--gradient-white);
`;

export const Page = styled.div`
  margin-top: 30px;
  display: flex;
  flex-direction: column;
  width: 100%;
  min-height: 80vh;
  align-items: center;
  justify-content: center;

  p:first-of-type {
    font-size: 1.3rem;
  }
`;

export const FormStyled = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  height: 400px;
  padding: 20px;
  opacity: 0.8;
  margin-top: 30px;
  margin-bottom: 10px;

  h2 {
    color: var(--dark-grey);
    margin-bottom: 2.5rem;
    margin-top: 1rem;
    font-size: 2.3rem;
  }

  @media (min-width: 768px) {
    max-width: 450px;
    background: var(--dark-grey);
    border-radius: 15px;

    h2 {
      color: white;
    }
  }
`;

export const Text = styled.p`
  text-align: center;
  margin-bottom: 15px;
  padding: 0 30px;

  a {
    color: var(--blue);
    font-weight: bold;
  }
`;
