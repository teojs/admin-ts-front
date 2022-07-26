import { MockMethod } from 'vite-plugin-mock'
import Mock from 'mockjs'
export default [
  {
    url: '/api/getMainList',
    method: 'get',
    timeout: 1000,
    response: ({ query }: { query: { page: number; pageSize: number } }) => {
      const data = Mock.mock({
        code: '01',
        body: {
          'list|20': [
            {
              'id|+1': 1,
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
          page: query.page,
          total: 100,
        },
        message: 'success',
      })
      return data
    },
  },
] as MockMethod[]
