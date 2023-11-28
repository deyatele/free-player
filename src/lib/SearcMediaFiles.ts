import {Platform} from 'react-native';
import {check, PERMISSIONS, request, RESULTS} from 'react-native-permissions';
import RNFS from 'react-native-fs';
import {
  checkManagePermission,
  requestManagePermission,
} from 'manage-external-storage';
import {
  ReturnSearchMP3Type,
  StatResult,
  StatResultWhithFolders,
} from '../interface';
import {dataToJS} from './datoToJSONstring';
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

export const SearcMediaFiles = async (): Promise<
  ReturnSearchMP3Type | boolean
> => {
  const permmission = await hasPermissions();
  if (!permmission) return false;

  const paths = await RNFS.getAllExternalFilesDirs();
  let out: ReturnSearchMP3Type = {result: [], resultWithFolders: {}};
  for await (const path of paths) {
    const pathRoot = path.split('/Android')[0];
    const {result, resultWithFolders} = await searchMP3(pathRoot);
    out.result = [...out.result, ...result];
    out.resultWithFolders = {...out.resultWithFolders, ...resultWithFolders};
  }

  return out;
};

async function searchMP3(pathStart: string): Promise<ReturnSearchMP3Type> {
  const extension = ['mp3', 'wav', 'aac', 'wma', 'ogg', 'm4a'];
  const result: StatResult[] = [];
  const pathFolder = pathStart.split('/').at(-1) || '';
  let resultWithFolders: StatResultWhithFolders = {};
  const dirStat = await RNFS.stat(pathStart);
  if (dirStat.isDirectory()) {
    const dir = await RNFS.readDir(pathStart);
    for await (const {path} of dir) {
      if (path === `${pathStart}/Android` || path === `${pathStart}/MIUI` || path === `${pathStart}/Pistures` || path === `${pathStart}/DCIM`) {
        continue;
      }
      const searchArr: ReturnSearchMP3Type = await searchMP3(path);
      if (searchArr.result.length) {
        result.push(...searchArr.result);
      }
      !resultWithFolders[pathFolder] && (resultWithFolders[pathFolder] = []);
      resultWithFolders[pathFolder].push(searchArr.resultWithFolders);
    }
  }
  if (dirStat.isFile()) {
    const extFile = dirStat.path.split('/').at(-1)?.split('.').at(-1);
    if (extFile && extension.includes(extFile)) {
      const {ctime, mtime, isDirectory, isFile, name, ...arg} = dirStat;
      const rusultObj = {
        name: name ? name : '',
        ctime: ctime.toString(),
        mtime: mtime.toString(),
        isDirectory: isDirectory(),
        isFile: isFile(),
        ...arg,
      };
      result.push(rusultObj);
      resultWithFolders = rusultObj;
    }
  }

  return {result, resultWithFolders};
}
