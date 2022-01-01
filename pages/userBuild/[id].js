//front-end
import Header from '../../components/header/Header'
import Button from '@material-tailwind/react/Button'
import Icon from '@material-tailwind/react/Icon'
import Login from '../login'
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css'
//back-end
import dynamic from 'next/dynamic'
import firebase from 'firebase'
import { useEffect, useRef, useState } from 'react'
import { useAuthState } from 'react-firebase-hooks/auth'
import { creds, store, provider, warehouse } from '../../firebaseFile'
import { EditorState } from 'draft-js'
import { useRouter } from 'next/router'
import { convertToRaw, convertFromRaw } from 'draft-js'
import { useDocument, useDocumentOnce } from 'react-firebase-hooks/firestore'

const Editor = dynamic(
  () => import('react-draft-wysiwyg').then(module => module.Editor),
  {
    ssr: false
  }
)

function Build () {
  const router = useRouter()
  const [user] = useAuthState(creds)
  if (!user) return <Login />
  const { id } = router.query
  const inputRef = useRef(null)
  const filePickRef = useRef(null)
  const [basePic, setBasePic] = useState(null)
  const [editorState, setEditorState] = useState(EditorState.createEmpty())

  const [docSnapshot] = useDocument(
    store
      .collection('userBlogs')
      .doc(user.email)
      .collection('blogs')
      .doc(id)
  )

  const [snapshot, loadingSnapshot] = useDocumentOnce(
    store
      .collection('userBlogs')
      .doc(user.email)
      .collection('blogs')
      .doc(id)
  )

  if (!loadingSnapshot & !snapshot?.data()?.title) {
    router.replace('/')
  }

  /*  const addPicToBlog = e => {
    const reader = new FileReader()
    if (e.target.value[0]) {
      reader.readAsDataURL(e.target.files[0])
    }
    reader.onload = readerEvent => {
      setBasePic(readerEvent.target.result)
    }
  }
*/

  const removePic = () => {
    setBasePic(null)
  }

  const publishPost = e => {
    e.preventDefault()

    if (!inputRef.current.value) return

    store
      .collection('userBlogs')
      .doc(user.email)
      .collection('blogs')
      .doc(id)
      .set(
        {
          blogText: inputRef.current.value
        },
        {
          merge: true
        }
      )

    store
      .collection('blogPosts')
      .doc(id)
      .set(
        {
          title: snapshot?.data()?.title,
          author: user.displayName,
          blogContent: inputRef.current.value,
          timestamp: firebase.firestore.FieldValue.serverTimestamp()
        },
        {
          merge: true
        }
      )
  }

  return (
    <div
      className='
        h-screen 
        overflow-hidden 
        scrolllbar-hide 
        bg-gray-200 
        pb-10'
    >
      <header
        className='
        top-0 
        z-50 
        sticky'
      >
        <div
          className='
        flex-1
        py-6
        bg-gray-600
        text-teal-500
        border-b-2
        border-blue-200
        px-10
        justify-evenly
        flex
        items-center
        '
        >
          <div
            className='
            cursor-pointer
            hover:animate-pulse
            flex
            items-center
            space-x-8
            '
          >
            <Button
              color='teal'
              buttonType='link'
              size='regular'
              rounded={false}
              block={false}
              iconOnly={false}
              ripple='dark'
              onClick={() => router.push('/blog')}
              className='flex items-center space-x-5'
            >
              <Icon name='drafts' size='3xl' />
              <h3 className='font-font-robot capitalize text-lg font-light'>
                {snapshot?.data()?.title}
              </h3>
            </Button>
          </div>
          <Button
            color='teal'
            buttonType='link'
            size='regular'
            rounded={false}
            block={false}
            iconOnly={false}
            ripple='dark'
            className='
                      flex 
                      items-center 
                      space-x-3
                      '
          >
            <img
              src={user?.photoURL}
              alt=''
              className='h-10 rounded-3xl border border-teal-200'
            />
            <h3 className='userName'>{user?.displayName}</h3>
          </Button>
        </div>
      </header>
      <main
        className='
            h-screen 
            max-w-[1780px] 
            mx-auto 
            grid 
            pb-[100px] 
            overflow-y-scroll 
            scrollbar-hide 
            bg-teal-200
             border-x 
             border-blue-100 '
      >
        {/**if no header img */}
        <Button
          color='lightBlue'
          buttonType='filled'
          size='lg'
          rounded={false}
          block={true}
          iconOnly={false}
          ripple='light'
          className='flex text-blue-100 items-center space-x-5 mb-[72px]'
        >
          <Icon name='add_a_photo' />
          <h2 className='text-lg capitalize font-robot-condensed font-medium'>
            Add your base pic
          </h2>
        </Button>
        {/**editor area */}
        <div
          className='
        textArea'
        >
          <h4 className='text-blue-200 font-hind-font text-xl font-semibold w-[320px] line-clamp-1 px-5'>
            {snapshot?.data()?.blogText}
          </h4>
          <input
            placeholder={`Type something, ${user?.displayName}`}
            ref={inputRef}
            type='text'
            className='
            overflow-y-scroll
            text-xl
            font-robot-slab
            bg-gray-300
            flex-grow 
            w-[400px]
            lg:w-[740px] 
            xl:w-[1780px]
            rounded-t-xl
            bg-transparent 
            p-24 
            text-teal-50 
            outline-0 
            border-none 
            shadow-lg '
          />

          {/*  <Editor
            editorState={editorState}
            onEditorStateChange={onEditorChange}
            toolbarClassName='flex sticky top-0 z-50 justify-center'
            editorClassName='
            text-teal-400
            mt-6
        bg-gray-800
        shadow-lg
        max-w-6xl
        mx-auto
        mb-10
        p-7
        '
          />
        */}
        </div>
        <Button
          onClick={publishPost}
          color='darkGray'
          buttonType='filled'
          rounded={false}
          block={true}
          iconOnly={false}
          ripple='light'
          className='
        bottom-0
        z-50
        sticky
        bg-gray-600
        border-t-2
        border-blue-100
        p-20
        justify-center
        h-10
        '
        >
          Publish
        </Button>
      </main>
    </div>
  )
}

export default Build
