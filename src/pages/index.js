import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = props => {
  const onboardingTasks = props.data.allAirtable.nodes

  return (
    <Layout>
      <SEO title="Home" />
      <h1>Integrating Airtable with Gatsby</h1>
      <div
        style={{
          maxWidth: `300px`,
          marginBottom: `1.45rem`,
        }}
      >
        <Image />
      </div>
      {onboardingTasks.map(task => {
        return (
          <div
            style={{
              padding: `10px`,
              border: `1px solid gray`,
              marginBottom: `10px`,
            }}
            key={task.id}
          >
            {task.data.Name}
          </div>
        )
      })}
      <Link to="/page-2/">Go to page 2</Link>
    </Layout>
  )
}

export const actionList = graphql`
  query list {
    allAirtable {
      nodes {
        data {
          Name
        }
      }
    }
  }
`

export default IndexPage
