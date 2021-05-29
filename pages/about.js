import Container from '@/components/Container'
import Image from 'next/image'

export default function About() {
  return (
    <>
      <Container>
        <div className="justify-between w-full mx-auto mt-10 text-gray-800 dark:text-white lg:flex min-h-3/4 md:my-20 md:max-w-5xl">
          <div className="mb-5 text-3xl lg:hidden ">About me</div>
          <Image
            src="/mypic2.jpg"
            alt="garv nanwani"
            width={450}
            height={450}
          />
          <div className="max-w-xl lg:ml-10">
            <div className="hidden mb-5 text-5xl lg:block">About Me</div>
            <div className="mb-7">
              Hey, My name is Garv Nanwani and I am currently a Second Year
              Computer Science Undergraduate Student at JMI,
              <span> New Delhi.</span>
            </div>
            <div className="mb-7">
              My field of Interests are programming and psychology. I have been
              coding for around 2 years now. I love to design websites and build
              full stack applications using MERN stack preferably.{' '}
            </div>
            <div className="mb-7">
              I am also a guest writer at daily.dev where I write technical
              articles related to development and programming in general.
            </div>
          </div>
        </div>
      </Container>
    </>
  )
}
