import { Devvit, useAsync } from '@devvit/public-api';
import Clock from './Clock';

const App: Devvit.CustomPostComponent = (context: Devvit.Context) => {
  const {
    data: user,
    loading: userLoading,
    error: userError,
  } = useAsync(async () => ({
    username: (await context.reddit.getCurrentUsername()) ?? '',
  }));

  if (userLoading) {
    return <text>Loading...</text>;
  }

  if (userError || !user) {
    return (
      <blocks>
        <zstack width="100%" height="100%" alignment="center middle">
          <text>Ouch, something went wrong...</text>
        </zstack>
      </blocks>
    );
  }

  const { username } = user;

  return (
    <blocks height="tall">
      <zstack width="100%" height="100%" alignment="center middle">
        <image
          height="100%"
          width="100%"
          imageHeight="600px"
          imageWidth="600px"
          url="bg.jpg"
          description="background"
          resizeMode="cover"
        />
        <hstack
          width="100%"
          height="100%"
          alignment="bottom start"
          padding="small"
        >
          <text>{username}</text>
        </hstack>
        <hstack
          width="100%"
          height="100%"
          alignment="bottom end"
          padding="small"
        >
          <Clock />
        </hstack>
      </zstack>
    </blocks>
  );
};

export default App;
