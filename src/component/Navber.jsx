import { useState } from 'react'
import { RxCross2 } from 'react-icons/rx'
import { BiLogoFacebook } from 'react-icons/bi'
import { SlSocialTwitter } from 'react-icons/sl'
import { CiYoutube } from 'react-icons/ci'
import { MdOutlineEmail } from 'react-icons/md'
import { IoLogoInstagram } from 'react-icons/io'
import { FcGallery } from 'react-icons/fc'
import { FcContacts } from 'react-icons/fc'
import img1 from '../../public/o6e5X8Ct60.json'
import img2 from '../../public/Animation - 1715280317714.json'
import Lottie from 'lottie-react'
import Banner from '../Banner/Banner'
import Banner3 from '../Banner/Banner3'

const Navber = ({ children }) => {
  const [isSidebarOpen, setSidebarOpen] = useState(false)

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen)
  }

  const [isHovered, setIsHovered] = useState(false)

  const handleMouseEnter = () => {
    setIsHovered(true)
  }

  const handleMouseLeave = () => {
    setIsHovered(false)
  }

  const [isHovered1, setIsHovered1] = useState(false)

  const handleMouseEnter1 = () => {
    setIsHovered1(true)
  }

  const handleMouseLeave1 = () => {
    setIsHovered1(false)
  }

  const NavLink = (
    <>
      <li
        onMouseMove={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        className='hover:text-orange-600 tracking-wide cursor-pointer py-6 absolute  -left-20 '
      >
        EXPLOR
      </li>

      <li
        onMouseMove={handleMouseEnter1}
        onMouseLeave={handleMouseLeave1}
        className='hover:text-orange-600 tracking-wide  cursor-pointer py-6 absolute -left-2'
      >
        ALL PAGES
      </li>
      <li className='hover:text-orange-600 tracking-wide py-2'>PLANS </li>
      <li className='hover:text-orange-600 tracking-wide py-2'>REGISTER</li>
      <li className='hover:text-orange-600 tracking-wide py-2'>DASHBOARD</li>
    </>
  )

  const NavLink2 = (
    <>
      {/* <li className='cursor-pointer'>
        <a>
          <img
            className='w-5 h-5'
            src='https://i.ibb.co/wsZnB3C/home.png'
            alt=''
          />
          HOME
        </a>
      </li>
      <li className='cursor-pointer'>
        <a>
          <img
            className='w-5 h-5'
            src='https://i.ibb.co/804wK7F/people.png'
            alt=''
          />
          ABOUT US
        </a>
      </li>
      <li className='cursor-pointer'>
        <a>
          <img
            className='w-5 h-5'
            src='https://i.ibb.co/T82QKmV/received.png'
            alt=''
          />
          PRODUCTS
        </a>
      </li>
      <li className='cursor-pointer'>
        <a>
          <FcGallery size={20}></FcGallery>GALLERY
        </a>
      </li>
      <li className='cursor-pointer'>
        <a>
          <FcContacts size={20}></FcContacts>CONTACT
        </a>
      </li> */}
    </>
  )

  return (
    <div className=''>
      <div className='drawer '>
        <input
          id='my-drawer-3'
          type='checkbox'
          className='drawer-toggle'
          checked={isSidebarOpen}
          onChange={toggleSidebar}
        />
        <div className='drawer-content '>
          <div className=' md:flex md:items-center  md:justify-between px-0 md:px-2 lg:px-4  xl:px-16 bg-gradient-to-r from-[#573926] to-[#663b1f] overflow-hidden '>
            <div className=' md:flex items-center justify-center text-white text-xs font-semibold  hidden md:pl-3'>
              {/* <img className="w-4 h-4 " src="https://i.ibb.co/q7vRfmL/placeholder.png" alt="image" /> */}
              <p className=' hover:bg-[#f5e1c9] hover:text-[#754021] p-2 px-4  border-x-[1px] tracking-normal cursor-pointer'>
                ABOUT
              </p>
              <p className=' hover:bg-[#f5e1c9] hover:text-[#754021] p-2 px-4 tracking-normal cursor-pointer'>
                FAQ
              </p>
              <p className=' hover:bg-[#f5e1c9] hover:text-[#754021] p-2 px-4  border-x-[1px] tracking-normal cursor-pointer'>
                CONTACT
              </p>
            </div>

            <div className=' flex items-center justify-between gap-5 px-7 text-white text-xs font-semibold '>
              <div className=' p-2 md:flex items-center px-1 gap-1 hidden'>
                <MdOutlineEmail size={15}></MdOutlineEmail>
                riad80717@gmail.com
              </div>

              <div className='relative flex items-center md:hidden ml-3'>
                <Lottie
                  className='absolute -ml-11 w-16 md:w-20 '
                  animationData={img1}
                ></Lottie>
                <p className='font-medium md:font-semibold -mt-[1px]'>
                  {' '}
                  +8801756660368
                </p>
              </div>
              <div className='flex items-center'>
                <p className='hover:bg-[#f5e1c9] hover:text-[#754021] p-2 md:border-x-2 cursor-pointer'>
                  <BiLogoFacebook size={14}></BiLogoFacebook>
                </p>
                <p className='hover:bg-[#f5e1c9] hover:text-[#754021] p-2 cursor-pointer'>
                  <SlSocialTwitter size={14}></SlSocialTwitter>
                </p>
                <p className='hover:bg-[#f5e1c9] hover:text-[#754021] p-2 md:border-x-2 cursor-pointer'>
                  <CiYoutube size={16}></CiYoutube>
                </p>
                <p className='hover:bg-[#f5e1c9] hover:text-[#754021] p-2 md:border-r-2 cursor-pointer'>
                  <IoLogoInstagram size={15}></IoLogoInstagram>
                </p>
              </div>
            </div>
          </div>

          <div className='flex items-center justify-between md:px-2 lg:px-7 xl:px-16  bg-slate-100  z-30  '>
            <div className='flex items-center'>
              <div className=' lg:hidden  pt-1'>
                <label
                  htmlFor='my-drawer-3'
                  aria-label='open sidebar'
                  className='btn btn-square btn-ghost text-white'
                >
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    fill='none'
                    viewBox='0 0 24 24'
                    className=' inline-block w-6 h-6 stroke-current text-black'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth='2'
                      d='M4 6h16M4 12h16M4 18h16'
                    ></path>
                  </svg>
                </label>
              </div>
              <div className=' flex items-center'>
                <Lottie className='w-11 h-11  ' animationData={img2}></Lottie>

                <a className='pl-2  md:text-xl font-semibold uppercase pt-1 tracking-[2px]'>
                  <span className='text-[#573926] text-sm '>Wedding </span>
                  <span className='text-amber-600 text-sm pl-1'>matrimony</span>
                </a>
              </div>
            </div>


            <div className='navbar-center hidden lg:block'>
              <ul className=' menu menu-horizontal   font-medium text-[#573926] flex items-center gap-7 mt-2 ml-8  pl-[86px] relative'>
                {NavLink}
              </ul>
            </div>


            <div className='  '>
              <div className='relative md:flex items-center hidden'>
                <div className='avatar'>
                  <div className='w-12 border p-1 rounded-full '>
                    <img
                      className='rounded-full'
                      src='https://i.ibb.co/rZbDBvB/Adobe-Stock-650211873-Preview.jpg'
                    />
                  </div>
                </div>
                <p className='pl-2 md:font-semibold -mt-[1px] '>
                  {' '}
                  Riad jowarder
                </p>
              </div>
            </div>
          </div>

          <div
            onMouseMove={handleMouseEnter1}
            onMouseLeave={handleMouseLeave1}
            className='absolute z-50 w-full'
          >
            {isHovered1 ? <Banner3></Banner3> : ''}
          </div>

          <div
            onMouseMove={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            className='absolute z-50 w-full'
          >
            {isHovered ? <Banner></Banner> : ''}
          </div>

          {children}
        </div>

        <div className='drawer-side lg:drawer-toggle z-50'>
          <label
            htmlFor='my-drawer-3'
            aria-label='close sidebar'
            className='drawer-overlay '
          ></label>

          <div className='menu py-3  px-1 w-48 min-h-full bg-gradient-to-r from-[#f5f3f2] to-[#f6f2ef]  '>
            <div
              className='flex justify-end cursor-pointer'
              onClick={toggleSidebar}
            >
              <RxCross2 color='#ef9565' size={25}></RxCross2>
            </div>
            <ul
              onClick={toggleSidebar}
              className='pt-7 font-bold text-[#ef9565] '
            >
              {NavLink2}
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navber
