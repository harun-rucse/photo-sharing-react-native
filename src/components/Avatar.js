import React from 'react';
import { Image, StyleSheet, View } from 'react-native';
import theme from '../../assets/themes';

const Avatar = ({ avatars }) => {
  return (
    <View>
      {avatars.map((avatar, index) => (
        <Image
          key={index}
          source={avatar.image}
          style={[
            styles.avatarStyle,
            { zIndex: index, marginLeft: index * 18 },
            avatars.length - 1 !== index && {
              position: 'absolute',
            },
          ]}
        />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  avatarStyle: {
    resizeMode: 'cover',
    height: theme.imageHeight.xs,
    width: theme.imageHeight.xs,
    borderRadius: theme.imageHeight.xs / 2,
    borderWidth: 2,
    borderColor: theme.colors.white,
  },
});

export default Avatar;
