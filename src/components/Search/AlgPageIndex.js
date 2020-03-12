import React from "react"
import { Link } from "gatsby"
import { Highlight } from "react-instantsearch-dom"

const AlgPageIndex = ({ hit }) => {
  return (
    <Link
      key={hit.objectID}
      to={`/${hit.slug}`}
      style={{ textDecoration: `none`, color: `gray` }}
    >
      <div
        style={{
          padding: `10px`,
          border: `1px solid gray`,
          marginBottom: `10px`,
        }}
      >
        <Highlight hit={hit} attribute="Name" tagName="mark" />
        {/* 
        Before the Highlight I had this
        {hit.Name} */}
      </div>
    </Link>
  )
}

export default AlgPageIndex
