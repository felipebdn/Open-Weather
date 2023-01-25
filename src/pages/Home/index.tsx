import { LocalsFetched } from './components/LocalsFetched'
import { ShearchLocals } from './components/ShearchLocals'
import { WeatherInformation } from './components/WeatherInformation'
import { HomeContainer } from './styles'

export function Home() {
  return (
    <HomeContainer>
      <ShearchLocals />
      <LocalsFetched />
      <WeatherInformation />
    </HomeContainer>
  )
}
