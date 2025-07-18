import React, { useState, useEffect } from 'react'
import { Container, PostCard } from '../components'
import { postService } from '../appwrite'
import { useSelector } from 'react-redux'

function AllPosts() {
  const [posts, setPosts] = useState([])

  const userData = useSelector(state => state.authReducer.userData);

  // useEffect(() => {
  //   postService.getAllPosts([]).then(posts => {
  //     if (posts) {
  //       setPosts(posts.documents)
  //     }
  //   })
  // }, [])

  useEffect(() => {
    postService.getAllCurrentUserPosts(userData.$id).then(posts => {
      if (posts) {
        setPosts(posts.documents)
      }
    })
  }, [])


  return (
    <div className='w-full py-8'>
      <Container>
        <div className='flex flex-wrap'>
          {posts.map((post) => (
            <div key={post.$id} className='p-2 w-1/4'>
              <PostCard {...post} />
            </div>
          ))}
        </div>
      </Container>
    </div>
  )
}

export default AllPosts