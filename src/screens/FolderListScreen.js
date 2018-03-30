import React from 'react';
import { StyleSheet, View } from 'react-native';
import FolderList from '../components/FolderList';
import CircleButton from '../elements/CircleButton';

class FolderListScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <FolderList />
        <CircleButton>+</CircleButton>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
  },
});

export default FolderListScreen;
