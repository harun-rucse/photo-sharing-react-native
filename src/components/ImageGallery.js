import React from 'react';
import { FlatList, Image, StyleSheet, Text, View } from 'react-native';
import theme from '../../assets/themes';

const ImageList = ({ image }) => {
  return <Image source={image.background} style={styles.galleryImage} />;
};

const ImageGallery = ({ images }) => {
  return (
    <View style={styles.galleryContainer}>
      <Text style={styles.galleryText}>Photos</Text>
      <FlatList
        data={images}
        keyExtractor={(image) => image.id}
        numColumns={3}
        scrollEnabled={false}
        renderItem={({ item }) => <ImageList image={item} />}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  galleryContainer: {
    marginTop: theme.spacing.m,
    marginHorizontal: theme.spacing.m,
    alignItems: 'center',
    marginBottom: theme.spacing.l,
  },
  galleryText: {
    ...theme.textVariants.body2,
    color: theme.colors.gray,
    marginBottom: 4,
  },
  galleryImage: {
    height: theme.imageHeight.l,
    width: theme.imageHeight.l,
    margin: 2,
  },
});

export default ImageGallery;
