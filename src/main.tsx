import { Devvit } from '@devvit/public-api';
import App from './App';

Devvit.configure({
  redditAPI: true,
  redis: true,
});

Devvit.addMenuItem({
  label: 'Post the game',
  location: 'subreddit',
  forUserType: 'moderator',
  onPress: async (_event, context) => {
    const { reddit, ui } = context;
    const subreddit = await reddit.getCurrentSubreddit();
    await reddit.submitPost({
      title: 'My First Reddit Game',
      subredditName: subreddit.name,
      preview: <text>Loading...</text>,
    });
    ui.showToast({ text: 'The game has been posted to the subreddit!' });
  },
});

Devvit.addCustomPostType({
  name: 'My First Reddit Game',
  description: 'I promise to change the description to more relevant...',
  height: 'tall',
  render: App,
});

export default Devvit;
