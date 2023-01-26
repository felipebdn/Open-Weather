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

interface ViewMapModalProps {
  lat: number
  lon: number
  name: string
}

export function ViewMapModal({ lat, lon, name }: ViewMapModalProps) {
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
            <ToggleGroup.Item value="left" aria-label="Left aligned">
              roadmap
            </ToggleGroup.Item>
            <ToggleGroup.Item value="center" aria-label="Center aligned">
              satellite
            </ToggleGroup.Item>
            <ToggleGroup.Item value="right" aria-label="Right aligned">
              hybrid
            </ToggleGroup.Item>
          </ToggleGroupRoot>
          <Close>
            <X size={32} weight="bold" />
          </Close>
        </HeaderModeal>
        <img
          src={`https://maps.googleapis.com/maps/api/staticmap?center=${lat},${lon}&zoom=14&size=800x600&maptype=hybrid&key=AIzaSyBJKYv48nuVQ5A2tcZXh-XSpLUi1pkNkAM`}
          alt=""
        />
      </Content>
    </Dialog.Portal>
  )
}
