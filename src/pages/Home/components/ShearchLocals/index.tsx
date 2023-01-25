import { ShearchLocalsContainer } from './styles'
import * as zod from 'zod'
import { useForm } from 'react-hook-form'
import { useContext } from 'react'
import { localsContext } from '../../../../context/localsContext'

const ShearchFormDataSchema = zod.object({
  query: zod.string(),
})
type ShearchFormDataType = zod.infer<typeof ShearchFormDataSchema>

export function ShearchLocals() {
  const { ShearchLocation } = useContext(localsContext)
  const { handleSubmit, register } = useForm<ShearchFormDataType>()

  function fetchStrings({ query }: ShearchFormDataType) {
    ShearchLocation(query)
  }
  return (
    <ShearchLocalsContainer onSubmit={handleSubmit(fetchStrings)}>
      <input type="text" {...register('query')} />
    </ShearchLocalsContainer>
  )
}
