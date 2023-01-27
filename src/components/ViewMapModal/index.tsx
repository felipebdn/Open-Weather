import * as ToggleGroup from '@radix-ui/react-toggle-group'
import * as Dialog from '@radix-ui/react-dialog'
import { X } from 'phosphor-react'
import {
  Close,
  Content,
  HeaderModeal,
  Overlay,
  ToggleGroupRoot,
} from './styles'
import { useState } from 'react'

interface ViewMapModalProps {
  lat: number
  lon: number
  name: string
}

export function ViewMapModal({ lat, lon, name }: ViewMapModalProps) {
  const [maptype, setMaptype] = useState('roadmap')

  return (
    <Dialog.Portal>
      <Overlay />

      <Content>
        <HeaderModeal>
          <h2>{name}</h2>
          <ToggleGroupRoot
            type="single"
            defaultValue="left"
            aria-label="Text alignment"
          >
            <ToggleGroup.Item
              value="left"
              aria-label="Left aligned"
              onClick={() => setMaptype('roadmap')}
            >
              Padrão
            </ToggleGroup.Item>
            <ToggleGroup.Item
              value="center"
              aria-label="Center aligned"
              onClick={() => setMaptype('satellite')}
            >
              Satélite
            </ToggleGroup.Item>
            <ToggleGroup.Item
              value="right"
              aria-label="Right aligned"
              onClick={() => setMaptype('hybrid')}
            >
              Híbrido
            </ToggleGroup.Item>
          </ToggleGroupRoot>
          <Close>
            <X size={32} weight="bold" />
          </Close>
        </HeaderModeal>
        <img
          src={`https://maps.googleapis.com/maps/api/staticmap?center=${lat},${lon}&zoom=14&size=800x600&maptype=${maptype}&key=AIzaSyBJKYv48nuVQ5A2tcZXh-XSpLUi1pkNkAM`}
          alt=""
        />
      </Content>
    </Dialog.Portal>
  )
}
