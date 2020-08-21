import React from 'react';
import { Snackbar, Button } from '@material-ui/core';
import { useUpdateCheck } from 'react-update-notification';

export default function NotificationContainer() {
  let snackbar = false;
  const { status } = useUpdateCheck({ type: 'mount' });

  if (status === 'checking' || status === 'current') {
    return null;
  }

  const reloadPage = () => {
    caches.keys().then(async function(names) {
      await Promise.all(names.map(name => caches.delete(name)));
    });
    window.location.reload(true);
  }

  snackbar = true;
  return (
    <Snackbar
      open={snackbar}
      message='Uma atualização do app está disponível!'
      onClick={reloadPage}
      anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      action={
        <Button
          color='primary'
          size='small'
          onClick={reloadPage}
        >
          Atualizar
        </Button>
      }
    />
  );
};
