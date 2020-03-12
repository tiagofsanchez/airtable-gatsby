import React from "react"
import { Link } from "gatsby"

const PageIndex = ({ task }) => {
  return (
    <Link
      to={`/${task.data.slug}`}
      style={{ textDecoration: `none`, color: `gray` }}
    >
      <div
        style={{
          padding: `10px`,
          border: `1px solid gray`,
          marginBottom: `10px`,
        }}
      >
        {task.data.Name}
      </div>
    </Link>
  )
}

export default PageIndex
