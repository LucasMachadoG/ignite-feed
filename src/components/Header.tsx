import igniteLogo from '../assets/ignite-logo.svg'

export default function Header(){
  return(
    <div className="w-full py-5 bg-gray800 flex justify-center items-center">
      <img className='h-10' src={igniteLogo} alt="" />
    </div>
  )
}