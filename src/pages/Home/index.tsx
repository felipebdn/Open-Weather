import { useContext } from 'react'
import { localsContext } from '../../context/localsContext'
import { LocalsFetched } from './components/LocalsFetched'
import { ShearchLocals } from './components/ShearchLocals'
import { WeatherInformation } from './components/WeatherInformation'
import { HomeContainer } from './styles'

export function Home() {
  const { isCoordinates, airPollution, currentWeather } =
    useContext(localsContext)
  // console.log('isCoordinates', isCoordinates)
  // console.log('airPollution', airPollution)
  // console.log('currentWeather', currentWeather)

  return (
    <HomeContainer>
      <ShearchLocals />
      <LocalsFetched />
      {isCoordinates && <WeatherInformation />}
    </HomeContainer>
  )
}
