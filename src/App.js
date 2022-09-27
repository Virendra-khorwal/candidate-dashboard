
import Home from './pages/Home';
import SideNav from './components/SideNav'
import RecJob from './components/RecJob'
import Navbar from './components/Navbar';



function App() {
  return (
    <div className='text-gray bg-secondary-color h-screen lg:h-full flex flex-col'>
      <Navbar />
      <div className='grid grid-cols-6 grow'>
        <SideNav />
        <div className='grid col-span-5 grid-cols-4 lg:grid-cols-none grow'>
          <main className='bg-primary-color col-span-3 rounded-lg'>
            <Home />
          </main>
          <RecJob />
        </div>
        
       
      </div>
    </div>
  );
}

export default App;
