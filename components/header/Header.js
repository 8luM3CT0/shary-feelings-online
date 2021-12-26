//front-end
import Button from '@material-tailwind/react/Button'
import Icon from '@material-tailwind/react/Icon'
import Modal from '@material-tailwind/react/Modal'
import ModalHeader from '@material-tailwind/react/ModalHeader'
import ModalBody from '@material-tailwind/react/ModalBody'
import ModalFooter from '@material-tailwind/react/ModalFooter'
import GoogleIcon from '@mui/icons-material/Google'
//back-end
import { creds, store, provider } from '../../firebaseFile'
import { useEffect, useState } from 'react'
import { useAuthState } from 'react-firebase-hooks/auth'
import { useRouter } from 'next/router'
import firebase from 'firebase'

function Header () {
  const router = useRouter()
  const [user] = useAuthState(creds)
  const signIn = () => {
    creds.signInWithPopup(provider).catch(alert)
    setShowModal(false)
  }
  const [showModal, setShowModal] = useState(false)
  return (
    <>
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
              onClick={() => router.push('/')}
              className='flex items-center space-x-5'
            >
              <Icon name='book' size='3xl' />
              <h3 className='appName font-font-robot capitalize text-2xl font-light'>
                Blog
              </h3>
            </Button>
          </div>
          <div
            className='
          flex
          items-center
           space-x-3
           font-robot-slab
           text-lg 
          '
          >
            <h4 onClick={() => router.push('/')} className='headerLinks'>
              Home
            </h4>
            <h4 className='headerLinks'>Contact</h4>
            <h4 onClick={() => router.push('/blog')} className='headerLinks'>
              Blog
            </h4>
            <h4 className='headerLinks'>News</h4>

            <div className='headerIcons'>
              <Button
                color='teal'
                buttonType='link'
                size='sm'
                rounded={false}
                block={false}
                iconOnly={false}
                ripple='dark'
                onClick={() => router.push('/')}
                className='flex items-center space-x-5'
              >
                <Icon name='cottage' size='xl' />
              </Button>
              <Button
                color='teal'
                buttonType='link'
                size='sm'
                rounded={false}
                block={false}
                iconOnly={false}
                ripple='dark'
                onClick={() => router.push('/')}
                className='flex items-center space-x-5'
              >
                <Icon name='contact_page' size='xl' />
              </Button>
              <Button
                color='teal'
                buttonType='link'
                size='sm'
                rounded={false}
                block={false}
                iconOnly={false}
                ripple='dark'
                onClick={() => router.push('/')}
                className='flex items-center space-x-5'
              >
                <Icon name='notes' size='xl' />
              </Button>
              <Button
                color='teal'
                buttonType='link'
                size='sm'
                rounded={false}
                block={false}
                iconOnly={false}
                ripple='dark'
                onClick={() => router.push('/')}
                className='flex items-center space-x-5'
              >
                <Icon name='newspaper' size='xl' />
              </Button>
            </div>
          </div>
          {user ? (
            <Button
              onClick={() => creds.signOut()}
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
          ) : (
            <Button
              onClick={e => setShowModal(true)}
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
              <Icon name='account_circle' size='3xl' />
              <h3 className='userName'>Sign in</h3>
            </Button>
          )}
        </div>
      </header>
      <Modal size='lg' active={showModal} toggler={() => setShowModal(false)}>
        <ModalHeader toggler={() => setShowModal(false)}>
          <h1 className='text-teal-500 font-google-sans text-xl'>Log In</h1>
        </ModalHeader>
        <ModalBody>
          <p className='text-gray-600 w-[200px] font-robot-slab text-sm'>
            Sign in with the button below to start adding content
          </p>
          <div className='p-12'>
            <Button
              onClick={signIn}
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
              <GoogleIcon className='h-7' />
              <h3 className='userName'>Log in</h3>
            </Button>
          </div>
        </ModalBody>
        <ModalFooter>
          <Button
            color='red'
            buttonType='link'
            onClick={e => setShowModal(false)}
            ripple='dark'
          >
            Cancel
          </Button>
        </ModalFooter>
      </Modal>
    </>
  )
}

export default Header
