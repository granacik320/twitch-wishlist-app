import React from 'react';
import {AuthProvider} from 'react-auth-kit'
import RoutesComponent from './Routes';
import {MantineProvider, createTheme} from '@mantine/core';
import '@mantine/notifications/styles.css';
import {Notifications} from "@mantine/notifications";
import '@mantine/core/styles.css';

const theme = createTheme({
  primaryColor: "cyan",
  primaryShade: 4,
  fontFamily: 'Verdana, sans-serif',
});
function App() {
  return (
    <AuthProvider
      authName={"_auth"} authType={"cookie"}
    >
      <MantineProvider theme={theme} defaultColorScheme={"dark"}>
        <RoutesComponent/>
        <Notifications />
      </MantineProvider>
    </AuthProvider>
  );
}

export default App;
