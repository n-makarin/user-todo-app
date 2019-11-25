import * as Types from '~/types/index'

export const state = () => ({
  data: [],
  limit: 5,
  totalCount: 0
})

export const mutations = {
  SET_USER_LIST (state: any, data: Types.UserList) {
    state.data = data
  },
  SET_TOTAL_COUNT (state: any, count: number) {
    state.totalCount = count
  }
}

export const actions = {
  /**
   * Get raw user list by params: 'pageNumber' and 'limit'
   */
  async getRawList ({ getters, commit }: any, pageNumber: number ): Promise<object[]> {
    const limit: number = getters.limit
    let response: any
    // @ts-ignore (ts can't see $sendRequest plugin)
    await this.app.$sendRequest({
      method: 'GET',
      url: `users?_page=${pageNumber}&_limit=${limit}`
    })
      .catch((err: any) => {
        console.log(err)
      })
      .then((resp: any) => {
        if (!resp || !resp.data) { return null }
        response = resp.data
        commit('SET_TOTAL_COUNT', resp.headers['x-total-count'])
      })
      return response
  },
  /**
   * Handle rawList to set userList to store
   */
  async set (
      { commit, dispatch }: any, { pageNumber = 0 }: { pageNumber?: number; } = {}
      ): Promise<void> {
        const rawList: any = await dispatch('getRawList', pageNumber)
        const userList: Types.UserList = []
      for (let i = 0; i < rawList.length; i++) {
        userList[i] = {
          id: rawList[i].id,
          name: rawList[i].name,
          email: rawList[i].email,
          phone: rawList[i].phone
        }
      }
      commit('SET_USER_LIST', userList)
  }
}

export const getters = {
  data(state: any) {
    return state.data
  }, 
  limit(state: any) {
    return state.limit
  },
  totalCount(state: any) {
    return state.totalCount
  } 
}