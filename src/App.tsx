import Header from "./components/Header"
import Post from "./components/Post"
import Sidebar from "./components/Sidebar"

export const posts = [
  {
    id: 1,
    author: {
      name: 'Lucas Gaelzer Machado',
      role: 'Desenvolvedor Web'
    },
    content: [
      {
        type: 'paragraph',
        content: 'Fala galeraa 👋'
      },
      {
        type: 'paragraph',
        content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀'
      },
      {
        type: 'link',
        content: '👉jane.design/doctorcare'
      },
      {
        type: 'link',
        content: '#novoprojeto #nlw #rocketseat'
      }  
    ],
    publishedDate: new Date('2022-05-13 19:21:00')
  },
  {

    id: 2,
      author: {
        name: 'Gabriel Gaelzer Machado',
        role: 'Desenvolvedor Mobile'
      },
      content: [
        {
          type: 'paragraph',
          content: 'Fala galeraa 👋'
        },
        {
          type: 'paragraph',
          content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀'
        },
        {
          type: 'link',
          content: '👉jane.design/doctorcare'
        },
        {
          type: 'link',
          content: '#novoprojeto #nlw #rocketseat'
        }  
      ],
      publishedDate: new Date('2022-05-13 19:21:00')
  }
]

function App() {
  return (
    <div className="w-full h-screen flex flex-col">
      <Header />
      <div className="w-full flex flex-col items-center p-4">
        <Sidebar />
        {posts.map((post, index) => {
          return <Post 
            key={index}
            author={post.author} 
            content={post.content}
            publishedDate={post.publishedDate}
          />
        })}
      </div>
    </div>
  )
}

export default App
