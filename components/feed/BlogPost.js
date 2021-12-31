//front-end
//back-end
import { useRouter } from 'next/router'

function BlogPost ({ id, author, title, blogContent, timestamp }) {
  const router = useRouter()

  const goToPost = () => {
    router.push(`/blogPost/${id}`)
  }

  return (
    <div
      onClick={goToPost}
      className='
        blogPostDiv'
    >
      <img
        src='https://wallpaperaccess.com/full/921223.jpg'
        className='
        rounded-xl
            h-[190px] 
            w-[290px] 
            lg:h-[210px] 
            lg:w-[330px] 
            xl:h-[240px] 
            xl:w-[410px]
            opacity-90
            '
      />
      <div
        className='
            flex
            flex-col
            text-center
            items-center
            text-gray-500'
      >
        <h1
          className='
                text-lg 
                lg:text-[32px] 
                font-robot-slab
                font-semibold'
        >
          {title}
        </h1>
        <h2 className='text-base lg:text-xl font-hind-font font-semibold text-gray-200'>
          by {author}
        </h2>
        <p className='postText'>{blogContent}</p>
      </div>
    </div>
  )
}

export default BlogPost
