import './App.css';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';

function App() {

  return (
    <>
      {/* header section */}
      <section className='mt-3 mb-10'>
        <Header></Header>
      </section>

      {/* hero section */}
      <section className='mb-24'>
        <Hero></Hero>
      </section>
    </>
  )
}

export default App
