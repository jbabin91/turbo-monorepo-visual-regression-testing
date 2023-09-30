import type { CustomProjectConfig } from 'lost-pixel';

export const config = {
  pageShots: {
    pages: [{ path: '/', name: 'landing' }],
    baseUrl: 'http://172.17.0.1:3000',
  },
  lostPixelProjectId: 'cln5esnoqf5swpp0ea8ipn6qh',
  apiKey: process.env.LOST_PIXEL_API_KEY,
  // @ts-expect-error - docs only uses this configs
} satisfies CustomProjectConfig;
