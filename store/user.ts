import * as Types from '~/types/index'

export const state = () => ({
  list: [],
  listLimit: 5
})

export const mutations = {
  SET_USER_LIST (state: any, data: Types.UserList) {
    state.list = data
  }
}

export const actions = {
  /**
   * Get raw user list by params: 'pageNumber' and 'listLimit'
   */
  async getRawList ({ getters }: any, pageNumber: number ): Promise<object[]> {
    const listLimit: number = getters.listLimit
    let response: any
    // @ts-ignore (ts can't see $sendRequest plugin)
    await this.app.$sendRequest({
      method: 'GET',
      url: `users?_page=${pageNumber}&_limit=${listLimit}`
    })
      .catch((err: any) => {
        console.log(err)
      })
      .then((resp: any) => {
        if (!resp || !resp.data) { return null }
        response = resp.data
      })
      return response
  },
  /**
   * Handle rawList to set userList to store
   */
  async setList (
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
  list(state: any) {
    return state.list
  }, 
  listLimit(state: any) {
    return state.listLimit
  } 
}