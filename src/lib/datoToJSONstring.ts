export const dataToJS = (data: [] | {}, count = 2) => {
  return JSON.stringify(data, null, count);
};
