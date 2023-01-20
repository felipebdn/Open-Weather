import { ShearchLocalsContainer } from './styles'
import * as zod from 'zod'
import { useForm } from 'react-hook-form'

interface ShearchLocalsProps {
  shearchLocation: (data: string) => void
}

const ShearchFormDataSchema = zod.object({
  query: zod.string(),
})

type ShearchFormDataType = zod.infer<typeof ShearchFormDataSchema>
export function ShearchLocals({ shearchLocation }: ShearchLocalsProps) {
  const { handleSubmit, register } = useForm<ShearchFormDataType>()

  function fetchStrings({ query }: ShearchFormDataType) {
    shearchLocation(query)
  }
  return (
    <ShearchLocalsContainer onSubmit={handleSubmit(fetchStrings)}>
      <input type="text" {...register('query')} />
    </ShearchLocalsContainer>
  )
}
