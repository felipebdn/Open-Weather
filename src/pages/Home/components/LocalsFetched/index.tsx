import { useContext } from 'react'
import { localsContext } from '../../../../context/localsContext'
import { LocalsContainer, Locals, ButtonMapContainer } from './styles'
import * as Dialog from '@radix-ui/react-dialog'
import { ViewMapModal } from '../../../../components/ViewMapModal'

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
            <Locals key={`${location.lat}${location.lon}`}>
              <main
                onClick={() =>
                  handleGetWeatherInformation(location.lat, location.lon)
                }
              >
                <div>
                  <h3>{location.name}</h3>
                  <p>{`Pais: ${location.country}`}</p>
                </div>
                <p>{location.state}</p>
              </main>
              <Dialog.Root>
                <Dialog.Trigger asChild>
                  <ButtonMapContainer>
                    <img
                      src={`https://maps.googleapis.com/maps/api/staticmap?center=${location.lat},${location.lon}&zoom=14&size=400x400&key=AIzaSyBJKYv48nuVQ5A2tcZXh-XSpLUi1pkNkAM`}
                      alt=""
                    />
                  </ButtonMapContainer>
                </Dialog.Trigger>

                <ViewMapModal
                  name={location.name}
                  lat={location.lat}
                  lon={location.lon}
                />
              </Dialog.Root>
            </Locals>
          )
        })}
    </LocalsContainer>
  )
}
