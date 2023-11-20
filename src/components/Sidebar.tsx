export default function Sidebar(){
  return(
    <aside className="w-72 bg-gray800 mt-6 overflow-hidden rounded-lg">
      <div className="w-full flex gap-2 items-center">
        <img className="w-14 h-14" src="https://images.unsplash.com/photo-1534972195531-d756b9bfa9f2?q=40&w=500&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"/>
        <div className="flex flex-col">
          <span className="text-gray100 text-[10px]">Lucas Gaelzer Machado</span>
          <span className="text-gray400 text-[8px]">Web Developer</span>
        </div>
      </div>
    </aside>
  )
}