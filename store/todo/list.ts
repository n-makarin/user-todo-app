export const state = () => ({
  data: []
})

export const mutations = {
  SET (state: any, todo: any) {
    state.data = todo
  }
}

export const actions = {
  async get ({ commit }: any, id: number ): Promise<void> {
    // @ts-ignore (ts can't see $sendRequest plugin)
    await this.app.$sendRequest({
      method: 'GET',
      url: `todos?userId=${id}`
    })
      .catch((err: any) => {
        console.log(err)
      })
      .then((resp: any) => {
        if (!resp || !resp.data) { return null }
        commit('SET', resp.data)
      })
  }
}

export const getters = {
  data(state: any) {
    return state.data
  } 
}