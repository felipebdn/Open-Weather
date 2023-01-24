import { MapPin } from 'phosphor-react'
import { useCallback, useState } from 'react'
import { env } from '../../environment'
import { api } from '../../lib/axios'
import { ShearchLocals } from './components/ShearchLocals'
import { HomeContainer, Locals, LocalsContainer } from './styles'
interface infoLocationsProps {
  name: string
  lat: number
  lon: number
  country: string
  state?: string
}

export function Home() {
  const [infoLocations, setInfoLocations] = useState<infoLocationsProps[]>([])

  const ShearchLocation = useCallback(async (dataInput: string) => {
    const res = await api.get('geo/1.0/direct?', {
      params: {
        q: dataInput,
        limit: 5,
        appid: env.REACT_APP_TOKEN_OPEN_WEATHER,
      },
    })

    res.data.map((local: any) => {
      const data: infoLocationsProps = {
        name: !local.local_names ? local.name : local.local_names.pt,
        lat: local.lat,
        lon: local.lon,
        country: local.country,
        state: local.state,
      }
      setInfoLocations((state) => [...state, data])
      return null
    })
    const data = new Map()
    infoLocations.forEach((element: infoLocationsProps) => {
      if(!data.has(element.name))
    })
  }, [])

  return (
    <HomeContainer>
      <ShearchLocals shearchLocation={ShearchLocation} />
      <LocalsContainer>
        {infoLocations.map((location) => {
          return (
            <Locals key={`${location.lat}${location.lon}`}>
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
    </HomeContainer>
  )
}
