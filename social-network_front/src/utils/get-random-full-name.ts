const fullNamesMock: string[] = [
  'John Doe',
  'Jane Smith',
  'Emily Johnson',
  'Michael Williams',
  'Mary Brown',
  'David Jones',
  'Sarah Miller',
  'James Davis',
  'Linda Garcia',
  'Robert Wilson',
];

export const getRandomFullName = (): string => {
  const randomIndex = Math.floor(Math.random() * fullNamesMock.length);

  return fullNamesMock[randomIndex];
};
