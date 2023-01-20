import { useCallback, useState } from 'react'
import { env } from '../../environment'
import { api } from '../../lib/axios'
import { ShearchLocals } from './components/ShearchLocals'
import { HomeContainer, LocalsContainer } from './styles'

interface infoLocationsProps {
  name: string
  pt?: string
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
      res.data.map((local:any, i:number, state: any)=>{
        const data: infoLocationsProps = {
          name: local.name,
          pt: !local.local_names ? 'not found' : local.local_names.pt,
          lat: local.lat,
          lon: local.lon,
          country: local.country,
          state: local.state,
        }
        setInfoLocations((state)=>[...state, data])
        return state
      })

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
            <div>
              <h3>{`Cidade: ${location.pt}`}</h3>
              <p>{`País: ${location.country}`}</p>
            </div>
            <p>{location.name}</p>
            <p>{`Estado: ${location.state}`}</p>
            <div>
              <p>{`Latitude: ${location.lat}`}</p>
              <p>{`Longitude: ${location.lon}`}</p>
            </div>
          </LocalsContainer>
        )
      })}
    </HomeContainer>
  )
}
