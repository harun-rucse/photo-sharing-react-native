import React from 'react';
import {
  ImageBackground,
  Pressable,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import theme from '../../assets/themes';
import Avatar from './Avatar';

const Card = ({ album, navigation }) => {
  return (
    <ImageBackground source={album.background} style={styles.imageBackground}>
      <Pressable
        onPress={() =>
          navigation.navigate('SharedAlbum', {
            album,
          })
        }
      >
        <View style={styles.imageContentContainer}>
          <View>
            <Text style={styles.title}>{album.title}</Text>
            <Text style={styles.subTitle}>{`Created By ${album.user}`}</Text>
          </View>
          <View>
            <Avatar avatars={album.avatars} />
          </View>
        </View>
      </Pressable>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  imageBackground: {
    resizeMode: 'cover',
    overflow: 'hidden',
    height: theme.imageHeight.s,
    marginTop: theme.spacing.m,
    marginHorizontal: theme.spacing.m,
    paddingHorizontal: theme.spacing.m,
    borderRadius: theme.borderRadius.m,
    justifyContent: 'center',
    elevation: 50,
  },
  imageContentContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  title: {
    ...theme.textVariants.h1,
    color: theme.colors.white,
  },
  subTitle: {
    ...theme.textVariants.body2,
    color: theme.colors.white,
  },
});

export default Card;
