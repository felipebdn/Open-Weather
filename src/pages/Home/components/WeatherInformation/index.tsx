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
  console.log(JSON.stringify(currentWeather, null, '\t'))

  return (
    <WeatherInformationContainer>
      <TemperatureStatus>
        <img src="" alt="" />
        <h1>23,69°</h1>
        <aside>
          <p>
            max: <span>23,69°</span>
          </p>
          <p>
            min: <span>23,69°</span>
          </p>
        </aside>
      </TemperatureStatus>
      <CurrentData>
        <h3>Dados atuais - 20:07</h3>
        <main>
          <div>
            <p>Temperatura</p>
            <aside>
              <svg />
              <span>23º</span>
              <svg />
              <span>23º</span>
            </aside>
          </div>
          <div>
            <p>Sensação térmica</p>
            <aside>
              <svg />
              <span>23º</span>
            </aside>
          </div>
          <div>
            <p>Chuva</p>
            <aside>
              <svg />
              <span>8mm</span>
            </aside>
          </div>
          <div>
            <p>Vento</p>
            <aside>
              <svg />
              <span>SW - 5km/h</span>
            </aside>
          </div>
          <div>
            <p>Sol</p>
            <aside>
              <span>06:35</span>
              <svg />
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
              <svg />
              <span>Bom</span>
            </aside>
          </div>
          <div>
            <p>Nitrogênio</p>
            <aside>
              <span>Bom</span>
            </aside>
          </div>
          <div>
            <p>Ozônio</p>
            <aside>
              <span>Bom</span>
            </aside>
          </div>
          <div>
            <p>Dióxido de enxofre</p>
            <aside>
              <span>Bom</span>
            </aside>
          </div>
          <div>
            <p>Partículas finas</p>
            <aside>
              <span>Bom</span>
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
