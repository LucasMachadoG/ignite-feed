import { useState } from "react";
import Comment from "./Comment";

interface PostProps{
  author: {
    name: string;
    role: string;
  }
  content: Array<{ type: string; content: string }>
  publishedDate: Date;
}

export default function Post({ author, content, publishedDate }: PostProps){

  const [comments, setComments] = useState([
    'Post muito bacana, hein?',
  ])

  const [comment, setComment] = useState("")

  const handleChangeComment = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setComment(e.target.value)
    console.log(comment)
  }

  const handleNewComment = (e: React.FormEvent) => {
    e.preventDefault()
    
    setComments([...comments, comment])

    setComment('')
  }


  const formatted = new Intl.DateTimeFormat('pt-BR',{
    day: '2-digit',
    month: 'long',
    hour: '2-digit',
    minute: '2-digit'
  }).format(publishedDate)

  return(
    <div className="w-72 flex flex-col bg-gray800 mt-6 rounded-lg p-3">
      <div className="w-full flex justify-between">
        <img />
        <div className="w-full flex flex-col">
          <span className="text-xs font-semibold text-gray100">{author.name}</span>
          <span className="text-[10px] font-semibold text-gray400">{author.role}</span>
        </div>
        <span className="text-[10px] font-semibold text-gray400">{formatted}</span>
      </div>
      <div className="mt-4  text-xs text-gray300 gap-3 flex flex-col">
        {content.map((line) => {
          if(line.type === 'paragraph'){
            return <p>{line.content}</p>
          } else if(line.type === 'link'){
            return <p className="text-green500"><a href="">{line.content}</a></p>
          }
        })}
      </div>

      <div className="w-full h-[2px] bg-gray600 mt-4 mb-4"></div>
      
      <form onSubmit={handleNewComment} className="w-full flex flex-col ">
        <h1 className="text-gray100 text-xs mb-2">Deixe o seu feedback</h1>

        <textarea 
          value={comment}
          onChange={handleChangeComment}
          className="bg-gray900 w-full h-20 border-0  rounded-lg resize-none text-xs p-2 focus:outline-none" placeholder="Deixe seu comentario"
        />

        <button className="mt-4 w-full text-white bg-green500 rounded-lg py-2 text-xs" type="submit">Publicar</button>
      </form>
      <div>
          {comments.map((comment, index) => (
            <Comment content={comment} key={index} />
          ))}
      </div>
    </div>
  )
}