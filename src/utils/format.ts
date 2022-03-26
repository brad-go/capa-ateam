/* eslint-disable import/prefer-default-export */
export const countSelected = (arr: string[]) => {
  return arr.length ? `(${arr.length})` : '';
};

export const listItemWithComma = (list: string[]) => {
  return list.join(', ');
};
