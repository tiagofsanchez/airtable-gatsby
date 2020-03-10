import React, { Component } from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

class IndexPage extends Component{

  state = { 
    query: ''
  }

  queryHandler = query => { 
  this.setState({
    query: query
  })

  }
  
  clearFilterHandler =() => { 
    this.setState({
      query: ''
    })
    
  }

  render () { 

  const onboardingTasks = this.props.data.allAirtable.nodes
  const { query } = this.state

  console.log(this.state);
  console.log(onboardingTasks);
  
  const filteredTasks =
  query === ""
    ? onboardingTasks
    : onboardingTasks.filter(c =>
        c.data.Name.toLowerCase().includes(query.toLowerCase())
      );

      

  
  

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
      <input 
        type="text"
        value={query}
        placeholder="search your task..." 
        style={{padding: `10px`, border: `1px solid pink`, width: `100%`, marginBottom: `40px`}}
        onChange={(e) => this.queryHandler(e.target.value)}/>
      {filteredTasks.map(task => {
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
