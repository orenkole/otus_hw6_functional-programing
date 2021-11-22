// // Задание 1
export type Team = { name: string; score: number };

export const getTopName = (
  teams: Team[]
  // eslint-disable-next-line
  // @ts-ignore
): string => {
  return teams.reduce((prev, current) => {
    return prev.score > current.score ? prev : current;
  }).name;
};

// // Задание 2
export type QsObj = Record<string, string | number | boolean | object>;

export const createQs = (
  qsObj: QsObj
  // eslint-disable-next-line
  // @ts-ignore
): string => {
  return "?".concat(
    Object.entries(qsObj)
      .map(([key, value]) => {
        return `${key}=${value}`;
      })
      .join("&")
  );
};

// // Задание 3

export const parseQs = (
  qs: string
  // eslint-disable-next-line
  // @ts-ignore
): QsObj => {
  return Object.fromEntries(
    qs
      .substring(qs.indexOf("?") + 1)
      .split("&")
      .map((item) => item.split("="))
  );
};
