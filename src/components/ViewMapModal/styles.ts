import styled from 'styled-components'
import * as Dialog from '@radix-ui/react-dialog'
import * as ToggleGroup from '@radix-ui/react-toggle-group'

export const Overlay = styled(Dialog.Overlay)`
  position: fixed;
  width: 100vw;
  height: 100vh;
  inset: 0;
  background: rgba(0, 0, 0, 0.75);
`
export const Content = styled(Dialog.Content)`
  min-width: 32rem;
  max-height: 31.25rem;
  background-color: blue;
  border-radius: 30px;
  overflow: hidden;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  display: flex;
  flex-direction: column;
  justify-content: center;

  img {
    width: 100%;
  }
`
export const HeaderModeal = styled.div`
  position: absolute;
  top: 1rem;

  width: 100%;

  padding: 0 1rem;

  display: flex;
  justify-content: space-between;

  h2 {
    background: ${({ theme }) => theme.white};

    box-shadow: 0 2px 10px ${({ theme }) => theme.mauve};

    color: #000;

    font-weight: 0;
    font-size: 2rem;

    padding: 0 1rem;
    border-radius: 18px;
  }
`
export const Close = styled(Dialog.Close)`
  line-height: 0;
  border-radius: 999px;
  padding: 0.3rem;

  box-shadow: 0 2px 10px ${({ theme }) => theme.mauve};

  color: ${({ theme }) => theme.black};

  border: 1px solid transparent;
  background: ${({ theme }) => theme.white};
`
export const ToggleGroupRoot = styled(ToggleGroup.Root)`
  background: ${({ theme }) => theme.white};
  color: ${({ theme }) => theme.black};

  display: inline-flex;
  border-radius: 20px;

  box-shadow: 0 2px 10px ${({ theme }) => theme.mauve};
  border: none;

  button {
    all: unset;
    font-size: 1rem;
    padding: 0.5rem;
    display: flex;
    line-height: 1;
    align-items: center;
    justify-content: center;
    cursor: pointer;
  }

  button:first-child {
    border-top-left-radius: 20px;
    border-bottom-left-radius: 20px;
  }
  button:last-child {
    border-top-right-radius: 20px;
    border-bottom-right-radius: 20px;
  }
  button:hover {
    background: ${({ theme }) => theme['base-text']};
  }
  button[data-state='on'] {
    background: ${({ theme }) => theme['base-span']};
    color: ${({ theme }) => theme.white};
  }
  buttonfocus {
    position: relative;
    box-shadow: 0 0 0 2px black;
  }
`
