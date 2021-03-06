const endpoint: string = 'https://jsonplaceholder.typicode.com/'
export default ({ app, store, redirect }: any, inject: any): any => {
  inject('sendRequest', ({
    method,
    url,
    params,
    data,
    ...options
  }: any) => {
    const headers: string = ''
    return app.$axios({
      method,
      url: endpoint + url,
      params,
      data,
      headers,
      ...options
    })
  })
}
