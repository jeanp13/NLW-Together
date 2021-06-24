import React from 'react';
import { useState } from 'react';
import { View, FlatList, Text } from 'react-native'
import { ButtonAdd } from '../../components/ButtonAdd';
import { CategorySelect } from '../../components/CategorySelect';
import { ListHeader } from '../../components/ListHeader';
import { Appointment } from '../../components/Appointment';
import { ListDivider } from '../../components/ListDivider';
import Background from '../../components/Background';

import { Profile } from '../../components/Profile';
import { styles } from './styles';
import { useNavigation } from '@react-navigation/native';

export function Home(){
  const [category, setCategory] = useState('');

  const navigation = useNavigation();

  const appintments = [
    {
      id: '1',
      guild: {
        id: '1',
        name: 'Lendários',
        icon: null,
        owner: true,
      },
      category: '1',
      date: '22/06 às 20:40h',
      description: 'É hoje que vamos chegar ao challenger sem perder uma partida md10'
    },
    {
      id: '2',
      guild: {
        id: '1',
        name: 'Lendários',
        icon: null,
        owner: false,
      },
      category: '1',
      date: '22/06 às 20:40h',
      description: 'É hoje que vamos chegar ao challenger sem perder uma partida md10'
    },
  ]

  function hanldeCategorySelect(categoryId: string) {
    categoryId === category ? setCategory('') : setCategory(categoryId);
  }

  function handleAppointmentsDetails() {
    navigation.navigate('AppointmentsDetails');
  }

  return (
    <Background>
      <View style={styles.header}>
        <Profile />
        <ButtonAdd />
      </View>
      <View>
        <CategorySelect
         categorySelected={category}
         setCategory={hanldeCategorySelect}
        />
        <View style={styles.content}>
          <ListHeader
            title='Partidas agendadas'
            subtitle='Total 6'
          />
          <FlatList
            data={appintments}
            keyExtractor={item => item.id}
            renderItem={({item}) => (
              <Appointment
                data={item}
                onPress={handleAppointmentsDetails}
              />
            )}
            style={styles.matches}
            showsVerticalScrollIndicator={false}
            ItemSeparatorComponent={()=> <ListDivider />}
          />

        </View>
      </View>
    </Background>
  );
}
