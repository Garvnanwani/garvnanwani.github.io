import Image from 'next/image'

const Header = () => {
  return (
    <div>
      <div className="items-center justify-between mx-auto md:flex">
        <div>
          <div className="underline"></div>
          <h1 className="mb-2 font-mono text-6xl md:mb-6">I'm Garv</h1>
          <h4 className="mb-4 text-2xl md:my-6 text-secondary">
            Full Stack Web Developer And Designer
          </h4>
          <button
            href=""
            className="p-3 my-5 text-white bg-gray-600 rounded w-50 h-50 focus:outline-none dark:bg-gray-800 "
          >
            Contact me
          </button>
          <ul className="">
            <li>
              <a
                href="https://twitter.com/thisisgarv"
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon"
              >
                <i className="fab fa-twitter"></i>
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/garvnanwani/"
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon"
              >
                <i className="fab fa-linkedin"></i>
              </a>
            </li>
            <li>
              <a
                href="https://github.com/Garvnanwani"
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon"
              >
                <i className="fab fa-github"></i>
              </a>
            </li>
            <li>
              <a
                href="https://dev.to/thisisgarv"
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon"
              >
                <i className="fab fa-dev"></i>
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com/garv_nanwani/"
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon"
              >
                <i className="fab fa-instagram"></i>
              </a>
            </li>
          </ul>
        </div>
        <div className="relative mx-auto mt-9">
          <Image
            src="/mypic.jpg"
            alt="garv nanwani"
            width={400}
            height={400}
            objectFit="cover"
            className="z-10 mx-auto"
          />
          <div className="absolute md:border-4 md:w-96 md:h-96 md:top-12 left-14 md:border-secondary"></div>
        </div>
      </div>
    </div>
  )
}

export default Header
