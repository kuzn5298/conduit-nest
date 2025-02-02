import { User } from '@prisma/client';

export const userList: Array<Omit<User, 'id'>> = [
  {
    username: 'CodeNinja',
    email: 'codeninja@example.com',
    password:
      '$scrypt$N=32768,r=8,p=1,maxmem=67108864$dj4c/NEQezPAPxlI+g3KTklrO3kJWJ9+KTsQdRYGPM8$qHcOHqOx99WSg9P7PIlrYRlIAoibQj0CQcHoC2SIVzq1jlwv05vTX/q3OEa0v8ynUGNIgnz/Ysepp0mxUjjC3A',
    bio: 'Passionate about coding, coffee, and exploring new technologies.',
    image: '',
  },
  {
    username: 'PixelPioneer',
    email: 'pixelpioneer@example.com',
    password:
      '$scrypt$N=32768,r=8,p=1,maxmem=67108864$dj4c/NEQezPAPxlI+g3KTklrO3kJWJ9+KTsQdRYGPM8$qHcOHqOx99WSg9P7PIlrYRlIAoibQj0CQcHoC2SIVzq1jlwv05vTX/q3OEa0v8ynUGNIgnz/Ysepp0mxUjjC3A',
    bio: "Design, frontend, and a little bit of magic – that's my way!",
    image: '',
  },
  {
    username: 'QuantumDev',
    email: 'quantumdev@example.com',
    password:
      '$scrypt$N=32768,r=8,p=1,maxmem=67108864$dj4c/NEQezPAPxlI+g3KTklrO3kJWJ9+KTsQdRYGPM8$qHcOHqOx99WSg9P7PIlrYRlIAoibQj0CQcHoC2SIVzq1jlwv05vTX/q3OEa0v8ynUGNIgnz/Ysepp0mxUjjC3A',
    bio: 'Exploring quantum computing and its impact on programming.',
    image: '',
  },
  {
    username: 'BugHunter',
    email: 'bughunter@example.com',
    password:
      '$scrypt$N=32768,r=8,p=1,maxmem=67108864$dj4c/NEQezPAPxlI+g3KTklrO3kJWJ9+KTsQdRYGPM8$qHcOHqOx99WSg9P7PIlrYRlIAoibQj0CQcHoC2SIVzq1jlwv05vTX/q3OEa0v8ynUGNIgnz/Ysepp0mxUjjC3A',
    bio: 'Finding bugs faster than they can be fixed.',
    image: '',
  },
  {
    username: 'NeonSamurai',
    email: 'neonsamurai@example.com',
    password:
      '$scrypt$N=32768,r=8,p=1,maxmem=67108864$dj4c/NEQezPAPxlI+g3KTklrO3kJWJ9+KTsQdRYGPM8$qHcOHqOx99WSg9P7PIlrYRlIAoibQj0CQcHoC2SIVzq1jlwv05vTX/q3OEa0v8ynUGNIgnz/Ysepp0mxUjjC3A',
    bio: 'Coding with a cyberpunk vibe. Love neon, speed, and late-night work.',
    image: '',
  },
  {
    username: 'AIOverlord',
    email: 'aioverlord@example.com',
    password:
      '$scrypt$N=32768,r=8,p=1,maxmem=67108864$dj4c/NEQezPAPxlI+g3KTklrO3kJWJ9+KTsQdRYGPM8$qHcOHqOx99WSg9P7PIlrYRlIAoibQj0CQcHoC2SIVzq1jlwv05vTX/q3OEa0v8ynUGNIgnz/Ysepp0mxUjjC3A',
    bio: 'AI enthusiast. I let the machines do the work while I relax.',
    image: '',
  },
  {
    username: 'CryptoNomad',
    email: 'cryptonomad@example.com',
    password:
      '$scrypt$N=32768,r=8,p=1,maxmem=67108864$dj4c/NEQezPAPxlI+g3KTklrO3kJWJ9+KTsQdRYGPM8$qHcOHqOx99WSg9P7PIlrYRlIAoibQj0CQcHoC2SIVzq1jlwv05vTX/q3OEa0v8ynUGNIgnz/Ysepp0mxUjjC3A',
    bio: 'Living off crypto, traveling the world, and coding on the go.',
    image: '',
  },
  {
    username: 'Hackerman',
    email: 'hackerman@example.com',
    password:
      '$scrypt$N=32768,r=8,p=1,maxmem=67108864$dj4c/NEQezPAPxlI+g3KTklrO3kJWJ9+KTsQdRYGPM8$qHcOHqOx99WSg9P7PIlrYRlIAoibQj0CQcHoC2SIVzq1jlwv05vTX/q3OEa0v8ynUGNIgnz/Ysepp0mxUjjC3A',
    bio: 'The console is my playground, and security is my game.',
    image: '',
  },
  {
    username: 'RustyGears',
    email: 'rustygears@example.com',
    password:
      '$scrypt$N=32768,r=8,p=1,maxmem=67108864$dj4c/NEQezPAPxlI+g3KTklrO3kJWJ9+KTsQdRYGPM8$qHcOHqOx99WSg9P7PIlrYRlIAoibQj0CQcHoC2SIVzq1jlwv05vTX/q3OEa0v8ynUGNIgnz/Ysepp0mxUjjC3A',
    bio: 'Mechanical engineer turned coder. Love building things that last.',
    image: '',
  },
  {
    username: 'DeepSpaceDev',
    email: 'deepspacedev@example.com',
    password:
      '$scrypt$N=32768,r=8,p=1,maxmem=67108864$dj4c/NEQezPAPxlI+g3KTklrO3kJWJ9+KTsQdRYGPM8$qHcOHqOx99WSg9P7PIlrYRlIAoibQj0CQcHoC2SIVzq1jlwv05vTX/q3OEa0v8ynUGNIgnz/Ysepp0mxUjjC3A',
    bio: 'Exploring the universe through code. Space and AI fascinate me.',
    image: '',
  },
  {
    username: 'ByteWizard',
    email: 'bytewizard@example.com',
    password:
      '$scrypt$N=32768,r=8,p=1,maxmem=67108864$dj4c/NEQezPAPxlI+g3KTklrO3kJWJ9+KTsQdRYGPM8$qHcOHqOx99WSg9P7PIlrYRlIAoibQj0CQcHoC2SIVzq1jlwv05vTX/q3OEa0v8ynUGNIgnz/Ysepp0mxUjjC3A',
    bio: 'Casting spells in code, making the impossible possible.',
    image: '',
  },
];
