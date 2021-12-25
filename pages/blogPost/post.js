//front-end
import Head from 'next/head'
import Header from '../../components/header/Header'
//back-end

function Post () {
  return (
    <div
      className='
        scrollbar-hide 
        h-screen 
        overflow-hidden 
        pb-10 
        bg-gray-200'
    >
      <Head>
        <title>Post number null</title>
      </Head>
      <Header />
      <div
        className='
        flex
        items-center
        max-w-[1780px]
        mx-auto  
        '
      >
        <main
          className='
            flex-[0.8]
            bg-teal-50
            mx-auto
            justify-center
            scrollbar-hide
            overflow-y-scroll
            h-screen
            border-x-2
            border-blue-400
            pb-32
            '
        ></main>
      </div>
    </div>
  )
}

export default Post
