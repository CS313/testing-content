import { createClient } from 'contentful';

export const getClient = (preview) =>
  createClient({
    space: process.env.SPACE_ID,
    accessToken: process.env[preview ? 'PREVIEW_ACCESS_TOKEN' : 'ACCESS_TOKEN'],
    host: preview ? 'preview.contentful.com' : 'cdn.contentful.com',
  });
