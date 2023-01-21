import { useCallback, useState } from 'react'
import { env } from '../../environment'
import { api } from '../../lib/axios'
import { ShearchLocals } from './components/ShearchLocals'
import { HomeContainer, LocalsContainer } from './styles'

interface infoLocationsProps {
  name: string
  local_names?: {
    pt?: string
  }
  lat: number
  lon: number
  country: string
  state?: string
}

export function Home() {
  const [infoLocations, setInfoLocations] = useState<infoLocationsProps[]>([])

  const ShearchLocation = useCallback(async (dataInput: string) => {
    try {
      const res = await api.get('geo/1.0/direct?', {
        params: {
          q: dataInput,
          limit: 5,
          appid: env.REACT_APP_TOKEN_OPEN_WEATHER,
        },
      })

      setInfoLocations(res.data)
    } finally {
      console.log('terminou')
    }
  }, [])

  return (
    <HomeContainer>
      <ShearchLocals shearchLocation={ShearchLocation} />
      {infoLocations.map((location) => {
        return (
          <LocalsContainer key={`${location.lat}${location.lon}`}>
            <main>
              <div>
                <h3>
                  {!location.local_names
                    ? 'not found'
                    : location.local_names.pt}
                </h3>
                <p>{`País: ${location.country}`}</p>
              </div>
              <p>{location.state}</p>
            </main>
            <span>
              <img src="./assets/images/city-pin.png" alt="" />
            </span>
          </LocalsContainer>
        )
      })}
    </HomeContainer>
  )
}
