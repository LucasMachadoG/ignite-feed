export default function Post(){
  return(
    <div className="w-72 flex flex-col bg-gray800 mt-6 rounded-lg p-3">
      <div className="w-full flex justify-between">
        <img />
        <div className="w-full flex flex-col">
          <span className="text-xs font-semibold text-gray100">Lucas Gaelzer Machado</span>
          <span className="text-[10px] font-semibold text-gray400">Web Developer</span>
        </div>
        <span className="text-[10px] font-semibold text-gray400">Publicado há 1h</span>
      </div>
      <div className="mt-4 text-xs text-gray300 gap-3 flex flex-col">
        <p>Fala galeraa 👋</p>

        <p>Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀</p>

        <p>👉 <a className="text-green400" href="#">jane.design/doctorcare</a></p>

        <p><a className="text-green400" href="#">#novoprojeto #nlw #rocketseat</a></p>
      </div>

      <div className="w-full h-[2px] bg-gray600 mt-4 mb-4"></div>
      
      <form className="w-full flex flex-col ">
        <h1 className="text-gray100 text-xs mb-2">Deixe o seu feedback</h1>

        <textarea className="bg-gray900 w-full h-20 border-0  rounded-lg resize-none text-xs p-2 focus:outline-none" placeholder="Deixe seu comentario"/>

        <button className="mt-4 w-full text-white bg-green500 rounded-lg py-2 text-xs" type="submit">Publicar</button>
      </form>
    </div>
  )
}