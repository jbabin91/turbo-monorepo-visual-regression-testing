import type { CustomProjectConfig } from 'lost-pixel';

export const config = {
  pageShots: {
    pages: [{ path: '/', name: 'landing' }],
    baseUrl: 'http://172.17.0.1:3000',
  },
  lostPixelProjectId: 'cln5eqqpqf5supp0e9g9g8q06',
  apiKey: process.env.LOST_PIXEL_API_KEY,
  ciBuildId: '',
  ciBuildNumber: '',
  repository: '',
  commitRefName: '',
  commitHash: '',
} satisfies CustomProjectConfig;
