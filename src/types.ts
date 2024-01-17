export type Coin = {
  name: string;
  chain: string;
  amount: number;
  value: number;
};

export type ActivityType = 'deposit' | 'withdraw';

export type Activity = {
  type: ActivityType;
  address: string;
  coin: Coin;
  date: Date;
};

export type Data = {
  wallet: string;
  coins: Array<Coin>;
  activities: Array<Activity>;
};