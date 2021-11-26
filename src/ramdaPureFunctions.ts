import {
  compose, dropWhile, equals, fromPairs, join, map, prop, reduce, split, tail, toPairs,
} from "ramda";

// // Задание 1
export type Team = { name: string; score: number };

// eslint-disable-next-line
// @ts-ignore
export const getTopName = compose(
  prop("name"),
  reduce(
    (prev, current) =>
      prop("score", prev) > prop("score", current) ? prev : current,
    -Infinity
  )
);

// // Задание 2
export type QsObj = Record<string, string | number | boolean | object>;

// eslint-disable-next-line
// @ts-ignore
export const createQs = compose(
  s => `?${s}`,
  join("&"),
  map(join("=")),
  toPairs
);

// eslint-disable-next-line
// @ts-ignore
// Задание 3
export const parseQs = compose(
  fromPairs,
  map(split("=")),
  split("&"),
  tail,
  dropWhile(equals("?"))
);
