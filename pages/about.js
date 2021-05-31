import Container from '@/components/Container'
import Image from 'next/image'

export default function About() {
  return (
    <>
      <Container>
        <div className="w-full mx-auto mt-5 md:mt-15 md:mb-20 md:max-w-5xl">
          <div className="h-1 mb-5 w-28 bg-secondary"></div>
          <h1 className="mb-10 text-3xl font-bold tracking-tight text-black md:text-5xl dark:text-white">
            About me
          </h1>
          <div className="justify-center gap-10 md:flex">
            <Image
              src="/mypic2.jpg"
              alt="garv nanwani"
              width={450}
              height={450}
            />
            <div className="max-w-xl mt-10 md:mt-0">
              <div className="mb-7">
                Hey, My name is Garv Nanwani and I am currently a Second Year
                Computer Science Undergraduate Student at JMI,
                <span> New Delhi.</span>
              </div>
              <div className="mb-7">
                My field of Interests are programming and psychology. I have
                been coding for around 2 years now. I love to design websites
                and build full stack applications using MERN stack preferably.{' '}
              </div>
              <div className="mb-7">
                I am also a guest writer at daily.dev where I write technical
                articles related to development and programming in general.
              </div>
            </div>
          </div>
        </div>
      </Container>
    </>
  )
}
