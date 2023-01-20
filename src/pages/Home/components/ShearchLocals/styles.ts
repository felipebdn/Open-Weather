import styled from 'styled-components'

export const ShearchLocalsContainer = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;

  align-items: center;
  padding: 2rem 0;

  input {
    background: ${({ theme }) => theme['base-input']};
    color: ${({ theme }) => theme['base-text']};
    border: 1px solid ${({ theme }) => theme['base-border']};

    border-radius: 10px;
    padding: 0.875rem;
    max-width: 50%;
    min-width: 40%;
  }
`
