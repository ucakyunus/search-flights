export const isEmptyObject = <T extends object>(obj: T | null | undefined): boolean => {
  return !!obj && obj.constructor === Object && Object.keys(obj).length === 0;
};
