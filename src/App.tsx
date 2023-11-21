import Header from "./components/Header"
import Post from "./components/Post"
import Sidebar from "./components/Sidebar"

function App() {
  return (
    <div className="w-full h-screen flex flex-col">
      <Header />
      <div className="w-full flex flex-col items-center p-4">
        <Sidebar />
        <Post />
        <Post />
      </div>
    </div>
  )
}

export default App
