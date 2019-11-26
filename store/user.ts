export const state = () => ({
  data: {}
})

export const mutations = {
  SET_USER (state: any, user: any) {
    state.data = user
  }
}

export const actions = {
  async get ({ commit }: any, id: number ): Promise<void> {
    // @ts-ignore (ts can't see $sendRequest plugin)
    await this.app.$sendRequest({
      method: 'GET',
      url: `users/${id}`
    })
      .catch((err: any) => {
        console.log(err)
      })
      .then((resp: any) => {
        if (!resp || !resp.data) { return null }
        commit('SET_USER', resp.data)
      })
  }
}

export const getters = {
  data(state: any) {
    return state.data
  } 
}