import React from 'react'
import { useParams } from 'react-router'
import { usePost } from '../queries';

const PostDetails = () => {
    const {post}=useParams<{post:string}>();
    const  {isError,postt,isSuccess , isLoading} =usePost(post!)
    console.log(post)
  return (
   <>
    <div>{postt?.userId}</div>
    <div>{postt?.title}</div>
    <div>{postt?.body}</div>
   </>
  )
}

export default PostDetails

