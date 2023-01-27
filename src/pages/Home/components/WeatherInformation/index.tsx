import { useContext } from 'react'
import { localsContext } from '../../../../context/localsContext'
import { TempNow, Sides, WeatherInformationContainer } from './styles'

export function WeatherInformation() {
  const { airPollution, currentWeather, infoLocations } =
    useContext(localsContext)
  console.log(JSON.stringify(currentWeather, null, '\t'))

  return (
    <WeatherInformationContainer>
      <Sides>
        <TempNow>
          <img
            src={`https://openweathermap.org/img/wn/${currentWeather.weather[0].icon}@4x.png`}
            alt=""
          />
          <h1>{`${currentWeather.main.temp}º`}</h1>
          <aside>
            <p>
              MAX: <span>{`${currentWeather.main.temp_max}º`}</span>
            </p>
            <p>
              MIN: <span>{`${currentWeather.main.temp_min}º`}</span>
            </p>
          </aside>
        </TempNow>
        <div>fesf</div>
      </Sides>
      <Sides>
        <div>efesf</div>
        <div>fesfs</div>
      </Sides>
    </WeatherInformationContainer>
  )
}
