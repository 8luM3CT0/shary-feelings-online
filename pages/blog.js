//front-end
import Head from 'next/head'
import Header from '../components/header/Header'
import Button from '@material-tailwind/react/Button'
import Icon from '@material-tailwind/react/Icon'
import Modal from '@material-tailwind/react/Modal'
import ModalHeader from '@material-tailwind/react/ModalHeader'
import ModalBody from '@material-tailwind/react/ModalBody'
import ModalFooter from '@material-tailwind/react/ModalFooter'
import Login from './login'
import UserBuild from '../components/feed/UserBuild'
//back-end
import { creds, provider, store } from '../firebaseFile'
import { useRouter } from 'next/router'
import { useAuthState } from 'react-firebase-hooks/auth'
import { useCollection } from 'react-firebase-hooks/firestore'
import { useState } from 'react'
import firebase from 'firebase'

function BlogPage () {
  const router = useRouter()
  const [user] = useAuthState(creds)
  if (!user) return <Login />
  const [showModal, setShowModal] = useState(false)
  const [addPost, setAddPost] = useState(false)
  const [post, setPost] = useState(false)

  const tryAgain = () => {
    setShowModal(false)
    setAddPost(true)
  }

  const createPost = () => {
    if (!post) return modal

    store
      .collection('userBlogs')
      .doc(user.email)
      .collection('blogs')
      .add({
        title: post,
        author: user.displayName,
        timestamp: firebase.firestore.FieldValue.serverTimestamp()
      })
    setPost('')
    setAddPost(false)
  }

  const modal = (
    <Modal size='sm' active={showModal}>
      <ModalBody>
        <p
          className='
        text-gray-600 
        text-base 
        font-semibold
        font-google-sans'
        >
          Sorry, that is an invalid input. Try again
        </p>
      </ModalBody>
      <ModalFooter>
        <Button color='red' buttonType='link' onClick={tryAgain} ripple='light'>
          Close
        </Button>
      </ModalFooter>
    </Modal>
  )

  const [docsSnapshot] = useCollection(
    store
      .collection('userBlogs')
      .doc(user.email)
      .collection('blogs')
      .orderBy('timestamp', 'desc')
  )

  return (
    <>
      <div className='overflow-hidden h-screen scrollbar-hide pb-10 bg-gray-200'>
        <Head>
          <title>Here are your posts, {user?.displayName}</title>
        </Head>

        <Header />
        <main
          className='
          h-screen
            max-w-[1780px]
            grid
            pb-[120px]
            overflow-y-scroll
            scrollbar-hide
            mx-auto
            bg-teal-200
            border-x-2
            border-blue-200
            '
        >
          <div
            className='
          bg-cover
          bg-gray-200
          flex-1
          opacity-80
          p-[190px]
          lg:p-[260px]
        bg-bb-mountain
        grid
        place-items-center
        '
          >
            <Button
              onClick={e => setAddPost(true)}
              color='lightBlue'
              buttonType='filled'
              size='regular'
              rounded={false}
              block={false}
              iconOnly={false}
              className='flex hover:animate-pulse items-center space-x-2'
            >
              <Icon name='add' size='3xl' />
              <h2 className='capitalize text-lg font-google-sans font-medium'>
                Create
              </h2>
            </Button>
          </div>
          {docsSnapshot?.docs.map(doc => (
            <UserBuild
              key={doc.id}
              id={doc.id}
              title={doc.data().title}
              author={doc.data().author}
              blogText={doc.data().blogText}
            />
          ))}
        </main>
      </div>
      <Modal size='lg' active={addPost} toggler={() => setAddPost(false)}>
        <div className='p-[40px]'>
          <ModalHeader toggler={() => setAddPost(false)}>
            <p className='text-2xl text-blue-400 font-medium font-robot-condensed'>
              Create new post
            </p>
          </ModalHeader>
          <ModalBody>
            <div className='grid pb-[20px] px-[20px] items-center'>
              <span className='grid items-center space-y-4'>
                <h2 className='text-lg font-google-sans text'>Blog name: </h2>
                <input
                  disabled={!user}
                  type='text'
                  className='border-b border-teal-100 outline-none text-teal-500'
                  value={post}
                  onChange={e => setPost(e.target.value)}
                  placeholder='Name...'
                />
              </span>
            </div>
          </ModalBody>
          <ModalFooter>
            <Button
              color='red'
              buttonType='link'
              onClick={e => setAddPost(false)}
              ripple='dark'
            >
              Cancel
            </Button>
            <Button
              color='green'
              buttonType='link'
              onClick={createPost}
              ripple='dark'
            >
              Create new
            </Button>
          </ModalFooter>
        </div>
      </Modal>
    </>
  )
}

export default BlogPage
