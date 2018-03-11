export const upsert = (
  list: any = [],
  item: any,
  selector: any = (f: any) => f
) => {
  if (! Array.isArray(list)) {
    return [];
  }
  const index = list.map(selector).indexOf(selector(item));
  return index === -1
    ? [...list, item]
    : [
      ...list.slice(0, index),
      item,
      ...list.slice(index + 1)
    ];
};

export const remove = (
  list: Array<any> = [],
  item: any,
  selector: any = (f: any) => f
) => {
  if (! Array.isArray(list)) {
    return [];
  }
  const index = list.map(selector).indexOf(selector(item));
  return index === -1
    ? list
    : [
      ...list.slice(0, index),
      ...list.slice(index + 1)
    ];
};
