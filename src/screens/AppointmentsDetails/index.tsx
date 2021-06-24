import React from 'react';
import { Fontisto } from '@expo/vector-icons';
import Background from '../../components/Background';
import { Header } from '../../components/Header';
import { BorderlessButton } from 'react-native-gesture-handler';

import {style} from  './styles';
import { theme } from '../../global/styles/theme';

export function AppointmentsDetails (){
  return(
    <Background>
      <Header
        title='Detalhes'
        action={
          <BorderlessButton >
            <Fontisto
              name='share'
              size={24}
              color={theme.colors.primary}
            />
          </BorderlessButton>
        }
      />
    </Background>
  );
}
