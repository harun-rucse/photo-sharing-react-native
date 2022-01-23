import React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import backgroundImages from '../../assets/data/backgroundImages';
import theme from '../../assets/themes';
import Avatar from './Avatar';
import CardHeader from './CardHeader';
import ImageGallery from './ImageGallery';

const SharedAlbum = ({ route }) => {
  const { album } = route.params;

  return (
    <ScrollView>
      <CardHeader album={album} />

      <View style={styles.avatarContainer}>
        <Avatar avatars={album.avatars} />
        <Text style={styles.peopleQty}>{`${album.avatars.length} people`}</Text>
      </View>

      <ImageGallery images={backgroundImages} />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  avatarContainer: {
    backgroundColor: theme.colors.lightGray,
    marginTop: theme.spacing.m,
    marginHorizontal: theme.spacing.m,
    paddingHorizontal: theme.spacing.m,
    paddingVertical: theme.spacing.sm,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderRadius: theme.borderRadius.m,
  },
  peopleQty: {
    ...theme.textVariants.body3,
    color: theme.colors.gray,
    fontWeight: 'bold',
  },
});

export default SharedAlbum;
