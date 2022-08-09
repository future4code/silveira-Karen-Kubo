import React from 'react'
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';
import Stack from '@mui/material/Stack';

export default function Start(props) {
  return (
    <Stack sx={{ width: '100%' }} spacing={2}>
      <Alert severity="success" onClose={props.close}>
        <AlertTitle>Sucesso</AlertTitle>
        A minhoca iniciou sua jornada!
      </Alert>
    </Stack>
  )
}
