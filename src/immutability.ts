// // Задание 1
export type OriginalTeam = {
  size: number;
  name: string;
  league: string;
};

export type ExpectedTeam = {
  name: string;
  league: string;
  roster: number;
};

export const originalTeamToExpectedTeam = (
  originalTeam: OriginalTeam
  // eslint-disable-next-line
  // @ts-ignore
): ExpectedTeam => {
  const {size, ...expectedTeam} = {
    ...originalTeam,
    name: "New York Badgers",
    roster: 25,
  };
  return expectedTeam;
};

// // Задание 2
type SomeArray = Readonly<Array<number | string>>;

export const originalArrayToExpectedArray = (
  originalArray: SomeArray
  // eslint-disable-next-line
  // @ts-ignore
): SomeArray => {
  return originalArray.map(item => (item === 1 ? "two" : (item as number + 1)));
};

// // Задание 3

export type Team = {
  name: string;
  captain: {
    name: string;
    age: number;
  };
};

export const originalTeamToExpectedTeam2 = (
  originalTeam: Team
  // eslint-disable-next-line
  // @ts-ignore
): Team => {
  return {
    ...originalTeam,
    captain: {
      ...originalTeam.captain,
      age: 28
    }
  };
};
