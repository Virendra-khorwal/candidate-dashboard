
import Home from './pages/Home';
import SideNav from './components/SideNav'
import RecJob from './components/RecJob'
import Navbar from './components/Navbar';



function App() {
  return (
    <div className='text-gray bg-secondary-color h-screen flex flex-col'>
      <Navbar />
      <div className='grid grid-cols-6 grow'>
        <SideNav />
        <main className='bg-primary-color col-span-4 rounded-lg'>
          <Home />
        </main>
        <RecJob />
      </div>
    </div>
  );
}

export default App;
