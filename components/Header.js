import Image from 'next/image'
import Link from 'next/link'
import {
  FaDev,
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaTwitter
} from 'react-icons/fa'

const Header = () => {
  return (
    <div className="items-center justify-between w-full mx-auto mt-5 text-gray-800 md:mt-15 md:mb-20 md:max-w-5xl md:flex">
      <div>
        <div className="w-24 h-1 mb-5 bg-secondary"></div>
        <h1 className="mt-5 mb-2 font-mono text-4xl md:text-6xl dark-black dark:text-white md:mb-6">
          Hii, I'm Garv
        </h1>
        <h4 className="mt-6 mb-12 text-2xl md:mt-6 md:mb-10 text-secondary">
          Full Stack Web Developer And Designer
        </h4>
        <Link href="/contact">
          <a className="p-3 my-5 text-white bg-gray-600 rounded md:my-14 w-50 h-50 focus:outline-none dark:bg-gray-800 ">
            Contact me
          </a>
        </Link>
        <ul className="grid justify-center grid-cols-5 mt-16 w-80">
          <li>
            <a
              href="https://twitter.com/garvnanwani"
              target="_blank"
              rel="noopener noreferrer"
              className="text-2xl transition-all duration-500 ease-in-out cursor-pointer hover:text-secondary dark:text-white"
            >
              <FaTwitter />
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/garvnanwani/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-2xl transition-all duration-500 ease-in-out cursor-pointer hover:text-secondary dark:text-white"
            >
              <FaLinkedin />
            </a>
          </li>
          <li>
            <a
              href="https://github.com/Garvnanwani"
              target="_blank"
              rel="noopener noreferrer"
              className="text-2xl transition-all duration-500 ease-in-out cursor-pointer hover:text-secondary dark:text-white"
            >
              <FaGithub />
            </a>
          </li>
          <li>
            <a
              href="https://dev.to/garvnanwani"
              target="_blank"
              rel="noopener noreferrer"
              className="text-2xl transition-all duration-500 ease-in-out cursor-pointer hover:text-secondary dark:text-white"
            >
              <FaDev />
            </a>
          </li>
          <li>
            <a
              href="https://www.instagram.com/garv_nanwani/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-2xl transition-all duration-500 ease-in-out cursor-pointer hover:text-secondary dark:text-white"
            >
              <FaInstagram />
            </a>
          </li>
        </ul>
      </div>
      <div className="mt-9">
        <Image
          src="/mypic.jpg"
          alt="garv nanwani"
          width={400}
          height={400}
          objectFit="cover"
          className="z-10 mx-auto"
        />
      </div>
    </div>
  )
}

export default Header
