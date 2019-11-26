export default function ({ redirect, app }) {
  const route = app.context.route
  const path = route.path

  // redirect to explicit path with query
  if (path === '/' && !route.query.page) {
    return redirect('/?page=1')
  }
}
