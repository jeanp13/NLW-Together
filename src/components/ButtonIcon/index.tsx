import React from "react";
import {RectButton, RectButtonProps} from 'react-native-gesture-handler';
import { View, Text, Image } from "react-native";

import discordIcon from '../../assets/discord.png';
import { style } from './styles';

type Props = RectButtonProps & {
  title: string
}
export function ButtonIcon({title, ...rest}: Props) {
  return (
    <RectButton
      style={style.container}
      {...rest}
    >
      <View style={style.iconWrapper}>
      <Image source={discordIcon} style={style.icon} />
      </View>

      <Text style={style.title}>{title}</Text>

    </RectButton>
  );
};
