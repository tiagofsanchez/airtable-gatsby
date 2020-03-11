const pageQuery = `{
    pages: allAirtable {
        edges {
          node {
            objectID: id
            data {
              Name
              slug
            }
          }
        }
      }
}`

const todoQuery = `{
    todos: allAirtable {
        edges {
          node {
            objectID: id
            data {
              Name
              Notes
              When_
              slug
              Complete_
            }
          
          }
        }
      }
}`

const flatten = arr =>
  arr.map(({ node: { data, ...rest } }) => ({
    ...data,
    ...rest,
  }))
const settings = { attributesToSnippet: [`excerpt:20`] }
const queries = [
  {
    query: pageQuery,
    transformer: ({ data }) => flatten(data.pages.edges),
    indexName: `Pages`,
    settings,
  },
  {
    query: todoQuery,
    transformer: ({ data }) => flatten(data.todos.edges),
    indexName: `Todos`,
    settings,
  },
]
module.exports = queries
