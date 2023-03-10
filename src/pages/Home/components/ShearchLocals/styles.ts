import styled from 'styled-components'

export const ShearchLocalsContainer = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;

  align-items: center;
  padding: 2rem 0;

  input {
    background: ${({ theme }) => theme.mauve};
    color: ${({ theme }) => theme['base-text']};
    border: 1px solid ${({ theme }) => theme['base-span']};

    border-radius: 10px;
    padding: 0.875rem;
    max-width: 50%;
    width: 100%;
  }
`
