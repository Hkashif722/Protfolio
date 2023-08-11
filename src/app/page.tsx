import Image from 'next/image'
import NavBar from './components/NavBar'
import TopBanner from './components/TopBanner'
import Content from './components/Content'

import { Josefin_Sans} from 'next/font/google'

const josefin_Sans = Josefin_Sans({
    weight: '200',
    subsets: ['latin'],
})

export default function Home() {
  return (
    <main className={josefin_Sans.className}>
      <NavBar/>

      <TopBanner/>

      <div className=" float fixed top-40 right-1/4 min-h-screen flex-col items-center justify-between p-24 top flex place-items-center before:absolute before:h-[300px] before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px] z-[-1]">
        
      </div> 

      <Content/>

      <div className=" float fixed top-1/3 left-40 min-h-screen flex-col items-center justify-between p-24 top flex place-items-center before:absolute before:h-[300px] before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px] z-[-1]"></div>

      {/* <BottomBanner/> */}

      {/* <Footer/> */}

      
      
    </main>
  )
}
