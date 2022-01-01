//front-end
//back-end
import { useRouter } from 'next/router'

function UserBuild ({ id, author, title, blogText }) {
  const router = useRouter()

  return (
    <div
      onClick={() => router.push(`/userBuild/${id}`)}
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
        <p className='postText'>{blogText}</p>
      </div>
    </div>
  )
}

export default UserBuild
