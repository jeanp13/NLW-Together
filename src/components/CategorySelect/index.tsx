import React from "react";
import { ScrollView } from "react-native";
import {RectButton, RectButtonProps} from 'react-native-gesture-handler';

import { styles } from './styles';
import { categories } from '../../utils/categories';
import { Category } from "../Category";

type Props = {
  categorySelected: string;
  setCategory: (categoryId: string) => void;
  hasCheckBox?: false,
}

export function CategorySelect({ categorySelected, setCategory, hasCheckBox = false }: Props) {
  return (
   <ScrollView
    horizontal
    style={styles.container}
    showsHorizontalScrollIndicator={false}
    contentContainerStyle={{ paddingRight: 40}}
   >
     {
       categories.map(category => (
         <Category
          hasCheckBox={hasCheckBox}
          key={category.id}
          title={category.title}
          icon={category.icon}
          onPress={() => setCategory(category.id)}
          checked={category.id === categorySelected}
         />
       ))
     }
  </ScrollView>
  );
};
