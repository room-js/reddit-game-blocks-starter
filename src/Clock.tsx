import { Devvit, useInterval, useState } from '@devvit/public-api';

const Clock: Devvit.BlockComponent = () => {
  const [time, setTime] = useState<string>('');

  useInterval(() => {
    const now = new Date();
    setTime(`${now.getHours()}:${now.getMinutes()}:${now.getSeconds()}`);
  }, 1000).start();

  return <text>{time}</text>;
};

export default Clock;
