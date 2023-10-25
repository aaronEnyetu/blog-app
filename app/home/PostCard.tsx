import React from 'react'
import type { Post } from '@prisma/client'

type Props = {
    post: Post,
}

const PostCard = ({post}: Props) => {
  return (
      <div>
          <h3 className='text-3xl mb-3'>{post.title}</h3>
          <p>{post.content}</p>
      </div>
  )
}

export default PostCard