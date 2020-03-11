exports.createPages = async function({ actions, graphql }) {
  const { data } = await graphql(`
    query {
      allAirtable {
        edges {
          node {
            data {
              slug
            }
          }
        }
      }
    }
  `)
  data.allAirtable.edges.forEach(edge => {
    const slug = edge.node.data.slug
    actions.createPage({
      path: slug,
      component: require.resolve(`./src/templates/action.js`),
      context: { slug: slug },
    })
  })
}
