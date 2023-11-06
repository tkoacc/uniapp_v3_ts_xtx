import type { XtxGuessInstance } from '@/types/component'
import { ref } from 'vue'

/**
 * 猜你喜欢组件实例
 */
export const useGuessList = () => {
  // 获取猜你喜欢组件实例
  const guessRef = ref<XtxGuessInstance>()

  // 滚动触底事件
  const onScrolltolower = () => {
    guessRef.value?.getMore()
  }

  // 返回ref 和 滚动触底事件处理函数
  return {
    guessRef,
    onScrolltolower,
  }
}
