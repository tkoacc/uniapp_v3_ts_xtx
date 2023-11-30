import type { CartItem } from '@/types/cart'
import { http } from '@/utils/http'
// 加入购物车
// POST/member/cart
/**
 * 加入购物车
 * @param data 请求体参数
 */
export const postMemberCartAPI = (data: { skuId: string; count: number }) => {
  return http({
    method: 'POST',
    url: '/member/cart',
    data,
  })
}

// 获取购物车列表
// GET/member/cart
/**
 * 获取购物车列表
 */
export const getMemberCartAPI = () => {
  return http<CartItem[]>({
    method: 'GET',
    url: '/member/cart',
  })
}
/**
 * 删除/清空购物车单品
 * @param data 请求体参数 ids SKU ID 集合
 */
export const deleteMemberCartAPI = (data: { ids: string[] }) => {
  return http({
    method: 'DELETE',
    url: '/member/cart',
    data,
  })
}
/**
 * 修改购物车单品
 * /member/cart/{skuId}
 * @param skuId SKU ID
 * @param data selected 是否选中 count 数量
 * @returns
 */
export const putMemberCartBySkuIdAPI = (
  skuId: string,
  data: {
    count?: number
    selected?: boolean
  },
) => {
  return http({
    method: 'PUT',
    url: `/member/cart/${skuId}`,
    data,
  })
}
