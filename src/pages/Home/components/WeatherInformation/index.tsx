import {
  ArrowUp,
  ArrowDown,
  ThermometerHot,
  Drop,
  ArrowUpRight,
  SunHorizon,
  ThumbsUp,
  ThumbsDown,
  Skull,
  Leaf,
} from 'phosphor-react'
import { useContext } from 'react'
import { localsContext } from '../../../../context/localsContext'
import {
  AirPollution,
  CurrentData,
  TemperatureStatus,
  WeatherForecast,
  WeatherInformationContainer,
  WeatherLayers,
} from './styles'

export function WeatherInformation() {
  const { airPollution, currentWeather, infoLocations } =
    useContext(localsContext)
  // console.log(JSON.stringify(currentWeather, null, '\t'))

  function GetHourByUnix(n: number) {
    return new Date(currentWeather.dt * 1000).toLocaleString('pt-BR', {
      hour: 'numeric',
      minute: 'numeric',
    })
  }

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
      <CurrentData>
        <h3>Dados atuais - {GetHourByUnix(currentWeather.dt)}</h3>
        <main>
          <div>
            <h2>
              {`Condições atual: ${currentWeather.weather[0].description}`}
            </h2>
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
        </main>
      </CurrentData>
      <AirPollution>
        <h3>Poluição do ar</h3>
        <main>
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
          <div>
            <p>Nitrogênio</p>
            <aside>
              <span>{`${airPollution.list[0].components.no} μg/m³`}</span>
            </aside>
          </div>
          <div>
            <p>Ozônio</p>
            <aside>
              <span>{`${airPollution.list[0].components.o3} μg/m³`}</span>
            </aside>
          </div>
          <div>
            <p>Dióxido de enxofre</p>
            <aside>
              <span>{`${airPollution.list[0].components.so2} μg/m³`}</span>
            </aside>
          </div>
          <div>
            <p>Partículas finas</p>
            <aside>
              <span>{`${airPollution.list[0].components.pm2_5} μg/m³`}</span>
            </aside>
          </div>
        </main>
      </AirPollution>
      <WeatherLayers>
        <h3>camadas meteorológicas</h3>
        <h1>Nuvens</h1>
        <main>
          <img src="" alt="" />
          <div>
            <button>
              <svg />
            </button>
            <button>
              <svg />
            </button>
          </div>
        </main>
        <footer>em todo o mundo</footer>
      </WeatherLayers>
      <WeatherForecast>
        <h3>Previsão dos próximos 3 dias</h3>
        <main>
          <div>
            <h4>Segunda</h4>
            <div>
              <img src="" alt="" />
              <div>
                <h4>Chuva leve</h4>
                <div>
                  <div>
                    <svg />
                    <span>33º</span>
                  </div>
                  <div>
                    <svg />
                    <span>33º</span>
                  </div>
                  <div>
                    <svg />
                    <span>33º</span>
                  </div>
                </div>
                <div>
                  <div>
                    <svg />
                    <span>33º</span>
                  </div>
                  <div>
                    <svg />
                    <span>33º</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </WeatherForecast>
    </WeatherInformationContainer>
  )
}
