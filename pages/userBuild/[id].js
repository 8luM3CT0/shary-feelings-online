//front-end
import Header from '../../components/header/Header'
//back-end

function Build () {
  return (
    <div
      className='
        h-screen 
        overflow-hidden 
        scrolllbar-hide 
        bg-gray-200 
        pb-10 '
    >
      <Header />
      <main
        className='
            h-screen 
            max-w-[1780px] 
            mx-auto 
            grid 
            pb-[120px] 
            overflow-y-scroll 
            scrollbar-hide 
            bg-teal-200
             border-x 
             border-blue-100 '
      >
        {/**Img tag */}
      </main>
    </div>
  )
}

export default Build
