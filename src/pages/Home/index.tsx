import { useContext } from 'react'
import { localsContext } from '../../context/localsContext'
import { LocalsFetched } from './components/LocalsFetched'
import { ShearchLocals } from './components/ShearchLocals'
import { WeatherInformation } from './components/WeatherInformation'
import { HomeContainer } from './styles'

export function Home() {
  const { infoLocations, airPollution } = useContext(localsContext)
  // console.log('isCoordinates', isCoordinates)
  // console.log('airPollution', airPollution)
  console.log('infoLocations', JSON.stringify(infoLocations, null, '\t'))
  console.log('airPollution', JSON.stringify(airPollution, null, '\t'))

  return (
    <HomeContainer>
      <ShearchLocals />
      <LocalsFetched />
      {/* {isCoordinates && <WeatherInformation />} */}
    </HomeContainer>
  )
}
