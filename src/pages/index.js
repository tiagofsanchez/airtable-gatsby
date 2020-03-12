import React, { Component } from "react"
import { Link, graphql } from "gatsby"
import algoliasearch from "algoliasearch/lite"
import { InstantSearch, SearchBox, Hits , Highlight} from "react-instantsearch-dom"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import PageIndex from '../components/Search/PageIndex'
import AlgPageIndex from "../components/Search/AlgPageIndex"

const searchClient = algoliasearch(
  "X32IDP6C7C",
  "bd42b20b127c23898f0d0818db563b7e"
)

class IndexPage extends Component {
  state = {
    query: "",
  }

  queryHandler = query => {
    this.setState({
      query: query,
    })
  }

  clearFilterHandler = () => {
    this.setState({
      query: "",
    })
  }

  render() {
    const onboardingTasks = this.props.data.allAirtable.nodes
    const { query } = this.state

    const filteredTasks =
      query === ""
        ? onboardingTasks
        : onboardingTasks.filter(c =>
            c.data.Name.toLowerCase().includes(query.toLowerCase())
          )

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
        <h3>My Search</h3>
        <input
          type="text"
          value={query}
          placeholder="search your task..."
          style={{
            padding: `10px`,
            border: `1px solid pink`,
            width: `100%`,
            marginBottom: `40px`,
          }}
          onChange={e => this.queryHandler(e.target.value)}
        />

        {filteredTasks &&
          filteredTasks.map(task => {
            return <PageIndex task={task} key={task.id} />
          })}
          <hr />
          <h3>Algolia Search</h3>
        <InstantSearch searchClient={searchClient} indexName="Pages" >
          <SearchBox />
          <Hits hitComponent={AlgPageIndex}  />
        </InstantSearch>
        <Link to="/page-2/">Go to page 2</Link>
      </Layout>
    )
  }
}

export const actionList = graphql`
  query list {
    allAirtable {
      nodes {
        data {
          Name
          slug
        }
      }
    }
  }
`

export default IndexPage
