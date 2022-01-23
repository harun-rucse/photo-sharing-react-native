import React from 'react';
import { ImageBackground, StyleSheet, Text, View } from 'react-native';
import theme from '../../assets/themes';

const CardHeader = ({ album }) => {
  return (
    <ImageBackground source={album.background} style={styles.backgroundImage}>
      <View style={styles.imageContentContainer}>
        <View>
          <Text style={styles.title}>{album.title}</Text>
          <Text style={styles.subTitle}>{`Created By ${album.user}`}</Text>
        </View>
        <View>
          <Text style={styles.imageQty}>102 photos</Text>
        </View>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  backgroundImage: {
    resizeMode: 'cover',
    overflow: 'hidden',
    height: theme.imageHeight.l,
    marginTop: theme.spacing.m,
    marginHorizontal: theme.spacing.m,
    padding: theme.spacing.m,
    borderRadius: theme.borderRadius.m,
    justifyContent: 'flex-end',
  },
  imageContentContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
  },
  title: {
    ...theme.textVariants.h1,
    color: theme.colors.white,
  },
  subTitle: {
    ...theme.textVariants.body2,
    color: theme.colors.white,
  },
  imageQty: {
    ...theme.textVariants.body3,
    color: theme.colors.white,
  },
});

export default CardHeader;
