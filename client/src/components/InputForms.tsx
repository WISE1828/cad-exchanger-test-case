import { Button, Stack, TextField } from '@mui/material'
import { FC } from 'react'
import { useForm } from 'react-hook-form'
import { useContact } from '../hooks/useContact'

interface IInputForms {
  name: string
  email: string
  message: string
}

interface IInputFormsProps {
  onSuccess: (data: string) => void
}

const InputForms: FC<IInputFormsProps> = ({ onSuccess }) => {
  const { register, handleSubmit, formState: { errors } } = useForm<IInputForms>()
  const { mutateAsync } = useContact()

  const onSubmit = handleSubmit(async (data) => {
    const response = await mutateAsync(data)
    onSuccess(response.data)
  })


  return (
    <Stack
      component='form'
      spacing={2}
      noValidate
      autoComplete="off"
      onSubmit={onSubmit}
      sx={{
        width: '20rem'
      }}
    >
      <TextField
        required
        error={!!errors.name}
        helperText={errors.name?.message}
        label="Name"
        {...register('name', { required: true })}
      />
      <TextField
        required
        error={!!errors.email}
        helperText={errors.email?.message}
        label="Email"
        {...register('email', { required: true })}
      />
      <TextField
        required
        error={!!errors.message}
        helperText={errors.message?.message}
        label="Message"
        multiline
        rows={4}
        {...register('message', { required: true })}
      />
      <Button
        variant='contained'
        type='submit'
        sx={{
          display: "block",
          margin: "0 auto",
          marginTop: "2rem",
          marginBottom: "2rem",
          backgroundColor: 'black',
          color: 'white',
          '&:hover': {
            backgroundColor: 'rgb(27, 27, 27)',
          },
        }}
      >
        Contact us
      </Button>
    </Stack>
  )
}

export default InputForms
