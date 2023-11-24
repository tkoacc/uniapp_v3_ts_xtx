import type { AddressItem, AddressParams } from '@/types/address'
import { http } from '@/utils/http'

// POST/member/address
/**
 * 添加收货地址
 * @param data 请求参数
 */
export const postMemberAddressAPI = (data: AddressParams) => {
  return http({
    method: 'POST',
    url: '/member/address',
    data,
  })
}

// 获取收获地址列表
// GET/member/address
/**
 * 获取收货地址列表
 */
export const getMemberAddressAPI = () => {
  return http<AddressItem[]>({
    method: 'GET',
    url: '/member/address',
  })
}

// 获取收获地址详情
// GET/member/address/{id}
/**
 * 获取收货地址详情
 * @param id
 */
export const getMemberAddressByIdAPI = (id: string) => {
  return http<AddressItem>({
    method: 'GET',
    url: `/member/address/${id}`,
  })
}