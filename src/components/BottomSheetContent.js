import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import theme from '../../assets/themes';

const BottomSheetContent = ({ handleClose }) => {
  return (
    <View style={styles.contentWrapper}>
      <TouchableOpacity
        onPress={() => alert('Create a new album!')}
        style={styles.largeBtn}
      >
        <Text style={styles.btnText}>Create a new album</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={handleClose} style={styles.smallBtn}>
        <Text style={styles.btnText}>Cancel</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  contentWrapper: {
    height: 250,
    backgroundColor: theme.colors.lightGray,
    padding: theme.spacing.m,
  },
  largeBtn: {
    marginTop: theme.spacing.m,
    marginHorizontal: theme.spacing.m,
    paddingVertical: theme.spacing.l,
    backgroundColor: theme.colors.white,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: theme.borderRadius.m,
    shadowColor: theme.colors.black,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 4,
  },
  btnText: {
    ...theme.textVariants.h2,
  },
  smallBtn: {
    marginTop: theme.spacing.m,
    marginHorizontal: theme.spacing.m,
    paddingVertical: theme.spacing.m,
    backgroundColor: theme.colors.white,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: theme.borderRadius.m,
    shadowColor: theme.colors.black,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 4,
  },
});

export default BottomSheetContent;
