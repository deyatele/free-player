import {Platform} from 'react-native';
import {check, PERMISSIONS, request, RESULTS} from 'react-native-permissions';
import RNFS from 'react-native-fs';
import {
  checkManagePermission,
  requestManagePermission,
} from 'manage-external-storage';
import {dataToJS} from './datoToJSONstring';
import { ReturnSearchMP3Type } from '../interface';
const hasPermissions = async () => {
  if (Platform.OS === 'android') {
    let hasPermission = await checkManagePermission();
    if (!hasPermission) {
      hasPermission = await requestManagePermission();
    }

    return hasPermission;
  }
  if (Platform.OS === 'ios') {
    let hasPermission =
      (await check(PERMISSIONS.IOS.MEDIA_LIBRARY)) === RESULTS.GRANTED;
    if (!hasPermission) {
      hasPermission =
        (await request(PERMISSIONS.IOS.MEDIA_LIBRARY)) === RESULTS.GRANTED;
    }

    return hasPermission;
  }

  return false;
};

export const SearcMediaFiles = async () => {
  const permmission = await hasPermissions();
  if (!permmission) return console.log(permmission);
  const path = await RNFS.getAllExternalFilesDirs();
  const innerSDCardDir = path[0].split('/Android')[0];
  const SDCardDir = path[1].split('/Android')[0];
  const extension = ['mp3', 'wav', 'aac', 'wma', 'ogg', 'm4a'];

 

  const searchMP3 = async (pathStart: string): Promise<ReturnSearchMP3Type> => {
    const result: RNFS.StatResult[] = [];
    const pathFolder = pathStart.split('/').at(-1) || '';
    let resultWithFolders: any = {[pathFolder]: []};
    try {
      const dirStat = await RNFS.stat(pathStart);
      if (dirStat.isDirectory()) {
        const dir = await RNFS.readDir(pathStart);
        for await (const {path} of dir) {
          if (path === `${pathStart}/Android`) {
            continue;
          }
          const searchArr: ReturnSearchMP3Type = await searchMP3(path);
          if (searchArr.result.length) {
            result.push(...searchArr.result);
            resultWithFolders[pathFolder].push(searchArr.resultWithFolders);
          }
        }
      }
      if (dirStat.isFile()) {
        const extFile = dirStat.path.split('/').at(-1)?.split('.').at(-1);
        if (extFile && extension.includes(extFile)) {
          result.push(dirStat);
          resultWithFolders = dirStat;
        }
      }
    } catch (e) {
      console.log(e);
    }
    return {result, resultWithFolders};
  };

  const innerSD = await searchMP3(innerSDCardDir);
  const exSD = await searchMP3(SDCardDir);
  return [innerSD, exSD] 
};
