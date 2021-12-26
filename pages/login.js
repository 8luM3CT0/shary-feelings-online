//front-end
import Head from 'next/head'
import Button from '@material-tailwind/react/Button'
import Icon from '@material-tailwind/react/Icon'
//back-end
import { creds, provider } from '../firebaseFile'

function Login () {
  const signIn = () => {
    creds.signInWithPopup(provider).catch(alert)
  }

  return (
    <div
      className='
        bg-gray-200 
        overflow-hidden 
        scrollbar-hide 
        flex 
        flex-col 
        justify-center 
        items-center 
        py-2'
    >
      <Head>
        <title>A login area</title>
      </Head>
      <div
        className='
        p-[70px] 
        px-[14px]
        grid
        justify-center
        bg-blue-100
        '
      >
        <Icon name='book' size='3xl' />
        <Button
          onClick={signIn}
          color='teal'
          buttonType='filled'
          size='regular'
          rounded={false}
          block={false}
          iconOnly={false}
          ripple='light'
          className='flex items-center space-x-4'
        >
          <Icon name='login' size='3xl' />
          <h2 className='capitalize text-base '>Sign in</h2>
        </Button>
      </div>
    </div>
  )
}

export default Login