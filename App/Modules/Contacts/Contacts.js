import {ScrollView, StyleSheet, Text} from 'react-native';

export default function LinksScreen () {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text>Contacts</Text>

    </ScrollView>
  );
}

const styles = StyleSheet.create ({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
