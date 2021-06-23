import React from 'react';
import { useState } from 'react';
import { View, Text, Image } from 'react-native';
import { ButtonIcon } from '../../components/ButtonIcon';
import IllustrationImg from '../../assets/illustration.png';
import {style} from  './styles';
import { useNavigation } from '@react-navigation/native';

export function SignIn (){
  const navigation = useNavigation();

  function handleSingIn(){
    navigation.navigate('Home');
  }

  return(
      <View style={style.container}>
          <Image
          source={IllustrationImg}
          style={style.image}
        />

        <View style={style.content}>
          <Text style={style.title}>
            Conecte-se{'\n'}
            e organize suas{'\n'}
            jogatinas
          </Text>
          <Text style={style.subtitle}>
            Crie grupos para jogar seus games {'\n'}
            favoritos com seus amigos
          </Text>
          <ButtonIcon
            title='Entrar com Discord'
            onPress={handleSingIn}
          />
        </View>
      </View>
  );
}
