import './App.css';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import OurRecipes from './components/OurRecipes/OurRecipes';

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

      {/* Our Recipes section */}
      <section>
        <OurRecipes></OurRecipes>
      </section>
    </>
  )
}

export default App
