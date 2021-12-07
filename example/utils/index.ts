export const isWx = () => {
  return navigator.userAgent.toLowerCase().indexOf('micromessenger') !== -1;
};
