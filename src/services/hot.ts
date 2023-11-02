import type { PageParams } from '@/types/global'
import { http } from '@/utils/http'

type HotParams = PageParams & {
  subType?: string
}
/**
 * 通用-热门推荐
 * @param url 请求地址
 * @param data 请求参数
 */
export const getHotRecommendAPI = (url: string, data?: HotParams) => {
  return http({
    method: 'GET',
    url,
    data,
  })
}
