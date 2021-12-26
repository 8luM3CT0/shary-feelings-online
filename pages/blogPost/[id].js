//front-end
import Head from 'next/head'
import Header from '../../components/header/Header'
//back-end
import { useAuthState } from 'react-firebase-hooks/auth'
import { useCollection, useDocumentOnce } from 'react-firebase-hooks/firestore'
import { creds, provider, store } from '../../firebaseFile'
import { useRouter } from 'next/router'

function Post () {
  const [user] = useAuthState(creds)
  const router = useRouter()
  const { id } = router.query
  const [snapshot, loadingSnapshot] = useDocumentOnce(
    store.collection('blogPosts').doc(id)
  )

  if (!loadingSnapshot && !snapshot?.data()?.title) {
    router.replace('/')
  }

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
        <title>Post by: {snapshot?.data()?.author}</title>
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
        >
          <h1>{snapshot?.data()?.title}</h1>
        </main>
      </div>
    </div>
  )
}

export default Post
