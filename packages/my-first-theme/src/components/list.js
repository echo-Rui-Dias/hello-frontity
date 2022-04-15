// File: /packages/my-first-theme/src/components/list.js
import React from "react"
import { connect } from "frontity"
import Link from "@frontity/components/link"

const List = ({ state }) => {
  const data = state.source.get(state.router.link)

  return (
    <div>
      {data.items.map((item) => {
        const post = state.source[item.type][item.id]
        return (
          <div>
            <Link key={item.id} link={post.link}>
              {post.title.rendered}
            </Link>
          </div>
        );
      })}
    </div>
  )
}

export default connect(List)