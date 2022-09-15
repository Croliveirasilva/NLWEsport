import './styles/main.css';
import logoImag from './assets/logo-nlw-esports.png';


function App() {
  return (
    <div className="max-w-[1344px] mx-auto flex flex-col items-center my-20">
      <img src={logoImag} />

      <h1 className=" text-6xl text-white  font-black mt-20">Seu <span className="text-transparent bg-nlw-gradient bg-clip-text">duo</span> está aqui.</h1>

      <div className="grid grid-cols-6 gap-6 mt-16">
        <a href="" className="relative rounded-lg overflow-hidden">
          <img src='/game-1.png' alt='logo' />
          <div className="w-full pt-16 pb-4 px-4 bg-game-gradient absolute bottom-0 left-0 right-0">
            <strong className="font-bold text-white block">League of legends</strong>
            <span className="text-zinc-300 text-sm block ">4 Anúncios</span>
          </div>
        </a>
        <a href="" className="relative rounded-lg overflow-hidden">
          <img src='/game-2.png' alt='logo' />
          <div className="w-full pt-16 pb-4 px-4 bg-game-gradient absolute bottom-0 left-0 right-0">
            <strong className="font-bold text-white block">League of legends</strong>
            <span className="text-zinc-300 text-sm block ">4 Anúncios</span>
          </div>
        </a>
        <a href="" className="relative rounded-lg overflow-hidden">
          <img src='/game-3.png' alt='logo' />
          <div className="w-full pt-16 pb-4 px-4 bg-game-gradient absolute bottom-0 left-0 right-0">
            <strong className="font-bold text-white block">League of legends</strong>
            <span className="text-zinc-300 text-sm block ">4 Anúncios</span>
          </div>
        </a>
        <a href="" className="relative rounded-lg overflow-hidden">
          <img src='/game-4.png' alt='logo' />
          <div className="w-full pt-16 pb-4 px-4 bg-game-gradient absolute bottom-0 left-0 right-0">
            <strong className="font-bold text-white block">League of legends</strong>
            <span className="text-zinc-300 text-sm block ">4 Anúncios</span>
          </div>
        </a>
        <a href="" className="relative rounded-lg overflow-hidden">
          <img src='/game-5.png' alt='logo' />
          <div className="w-full pt-16 pb-4 px-4 bg-game-gradient absolute bottom-0 left-0 right-0">
            <strong className="font-bold text-white block">League of legends</strong>
            <span className="text-zinc-300 text-sm block ">4 Anúncios</span>
          </div>
        </a>
        <a href="" className="relative rounded-lg overflow-hidden">
          <img src='/game-6.png' alt='logo' />
          <div className="w-full pt-16 pb-4 px-4 bg-game-gradient absolute bottom-0 left-0 right-0">
            <strong className="font-bold text-white block">League of legends</strong>
            <span className="text-zinc-300 text-sm block ">4 Anúncios</span>
          </div>
        </a>

      </div>
      <div className="bg-[#2A2634] px-8 py-6 mt-8 self-stretch rounded-lg overflow-hidden">

      </div>
    </div>
  )
}

export default App
