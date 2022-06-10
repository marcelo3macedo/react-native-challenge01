import React from 'react';
import './translations/i18n';
import { StatusBar } from 'react-native';
import { Home } from './src/pages/Home';

export default function App() {
  return (
    <>
      <StatusBar 
        barStyle="light-content" 
        translucent 
        backgroundColor="transparent" 
      />
      <Home />
    </>
  )
}