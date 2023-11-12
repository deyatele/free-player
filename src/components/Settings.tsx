import {View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native';

type Props = {};

export const Settings = (props: Props) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.containerPlayRandom}>
        <Image source={require('../assets/play.png')} style={styles.btnPlay} />
        <Text style={styles.txtPlay}>В случайном порядке</Text>
      </TouchableOpacity>
      <View style={styles.containerPlayRandom}>
        <TouchableOpacity>
          <Image
            source={require('../assets/sort-white.png')}
            style={styles.imgSetting}
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image
            source={require('../assets/filter-white.png')}
            style={styles.imgSetting}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  containerPlayRandom: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  txtPlay: {
    color: 'white',
  },
  btnPlay: {
    height: 40,
    width: 40,
  },
  imgSetting: {
    height: 20,
    width: 20,
  },
});
