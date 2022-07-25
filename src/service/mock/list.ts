import { MockMethod } from 'vite-plugin-mock'
export default [
  {
    url: '/api/getMainList',
    method: 'get',
    timeout: 1000,
    response: () => {
      return {
        code: 0,
        body: {
          list: [
            {
              id: 1,
              number: 'string',
              name: 'string',
              isHaveFullTime: true,
              region1: 'string',
              region2: 'string',
              region3: 'string',
              channel1: 'string',
              channel2: 'string',
              channel3: 'string',
              dealerName: 'string',
              createdBy: 'string',
              updatedBy: 'string',
              coopStatus: 1,
            },
          ],
          page: 1,
          total: 100,
        },
        message: 'success',
      }
    },
  },
] as MockMethod[]
