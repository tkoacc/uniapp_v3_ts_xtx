import { GoodsResult } from './../types/goods.d'
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
