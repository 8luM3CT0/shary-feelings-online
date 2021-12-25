//front-end
import Modal from '@material-tailwind/react/Modal'
import ModalHeader from '@material-tailwind/react/ModalHeader'
import ModalBody from '@material-tailwind/react/ModalBody'
import ModalFooter from '@material-tailwind/react/ModalFooter'
import Button from '@material-tailwind/react/Button'
import Icon from '@material-tailwind/react/Icon'
import { CodeIcon } from '@heroicons/react/outline'
import GitHubIcon from '@material-ui/icons/GitHub'
import LinkedInIcon from '@material-ui/icons/LinkedIn'
//back-end
import { useState } from 'react'

function Sidebar () {
  return (
    <div
      className='
    sidebarDiv 
    justify-evenly'
    >
      <div
        className='
        space-y-6 
        px-5
        text-gray-600'
      >
        <h1
          className='
            top-0 
            text-gray-800 
            font-semibold 
            text-3xl'
        >
          Categories
        </h1>
        <div
          className='
        overflow-y-scroll
        h-[290px]
        ml-6
        space-y-5
        scrollbar-hide
        '
        >
          <span className='categories'>
            <Icon name='sports_martial_arts' size='3xl' />
            <h2 className='text-xl font-light'>Lifestyle</h2>
          </span>
          <span className='categories'>
            <Icon name='computer' size='3xl' />
            <h2 className='text-xl font-light'>Tech</h2>
          </span>
          <span className='categories'>
            <Icon name='monitor_heart' size='3xl' />
            <h2 className='text-xl font-light'>Health</h2>
          </span>
          <span className='categories'>
            <Icon name='flight' size='3xl' />
            <h2 className='text-xl font-light'>Travel</h2>
          </span>
          <span className='categories'>
            <Icon name='brunch_dining' size='3xl' />
            <h2 className='text-xl font-light'>Food</h2>
          </span>
        </div>
      </div>
      <div
        className='
      space-y-6
      flex-col
      justify-center 
      px-5
      text-gray-600
      '
      >
        <span
          className='
        flex 
        items-center 
        space-x-4 
        text-blue-700 
        cursor-pointer
        lowerSidebarOptions
        '
        >
          <CodeIcon className='h-[28px] ' />
          <h1
            className='
          text-lg 
          font-robot-condensed 
          font-normal '
          >
            Code repository
          </h1>
        </span>
        <span
          className='
        flex 
        items-center 
        space-x-4 
        text-blue-700 
        cursor-pointer
        lowerSidebarOptions
        '
        >
          <GitHubIcon className='h-[28px] ' />
          <h1
            className='
          text-lg 
          font-robot-condensed 
          font-normal '
          >
            GitHub
          </h1>
        </span>
        <span
          className='
        flex 
        items-center 
        space-x-4 
        text-blue-700 
        cursor-pointer
        lowerSidebarOptions
        '
        >
          <LinkedInIcon className='h-7' />
          <h1
            className='
          text-lg 
          font-robot-condensed 
          font-normal '
          >
            LinkedIn
          </h1>
        </span>
        <span
          className='
        flex 
        items-center 
        space-x-4 
        text-blue-700 
        cursor-pointer
        lowerSidebarOptions
        '
        >
          <Icon name='face' size='3xl' />
          <h1
            className='
          text-lg 
          font-robot-condensed 
          font-normal '
          >
            Portfolio
          </h1>
        </span>
      </div>
    </div>
  )
}

export default Sidebar
