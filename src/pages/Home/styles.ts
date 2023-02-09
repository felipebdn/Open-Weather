import styled from 'styled-components'
import { device } from '../../Global/GlobalStyle'

export const HomeContainer = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;

  @media ${device.xl} {
    max-width: 1220px;
  }
`
export const NeverLocation = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;

  align-items: center;
  margin-top: 5rem;

  gap: 1rem;
`
