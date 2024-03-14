import { domainData } from '../../data/domains'
import { creativeDomainData } from '../../data/creative_domain'
import Navbar from './../main/Navbar'
import img from '../../assets/images/leads/atri.jpg'
import Footer from '../../components/common/Footer.jsx'
import { Link } from 'react-router-dom'

export const DomainLayout = () => {
  return (
    <div className='min-h-[90vh] overflow-x-clip bg-[#fedad3]'>
      <Navbar />
      <div className='h-[36vh] w-full bg-[#fedad3] flex justify-center items-center'>
        <h1 className=' mt-36 font-semibold text-3xl md:text-5xl'>
          OUR TECH DOMAINS
        </h1>
      </div>
      <hr class='w-48 h-1 mx-auto  bg-gray-100 border-0 rounded dark:bg-gray-700'></hr>
      <div className='h-full py-24 flex bg-[#fedad3] flex-wrap gap-8'>
        {domainData.map((domain) => {
          return (
            <div className='h-1/2 flex flex-col'>
              <h1 className='h-fit bg-white border font-bold border-slate-400 p-4 w-full text-black rounded-xl ml-12'>
                {domain.name}
              </h1>
              <div className='w-full p-4 md:p-12 h-full flex flex-col md:flex-row items-center gap-8 '>
                <div className='h-full w-1/2'>
                  <p
                    className='text-center lg:my-5'
                    style={{ textAlign: 'left' }}
                  >
                    {domain.description}
                  </p>
                  <Link
                    className='lg:col-span-1 px-[1.5rem] py-2 lg:w-[8.5rem] text-center w-[10.5rem]  h-12 lg:my-3 lg:ml-30 hover:text-[#ff3f3a] hover:bg-[#ffffff] bg-[#ff3f3a] text-[#ffffff] rounded-md border-2 border-[#ff3f3a] cursor-pointer'
                    to={domain.buttonlink}
                  >
                    More Info
                  </Link>
                </div>
                <div className='w-full md:w-1/2 h-full justify-around gap-4 flex'>
                  <div className='h-full w-full md:w-1/3'>
                    <img src={domain.image} className='h-full w-full' />
                  </div>
                </div>
              </div>
            </div>
          )
        })}
      </div>
      <hr class='h-px my-8 bg-gray-200 border-0 dark:bg-gray-700' />

      <div className='h-[36vh] w-full bg-[#fedad3] flex justify-center items-center'>
        <h1 className=' mt-36 font-semibold text-3xl md:text-5xl'>
          OUR CREATIVE DOMAINS
        </h1>
      </div>
      <hr class='w-48 h-1 mx-auto  bg-gray-100 border-0 rounded dark:bg-gray-700'></hr>
      <div className='h-full py-24 flex bg-[#fedad3] flex-wrap gap-8'>
        {creativeDomainData.map((domain) => {
          return (
            <div className='h-1/2 flex flex-col'>
              <h1 className='h-fit bg-white border font-bold border-slate-400 p-4 w-full text-black rounded-xl ml-12'>
                {domain.name}
              </h1>
              <div className='w-full p-4 md:p-12 h-full flex flex-col md:flex-row items-center gap-8 '>
                <div className='h-full w-1/2'>
                  <p
                    className='text-center lg:my-5'
                    style={{ textAlign: 'left' }}
                  >
                    {domain.description}
                  </p>
                </div>
                <div className='w-full md:w-1/2 h-full justify-around gap-4 flex'>
                  <div className='h-full w-full md:w-1/3'>
                    <img src={domain.image} className='h-full w-full' />
                  </div>
                </div>
              </div>
            </div>
          )
        })}
      </div>
      <Footer />
    </div>
  )
}
