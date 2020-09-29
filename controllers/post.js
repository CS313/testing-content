import { getClient } from '../services/contentfulClient';
import MarkdownIt from 'markdown-it';

const md = new MarkdownIt();

export const showPost = async ({ req, res }) => {
  const client = getClient(req.query.preview);
  try {
    const post = await client.getEntry(process.env.POST_ENTRY_ID);

    if (post && post.fields) {
      res.render('post', { post: post.fields, md });
    }
  } catch (e) {
    console.log('Error', e);
  }
};
