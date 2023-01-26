import { useContext } from 'react'
import { localsContext } from '../../../../context/localsContext'
import { WeatherInformationContainer } from './styles'

export function WeatherInformation() {
  const { airPollution } = useContext(localsContext)
  console.log(JSON.stringify(airPollution, null, '\t'))

  return <WeatherInformationContainer>olá</WeatherInformationContainer>
}
