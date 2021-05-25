import Container from '@/components/Container'
import Header from '@/components/Header'

export default function Home() {
  return (
    <>
      <Container>
        <div className="w-full mx-auto mt-10 md:my-20 md:max-w-5xl">
          <Header />
        </div>
      </Container>
    </>
  )
}
