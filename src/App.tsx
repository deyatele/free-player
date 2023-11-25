import React, {useEffect} from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import {Header} from './components/Header';
import {Main} from './components/Main';
import {Song} from 'react-native-get-music-files/lib/typescript/src/NativeTurboSongs';
import {SearcMediaFiles} from './lib/SearcMediaFiles';
import {ReturnSearchMP3Type} from './interface';
import {ProvaiderStore} from './state/provaiderStore';

function App(): JSX.Element {
  const [result, setResult] = React.useState<Song[]>();
  const [mediaFiles, setMediaFiles] = React.useState<
    ReturnSearchMP3Type[] | []
  >([]);

  useEffect(() => {
    (async () => {
      const response = await SearcMediaFiles();
      if (response) setMediaFiles(response);
    })();
  }, []);

  return (
    <ProvaiderStore>
      <SafeAreaView style={[styles.app]}>
        <Header />
        <Main />
      </SafeAreaView>
    </ProvaiderStore>
  );
}

const styles = StyleSheet.create({
  app: {
    flex: 1,
    margin: 10,
  },
  categories: {rowGap: 20},
  textCategories: {
    fontSize: 18,
    color: 'white',
    marginHorizontal: 15,
  },
  text: {
    color: 'white',
  },
  box: {
    marginVertical: 10,
  },
});

export default App;

//import {getAll, getAlbums, searchSongs} from 'react-native-get-music-files';

// const test = async () => {
//   const permissions = await hasPermissions();
//   if (permissions) {
//     const songsResults = await getAll({
//        limit: 500,
//       offset: 0,
//       coverQuality: 50,
//       minSongDuration: 1000,
//     });
//     if (typeof songsResults === 'string') {
//       return;
//     }
//     setResult(songsResults);
//     console.log(songsResults.length)
//     const albums = await getAlbums({
//       limit: 10,
//       offset: 0,
//       coverQuality: 50,
//       artist: 'Rihanna',
//     });
//     console.log(albums, 'Albums[]');
//     console.log(albums.length, 'Albums[]');
//     /*const songsResults = await searchSongs({
//       limit: 10,
//       offset: 0,
//       coverQuality: 50,
//       searchBy: 'what',
//     });
//     console.log(songsResults, 'SongResult[]');*/
//   }
// };
