import type { NextApiRequest, NextApiResponse } from 'next'
import type { ActivityType, Data } from '../../src/types';

const users = [
  {
    id: 1,
    login: 'admin',
    password: 'admin',
    data: {
      wallet: 'TjkLkVSfmxjOTaQ2HCEG9zbe3xmIWU5FGs',
      coins: [
        {
          name: 'TON',
          chain: 'Toncoin',
          amount: 1253,
          value: 2.306,
        },
        {
          name: 'DFC',
          chain: 'Bitcoin',
          amount: 100,
          value: 0.1432,
        },
        {
          name: 'USDT',
          chain: 'Tether',
          amount: 12.43,
          value: 1,
        },
      ],
      activities: [
        {
          type: 'deposit' as ActivityType,
          address: 'mutantape.ton',
          coin: {
            name: 'USDT',
            chain: 'Tether',
            amount: 1,
            value: 1,
          },
          date: new Date("2023-09-20T18:03:00"),
        },
        {
          type: 'deposit' as ActivityType,
          address: 'mutantape.ton',
          coin: {
            name: 'TON',
            chain: 'Toncoin',
            amount: 9,
            value: 2.306,
          },
          date: new Date("2023-10-20T18:03:00"),
        },
        {
          type: 'withdraw' as ActivityType,
          address: 'TjkLkVSfmxjOTAq2HCEG9zbe3xmIWU5FGs',
          coin: {
            name: 'TON',
            chain: 'Toncoin',
            amount: 9,
            value: 2.306,
          },
          date: new Date("2023-10-19T18:03:00"),
        },
      ],
    }
  }
]

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data|string>
) {
  if (req.method === 'POST') {
    const { login, password } = req.body;
    const user = users.find((u) => u.login === login && u.password === password);
    if (user) {
      res.status(200).json(user.data);
    } else {
      res.status(401).json('invalidUser');
    }
  } else {
    // Handle any other HTTP method
  }

}
