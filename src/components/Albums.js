import Feather from '@expo/vector-icons/Feather';
import React, { useLayoutEffect, useRef } from 'react';
import { ScrollView, StyleSheet, TouchableOpacity, View } from 'react-native';
import BottomSheet from 'reanimated-bottom-sheet';
import albums from '../../assets/data/albumPage';
import themes from '../../assets/themes';
import BottomSheetContent from './BottomSheetContent';
import Card from './Card';
import Separator from './Separator';

const Albums = ({ navigation, navigation: { setOptions } }) => {
  const sheetRef = useRef();

  useLayoutEffect(() => {
    setOptions({
      headerRight: () => (
        <TouchableOpacity onPress={openBottomSheet}>
          <View style={styles.addBtn}>
            <Feather name="plus" size={16} color={themes.colors.white} />
          </View>
        </TouchableOpacity>
      ),
    });
  });

  const openBottomSheet = () => {
    sheetRef.current.snapTo(0);
  };

  const closeBottomSheet = () => {
    sheetRef.current.snapTo(1);
  };

  const renderBottomSheetContent = () => (
    <BottomSheetContent handleClose={closeBottomSheet} />
  );

  return (
    <>
      <ScrollView>
        <View style={styles.albumContainer}>
          {albums.map((album, index) => (
            <View key={index}>
              <Card album={album} navigation={navigation} />
              {index == 1 && <Separator />}
            </View>
          ))}
        </View>
      </ScrollView>
      <BottomSheet
        ref={sheetRef}
        snapPoints={[250, 0]}
        initialSnap={1}
        borderRadius={10}
        renderContent={renderBottomSheetContent}
      />
    </>
  );
};

const styles = StyleSheet.create({
  albumContainer: {
    marginBottom: themes.spacing.l,
  },
  addBtn: {
    backgroundColor: themes.colors.primary,
    width: 32,
    height: 32,
    borderRadius: 16,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: themes.spacing.m,
  },
});

export default Albums;
