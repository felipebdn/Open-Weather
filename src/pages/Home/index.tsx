import { useCallback, useState } from 'react'
import { env } from '../../environment'
import { api } from '../../lib/axios'
import { ShearchLocals } from './components/ShearchLocals'
import { HomeContainer } from './styles'

interface infoLocationsProps {
  name: string
  pt?: string
  lat: number
  lon: number
  country: string
  state?: string
}

export function Home() {
  const [infoLocations, setInfoLocations] = useState<infoLocationsProps[]>(
    [] as infoLocationsProps[],
  )

  const ShearchLocation = useCallback(async (dataInput: string) => {
    try {
      const res = await api.get('geo/1.0/direct?', {
        params: {
          q: dataInput,
          limit: 5,
          appid: env.REACT_APP_TOKEN_OPEN_WEATHER,
        },
      })
      const data: infoLocationsProps = res.data.map()

      setInfoLocations(data)
    } finally {
      console.log('terminou')
    }
  }, [])

  return (
    <HomeContainer>
      <ShearchLocals shearchLocation={ShearchLocation} />
      {infoLocations.map((location) => {
        return (
          <div key={`${location.lat}${location.lon}`}>
            <h3>{location.name}</h3>
            <span>{location.pt}</span>
            <p>{`Latitude: ${location.lat}`}</p>
            <p>{`Longitude: ${location.lon}`}</p>
            <p>{`País: ${location.lat}`}</p>
            <p>{`Estado: ${location.state}`}</p>
          </div>
        )
      })}
    </HomeContainer>
  )
}
