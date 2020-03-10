exports.createPages = async function({ actions, graphql }) {
  const { data } = await graphql(`
    query {
      allAirtable {
        edges {
          node {
            data {
              Name
            }
          }
        }
      }
    }
  `)
  data.allAirtable.edges.forEach(edge => {
    const slug = edge.node.data.Name
    actions.createPage({
      path: slug,
      component: require.resolve(`./src/templates/action.js`),
      context: { slug: slug },
    })
  })
}
