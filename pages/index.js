import Container from '@/components/Container'
import Header from '@/components/Header'

export default function Home() {
  return (
    <>
      <Container
        title="Garv nanwani - Developer and Student"
        description="Personal Portfolio of Garv nanwani"
      >
        <div className="w-full mx-auto md:max-w-5xl">
          <Header />
        </div>
      </Container>
    </>
  )
}
