export type Animal = {
  id: string;
  animal: string;
  logos: { name: string; backgroundColor: string; color: string }[];
};

export const animals: Animal[] = [
  {
    id: 'rat',
    animal: 'Rat',
    logos: [
      { name: 'mickey-mouse', backgroundColor: '#000000', color: '#ffffff' },
    ],
  },
  {
    id: 'ox',
    animal: 'Ox',
    logos: [{ name: 'red-bull', backgroundColor: '#FFD300', color: '#1a1a1a' }],
  },
  {
    id: 'tiger',
    animal: 'Tiger',
    logos: [
      { name: 'onitsuka-tiger', backgroundColor: '#221815', color: '#ffffff' },
    ],
  },
  {
    id: 'rabbit',
    animal: 'Rabbit',
    logos: [{ name: 'playboy', backgroundColor: '#000000', color: '#ffffff' }],
  },
  {
    id: 'dragon',
    animal: 'Dragon',
    logos: [{ name: '', backgroundColor: '#000000', color: '#ffffff' }],
  },
  {
    id: 'snake',
    animal: 'Snake',
    logos: [{ name: 'python', backgroundColor: '#387EB8', color: '#ffffff' }],
  },
  {
    id: 'horse',
    animal: 'Horse',
    logos: [{ name: 'ferrari', backgroundColor: '#FFF200', color: '#1a1a1a' }],
  },
  {
    id: 'goat',
    animal: 'Goat',
    logos: [{ name: '', backgroundColor: '', color: '' }],
  },
  {
    id: 'monkey',
    animal: 'Monkey',
    logos: [
      { name: 'mailchimp', backgroundColor: '#ffe01b', color: '#1a1a1a' },
    ],
  },
  {
    id: 'rooster',
    animal: 'Rooster',
    logos: [
      {
        name: 'tottenham-hotspur',
        backgroundColor: '#132257',
        color: '#ffffff',
      },
    ],
  },
  {
    id: 'dog',
    animal: 'Dog',
    logos: [{ name: 'datadog', backgroundColor: '#612ba6', color: '#ffffff' }],
  },
  {
    id: 'pig',
    animal: 'Pig',
    logos: [{ name: '', backgroundColor: '', color: '' }],
  },
];
