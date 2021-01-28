import { Experience } from 'models/interfaces';

export const experiences: Experience[] = [
  {
    company: 'Medicine Innovation Lab - MedSênior',
    jobTitle: 'Full-Stack Developer',
    startDate: 'Sep/20',
    description: 'Development in React.js, .NET, and React Native.',
    techs: [
      { title: 'React.js' },
      { title: '.NET' },
      { title: 'React Native' },
      { title: 'Typescript' },
      { title: 'MongoDB' },
      { title: 'Docker' },
      { title: 'Azure' },
      { title: 'SQLServer' },
    ],
  },
  {
    company: 'uDNA',
    jobTitle: 'Full-Stack Developer',
    startDate: 'Mar/20',
    endDate: 'Sep/20',
    description: 'Development in React.js and React Native.',
    techs: [{ title: 'React.js' }, { title: 'React Native' }],
  },
];
