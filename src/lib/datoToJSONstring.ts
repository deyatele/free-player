export const dataToJS = (data: [] | {}) => {
  return JSON.stringify(data, null, 2);
};
