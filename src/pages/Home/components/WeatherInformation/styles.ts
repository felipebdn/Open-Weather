import styled from 'styled-components'

export const WeatherInformationContainer = styled.div`
  width: 90rem;
  display: grid;
  grid-template-columns: 2fr 3fr;
  grid-column-gap: 1rem;
`
export const Sides = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`
export const TempNow = styled.div`
  background: gray;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 1rem;
  border-radius: 15px;

  h1 {
    font-size: 4rem;
  }
  aside {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    p {
      font-size: 1.2rem;
    }
  }
`
