import { MapPin } from 'phosphor-react'
import { useContext } from 'react'
import { localsContext } from '../../../../context/localsContext'
import { LocalsContainer, Locals } from './styles'

export function LocalsFetched() {
  const { infoLocations, GetWeatherInformation } = useContext(localsContext)
  function handleGetWeatherInformation(lat: number, lon: number) {
    GetWeatherInformation(lat, lon)
  }

  return (
    <LocalsContainer>
      {infoLocations &&
        infoLocations.map((location) => {
          return (
            <Locals
              key={`${location.lat}${location.lon}`}
              onClick={() =>
                handleGetWeatherInformation(location.lat, location.lon)
              }
            >
              <main>
                <div>
                  <h3>{location.name}</h3>
                  <p>{`Pais: ${location.country}`}</p>
                </div>
                <p>{location.state}</p>
              </main>
              <span>
                <MapPin size={32} weight="fill" />
              </span>
            </Locals>
          )
        })}
    </LocalsContainer>
  )
}
