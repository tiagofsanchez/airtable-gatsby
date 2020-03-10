import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"

const action = ({ data }) => {
  console.log(data)
  return (
    <Layout>
      <h1>{data.airtable.data.Name}</h1>
    </Layout>
  )
}

export const actionData = graphql`
  query actionData($slug: String) {
    airtable(data: { Name: { eq: $slug } }) {
      data {
        Complete_
        Name
        Notes
        Relevant_Resources
        When_
      }
    }
  }
`

export default action
