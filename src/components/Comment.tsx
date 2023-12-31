import { useState } from "react";
import { FaRegTrashAlt } from "react-icons/fa";
import { FiThumbsUp } from "react-icons/fi";

interface CommentProps{
  content: string
  deleteComment: (comment: string) => void
}

export default function Comment({ content, deleteComment }: CommentProps){
  const [likeCount, setLikeCount] = useState(0)

  const handleLikeCount = () => {
    setLikeCount(likeCount + 1)
  }

  const handleDeleteComment = () => {
    console.log("clicado")

    deleteComment(content)
  }

  return(
    <div className="mt-6">
      <div className="items-center flex gap-2">
        <img className="w-10 h-10 rounded-full" src="https://images.unsplash.com/photo-1534972195531-d756b9bfa9f2?q=40&w=500&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
        <h1 className="text-xs font-bold">Lucas Gaelzer Machado</h1>
      </div>

      <div className="w-full mt-3">
        <div className="w-full bg-gray700 p-2 rounded-lg">
          <header className="flex items-center justify-between">
            <div>
              <span className="text-gray400 text-[10px]">Cerca de 1h</span>
            </div>

            <button onClick={handleDeleteComment} className="text-sm text-gray400" title="ButtonDelete">
              <FaRegTrashAlt />
            </button>
          </header>

          <p className="text-gray300 text-xs mt-3">{content}</p>
        </div>
        <div className="mt-3">
          <button className="flex text-xs gap-1" title="ThumbsButton" onClick={handleLikeCount}>
            <FiThumbsUp className="text-sm" /> Aplaudir <span>{likeCount}</span>
          </button>
        </div>
      </div>
    </div>
  )
}