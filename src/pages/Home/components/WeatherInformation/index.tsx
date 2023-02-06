import {
  ArrowUp,
  ArrowDown,
  ThermometerHot,
  ArrowUpRight,
  SunHorizon,
  ThumbsUp,
  ThumbsDown,
  Skull,
  Leaf,
} from 'phosphor-react'
import { useContext, useState } from 'react'
import { localsContext } from '../../../../context/localsContext'
import {
  HourWeather,
  TemperatureStatus,
  WeatherForecast,
  WeatherInformationContainer,
  WeatherLayers,
} from './styles'

interface forecastWeatherTypes {
  cnt: number
  list: {
    dt: number
    main: {
      temp: number
      temp_min: number
      temp_max: number
    }
    weather: {
      description: string
      icon: string
    }[]
    wind: {
      speed: number
      deg: number
    }
    dt_txt: string
  }[]
}

export function WeatherInformation() {
  const { airPollution, currentWeather, forecastWeather } =
    useContext(localsContext)

  const { forecastDay, setForecastDay } = useState<forecastWeatherTypes[]>([])
  // console.log(JSON.stringify(forecastWeather, null, '\t'))

  function GetHourByUnix(n: number) {
    return new Date(n * 1000).toLocaleString('pt-BR', {
      hour: 'numeric',
      minute: 'numeric',
    })
  }
  const currentTreeDaysWeather = forecastWeather.list.slice(0, 24)

  const currentData = new Date().getDate()

  currentTreeDaysWeather.forEach((element) => {})

  console.log()

  return (
    <WeatherInformationContainer>
      <TemperatureStatus>
        <img
          src={`https://openweathermap.org/img/wn/${currentWeather.weather[0].icon}@4x.png`}
          alt={currentWeather.weather[0].description}
        />
        <h1>{`${currentWeather.main.temp.toFixed(2)}º`}</h1>
        <aside>
          <p>
            max: <span>{`${currentWeather.main.temp_max.toFixed(0)}º`}</span>
          </p>
          <p>
            min: <span>{`${currentWeather.main.temp_min.toFixed(0)}º`}</span>
          </p>
        </aside>
      </TemperatureStatus>
      <WeatherLayers>
        <h3>Dados atuais - {GetHourByUnix(currentWeather.dt)}</h3>
        <main>
          <div>
            <p>Condições atual</p>
            <span>{currentWeather.weather[0].description}</span>
          </div>
          <div>
            <p>Temperatura</p>
            <aside>
              <ArrowUp size={20} color="#FF0000" weight="bold" />
              <span>{`${currentWeather.main.temp_max}º`}</span>
              <ArrowDown size={20} color="#0047FF" weight="bold" />
              <span>{`${currentWeather.main.temp_min}º`}</span>
            </aside>
          </div>
          <div>
            <p>Sensação térmica</p>
            <aside>
              <ThermometerHot size={20} color="#DC4F00" weight="thin" />
              <span>{`${currentWeather.main.feels_like}º`}</span>
            </aside>
          </div>
          <div>
            <p>Vento</p>
            <aside>
              <ArrowUpRight size={20} color="#676767" weight="bold" />
              <span>SW - 5km/h</span>
            </aside>
          </div>
          <div>
            <p>Sol</p>
            <aside>
              <span>06:35</span>
              <SunHorizon size={20} color="#FFD600" />
              <span>06:35</span>
            </aside>
          </div>
          <div>
            <p>Índice de qualidade do ar</p>
            <aside>
              {airPollution.list.map((value) => {
                switch (value.main.aqi) {
                  case 1: {
                    return (
                      <>
                        <ThumbsUp size={20} color="#00e109" weight="bold" />
                        <span>Bom</span>
                      </>
                    )
                  }
                  case 2: {
                    return (
                      <>
                        <Leaf size={20} color="#7bdc04" weight="bold" />
                        <span>Regular</span>
                      </>
                    )
                  }
                  case 3: {
                    return (
                      <>
                        <ThumbsUp size={20} color="#00e109" weight="bold" />
                        <span>Moderado</span>
                      </>
                    )
                  }
                  case 4: {
                    return (
                      <>
                        <ThumbsDown size={20} color="#dc6d04" weight="bold" />
                        <span>Ruim</span>
                      </>
                    )
                  }
                  case 5: {
                    return (
                      <>
                        <Skull size={32} color="#e02200" weight="bold" />
                        <span>Muito Ruim</span>
                      </>
                    )
                  }
                }
                return null
              })}

              {/* <ThumbsUp size={20} color="#00e109" weight="bold" />
              <span>{QualityIndex[airPollution.list[0].main.aqi - 1]}</span> */}
            </aside>
          </div>
        </main>
      </WeatherLayers>
      <WeatherForecast>
        <h3>Previsão dos próximos 3 dias</h3>
        <section>
          <main>
            <HourWeather>
              <img src="" alt="" />
              <aside>
                <h4>Chuva leve</h4>
                <div>
                  <div>
                    <svg />
                    <span>33,2º</span>
                  </div>
                  <div>
                    <svg />
                    <span>23º</span>
                  </div>
                  <div>
                    <svg />
                    <span>23º</span>
                  </div>
                </div>
              </aside>
            </HourWeather>
          </main>
        </section>
      </WeatherForecast>
    </WeatherInformationContainer>
  )
}
