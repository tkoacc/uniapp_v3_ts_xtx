import type { GoodsResult } from '@/types/goods'
import { http } from '@/utils/http'
/**
 * 获取商品详情
 * @param id
 */
export const getGoodsByIdAPI = (id: string) => {
  return http<GoodsResult>({
    method: 'GET',
    url: `/goods`,
    data: {
      id,
    },
  })
}
