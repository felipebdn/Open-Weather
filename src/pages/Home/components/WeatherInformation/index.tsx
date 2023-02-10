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
  Thermometer,
  Clock,
  ArrowRight,
  ArrowDownRight,
  ArrowDownLeft,
  ArrowLeft,
  ArrowUpLeft,
} from 'phosphor-react'
import { useContext } from 'react'
import { localsContext } from '../../../../context/localsContext'
import {
  HourWeather,
  TemperatureStatus,
  WeatherForecast,
  WeatherInformationContainer,
  WeatherLayers,
} from './styles'

export function WeatherInformation() {
  const { airPollution, currentWeather, forecastWeather } =
    useContext(localsContext)
  // console.log(JSON.stringify(forecastWeather, null, '\t'))

  const getDays = forecastWeather.list.map((element) => {
    return new Date(element.dt_txt).getDate()
  })
  const getDaysUnics = getDays.filter((d, i, a) => a.indexOf(d) === i)
  const getDaysFinal = getDaysUnics.slice(0, 3)
  const teste = [
    forecastWeather.list.filter((element, indice) => {
      const data = new Date(element.dt_txt).getDate()
      return data === getDaysFinal[0] && indice % 2 === 0
    }),
    forecastWeather.list.filter((element, indice) => {
      const data = new Date(element.dt_txt).getDate()
      return data === getDaysFinal[1] && indice % 2 === 0
    }),
    forecastWeather.list.filter((element, indice) => {
      const data = new Date(element.dt_txt).getDate()
      return data === getDaysFinal[2] && indice % 2 === 0
    }),
  ]
  function GetHourByUnix(n: number) {
    return new Date(n * 1000).toLocaleString('pt-BR', {
      hour: 'numeric',
      minute: 'numeric',
    })
  }
  function windRose(n: number, s: number) {
    switch (true) {
      case n <= 23 || n > 338:
        return (
          <>
            <ArrowUp size={20} weight="bold" />
            <span>{`N - ${s} m/s`}</span>
          </>
        )
      case n > 23 || n <= 68:
        return (
          <>
            <ArrowUpRight size={20} weight="bold" />
            <span>{`NE - ${s} m/s`}</span>
          </>
        )
      case n > 68 || n <= 113:
        return (
          <>
            <ArrowRight size={20} weight="bold" />
            <span>{`E - ${s} m/s`}</span>
          </>
        )
      case n > 113 || n <= 161:
        return (
          <>
            <ArrowDownRight size={20} weight="bold" />
            <span>{`SE - ${s} m/s`}</span>
          </>
        )
      case n > 161 || n <= 203:
        return (
          <>
            <ArrowDown size={20} weight="bold" />
            <span>{`S - ${s} m/s`}</span>
          </>
        )
      case n > 203 || n <= 248:
        return (
          <>
            <ArrowDownLeft size={20} weight="bold" />
            <span>{`SW - ${s} m/s`}</span>
          </>
        )
      case n > 248 || n <= 293:
        return (
          <>
            <ArrowLeft size={20} weight="bold" />
            <span>{`W - ${s} m/s`}</span>
          </>
        )
      case n > 293 || n <= 338:
        return (
          <>
            <ArrowUpLeft size={20} weight="bold" />
            <span>{`NW - ${s} m/s`}</span>
          </>
        )
    }
  }

  return (
    <WeatherInformationContainer>
      <TemperatureStatus>
        <img
          src={`https://openweathermap.org/img/wn/${currentWeather.weather[0].icon}@4x.png`}
          alt={currentWeather.weather[0].description}
        />
        <h1>{`${currentWeather.main.temp.toFixed(2)}º`}</h1>
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
              {windRose(currentWeather.wind.deg, currentWeather.wind.speed)}
            </aside>
          </div>
          <div>
            <p>Sol</p>
            <aside>
              <span>{GetHourByUnix(currentWeather.sys.sunrise)}</span>
              <SunHorizon size={20} color="#FFD600" />
              <span>{GetHourByUnix(currentWeather.sys.sunset)}</span>
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
          {teste.map((element, i) => {
            return (
              <main key={i}>
                {element.map((forecast, indice) => {
                  return (
                    <HourWeather key={indice}>
                      <img
                        src={`https://openweathermap.org/img/wn/${forecast.weather[0].icon}@2x.png`}
                        alt=""
                      />
                      <header>
                        <h4>{forecast.weather[0].description}</h4>
                        <main>
                          <div>
                            <Thermometer size={20} color="#ff0000a2" />
                            <span>{forecast.main.temp}º</span>
                          </div>
                          <div>
                            <ArrowUp size={20} weight="bold" color="#FF0000" />
                            <span>{forecast.main.temp_max}º</span>
                          </div>
                          <div>
                            <ArrowDown
                              size={20}
                              weight="bold"
                              color="#0047FF"
                            />
                            <span>{forecast.main.temp_min}º</span>
                          </div>
                        </main>
                        <main>
                          <div>
                            {windRose(forecast.wind.deg, forecast.wind.speed)}
                          </div>
                          <div>
                            <Clock size={20} />
                            <span>{GetHourByUnix(forecast.dt)}</span>
                          </div>
                        </main>
                      </header>
                    </HourWeather>
                  )
                })}
              </main>
            )
          })}
        </section>
      </WeatherForecast>
    </WeatherInformationContainer>
  )
}
