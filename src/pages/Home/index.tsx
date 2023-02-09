import { useCallback, useContext, useEffect, useState } from 'react'
import { localsContext } from '../../context/localsContext'
import { LocalsFetched } from './components/LocalsFetched'
import { ShearchLocals } from './components/ShearchLocals'
import { WeatherInformation } from './components/WeatherInformation'
import { HomeContainer, NeverLocation } from './styles'

export function Home() {
  const { GetWeatherInformation, isCoordinates } = useContext(localsContext)
  const [gpsLocation, setGpsLocation] = useState(false)
  const [errorGps, setErrorGps] = useState(0)

  const getGpsLocation = useCallback(() => {
    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          GetWeatherInformation(
            position.coords.latitude,
            position.coords.longitude,
          )
        },
        (error) => {
          setErrorGps(error.code)
          setGpsLocation(true)
        },
      )
    } else {
      setGpsLocation(true)
      alert('seu navegador não tem suporte ao serviço de geolocalização')
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  useEffect(() => {
    getGpsLocation()
  }, [getGpsLocation])

  function errorTyping(n: number) {
    switch (n) {
      case 1:
        return (
          <h4>Não foi possivel obter permição de acesso sua localização </h4>
        )
      case 2:
        return <h4>Erro interno na busta por sua localização </h4>
      case 3:
        return <h4>Tempo excedido para adquirir sua geolocalização </h4>
    }
  }

  return (
    <HomeContainer>
      <ShearchLocals />
      {gpsLocation && (
        <NeverLocation>
          {errorTyping(errorGps)}
          <p>Pesquise pelo nome da sua cidade na barra de pesquisa</p>
        </NeverLocation>
      )}
      {isCoordinates ? <WeatherInformation /> : <LocalsFetched />}
    </HomeContainer>
  )
}
