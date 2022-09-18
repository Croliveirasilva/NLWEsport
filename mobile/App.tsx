import { StatusBar } from 'expo-status-bar';

import {
  useFonts,
  Inter_400Regular,
  Inter_600SemiBold,
  Inter_700Bold,
  Inter_900Black
} from '@expo-google-fonts/inter';

import { Home } from './src/screens/Home';


import { Backgrount } from './src/componetes/Backgrount';
import { Loading } from './src/componetes/Loading';
import React from 'react';
import { Routes } from './src/routes';

export default function App() {
  const [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_600SemiBold,
    Inter_700Bold,
    Inter_900Black
  });
  return (
    <Backgrount >
      <StatusBar
        style='light'
        backgroundColor="transparent"
        translucent


      />

      {fontsLoaded ? <Routes /> : <Loading />}

    </Backgrount>
  );
}


