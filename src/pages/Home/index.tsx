import { useContext } from 'react'
import { localsContext } from '../../context/localsContext'
import { LocalsFetched } from './components/LocalsFetched'
import { ShearchLocals } from './components/ShearchLocals'
import { WeatherInformation } from './components/WeatherInformation'
import { HomeContainer } from './styles'

export function Home() {
  const { isCoordinates, infoLocations } = useContext(localsContext)

  return (
    <HomeContainer>
      <ShearchLocals />
      {isCoordinates ? <WeatherInformation /> : <LocalsFetched />}
    </HomeContainer>
  )
}
