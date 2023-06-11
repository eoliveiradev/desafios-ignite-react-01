import { Box, Button, Stack, useToast } from '@chakra-ui/react'
import { Controller, useForm } from 'react-hook-form'
import { useState } from 'react'
import { useMutation, useQueryClient } from 'react-query'

import { FileInput } from '../Input/FileInput'
import { TextInput } from '../Input/TextInput'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { postImage } from '../../services/images'

interface FormAddImageProps {
  closeModal: () => void
}

const FormAddImageSchema = z.object({
  image: z.custom((value: any) => {
    const acceptedFormats = ['image/jpeg', 'image/png']
    const maxSize = 10 * 1024 * 1024 // 10MB

    return Boolean(value)
      && acceptedFormats.includes(value.type)
      && value.size < maxSize

  }, {
    message: 'Arquivo inválido. Selecione uma imagem válida (jpg ou png), com tamanho máximo de 10MB'
  }),
  title: z.string()
    .min(5, { message: 'Mínimo de 2 caracteres' })
    .max(25, { message: 'Máximo de 25 caracteres' }),
  description: z.string()
    .min(10, { message: 'Mínimo de 5 caracteres' })
    .max(250, { message: 'Máximo de 250 caracteres' })
})

export type FormAddImagesSchemaType = z.infer<typeof FormAddImageSchema>

export function FormAddImage({ closeModal }: FormAddImageProps): JSX.Element {
  const [imageUrl, setImageUrl] = useState('')
  const [localImageUrl, setLocalImageUrl] = useState('')

  const toast = useToast()
  const queryClient = useQueryClient()

  const onError = (): void => {
    toast({
      title: 'Erro ao enviar imagem',
      description: 'Ocorreu um erro ao enviar a sua imagem',
      status: 'error',
      duration: 3000,
      isClosable: true,
    })
  }

  const onSuccess = (): void => {
    toast({
      title: 'Imagem enviada',
      description: 'Sua imagem foi enviada com sucesso',
      status: 'success',
      duration: 3000,
      isClosable: true,
    })

    queryClient.invalidateQueries('images')
  }

  const { mutate: post, isLoading } = useMutation(
    {
      mutationKey: 'post-images',
      mutationFn: postImage,
      onError,
      onSuccess,
      onSettled: () => {
        setImageUrl('')
        setLocalImageUrl('')
        closeModal()
        reset()
      }
    },
  )

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, ...formState },
    control,
    setError,
    trigger
  } = useForm<FormAddImagesSchemaType>({
    resolver: zodResolver(FormAddImageSchema)
  })

  const onSubmit = async (data: FormAddImagesSchemaType): Promise<void> => {
    if (!imageUrl) return onError()

    post({
      description: data.description,
      title: data.title,
      url: imageUrl
    })
  }

  return (
    <Box as="form" width="100%" onSubmit={handleSubmit(onSubmit)}>
      <Stack spacing={4}>
        <Controller
          name="image"
          control={control}
          render={({ field: { onChange } }) => (
            <FileInput
              setImageUrl={setImageUrl}
              localImageUrl={localImageUrl}
              setLocalImageUrl={setLocalImageUrl}
              setError={setError}
              trigger={trigger}
              name="image"
              error={errors.image ? { type: 'validate', ...errors.image } : undefined}
              onChange={(image) => onChange(image)}
            />
          )}
        />

        <TextInput
          placeholder="Título da imagem..."
          error={errors.title ? { type: 'validate', ...errors.title } : undefined}
          {...register('title')}
        />

        <TextInput
          placeholder="Descrição da imagem..."
          error={errors.description ? { type: 'validate', ...errors.description } : undefined}
          {...register('description')}
        />
      </Stack>

      <Button
        my={6}
        isLoading={formState.isSubmitting || isLoading}
        isDisabled={formState.isSubmitting || isLoading}
        type="submit"
        w="100%"
        py={6}
      >
        Enviar
      </Button>
    </Box>
  )
}
