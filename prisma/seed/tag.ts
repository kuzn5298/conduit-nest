import { Tag } from '@prisma/client';

export const tagList: Array<Omit<Tag, 'id'>> = [
  { name: 'javascript' },
  { name: 'react' },
  { name: 'frontend' },
  { name: 'design' },
  { name: 'cyberpunk' },
  { name: 'security' },
  { name: 'blockchain' },
  { name: 'ai' },
  { name: 'machine-learning' },
  { name: 'rust' },
  { name: 'nasa' },
  { name: 'quantum-computing' },
  { name: 'space' },
  { name: 'responsive-design' },
  { name: 'async-await' },
];
