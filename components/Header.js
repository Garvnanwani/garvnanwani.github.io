import Image from 'next/image'
import {
  FaDev,
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaTwitter
} from 'react-icons/fa'

const Header = () => {
  return (
    <div className="mx-auto">
      <div className="items-center justify-between mx-auto md:flex">
        <div>
          <div className="underline"></div>
          <h1 className="mb-2 font-mono text-6xl dark-black dark:text-white md:mb-6">
            I'm Garv
          </h1>
          <h4 className="mb-4 text-2xl md:my-6 text-secondary">
            Full Stack Web Developer And Designer
          </h4>
          <button
            href=""
            className="p-3 my-5 text-white bg-gray-600 rounded w-50 h-50 focus:outline-none dark:bg-gray-800 "
          >
            Contact me
          </button>
          <ul className="grid justify-center grid-cols-5 mt-8 w-80">
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
    </div>
  )
}

export default Header
