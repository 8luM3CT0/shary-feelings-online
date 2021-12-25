//front-end
import '../styles/globals.css'
import '@material-tailwind/react/tailwind.css'
import Router from 'next/router'
import ProgressBar from '@badrap/bar-of-progress'
//back-end
import { useEffect } from 'react'
import { useAuthState } from 'react-firebase-hooks/auth'
import { creds, store } from '../firebaseFile'
import firebase from 'firebase'

const progress = new ProgressBar({
  size: 4,
  color: '#66fcf1',
  className: 'z-50',
  delay: 100
})

Router.events.on('routeChangeStart', progress.start)
Router.events.on('routeChangeComplete', progress.finish)
Router.events.on('routeChangeError', progress.finish)

function MyApp ({ Component, pageProps }) {
  const [user] = useAuthState(creds)

  useEffect(() => {
    if (user) {
      store
        .collection('users')
        .doc(user.uid)
        .set(
          {
            email: user.email,
            displayName: user.displayName,
            photoURL: user.photoURL,
            activeState: firebase.firestore.FieldValue.serverTimestamp()
          },
          { merge: true }
        )
    }
  }, [user])
  return (
    <>
      <link
        rel='stylesheet'
        href='https://fonts.googleapis.com/icon?family=Material+Icons'
      />
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
