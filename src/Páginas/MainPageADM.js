import { Image, Button} from "antd";
import { useState } from "react";
import "./MainPage.css";
import Like from "../components/Like"
import Commentario from "../components/Comments";

function Post({img, title, time, description, id, handleDelete}) {
  return (
    <>
    
      <div className="post">
        <Image className="Image-Post"
        width={200}
        src={img}
      />
        <div className="postInfo">
          <div className="postCats">
            <span className="postCat">
            </span>
          </div>
          <span className="postTitle">
            {title}
          </span>
          <hr />
          <span className="postDate">{time}</span>
        </div>
        <p className="postDesc">
          {description}
        </p>
        <Button type="primary" danger onClick={() => handleDelete(id)}>Deletar</Button>

      </div>
    </>
  );
}

export default function Posts() {

  const initialData = [
    {
      id: 1,
      img: 'https://www.tiflux.com.br/assets/images/uses-home/xJiraSoftware.png.pagespeed.ic.XtTTnNZAZg.webp',
      link: 'https://www.tiflux.com.br/',
      title: 'Titulo do post',
      time: '10:00',
      description: 'O TiFlux facilitou a gestão do Time de Consultoria elevando a experiência de atendimento dos nossos clientes demonstrando mais profissionalismo e a gestão de contratos em uma única solução centralizada facilitou muito a nossa gestão!',
    },
    {
      id: 2,
      img: 'https://www.tiflux.com.br/assets/images/uses-home/xJiraSoftware.png.pagespeed.ic.XtTTnNZAZg.webp',
      link: 'https://www.tiflux.com.br/',
      title: 'Titulo do post',
      time: '10:00',
      description: 'O TiFlux facilitou a gestão do Time de Consultoria elevando a experiência de atendimento dos nossos clientes demonstrando mais profissionalismo e a gestão de contratos em uma única solução centralizada facilitou muito a nossa gestão!',
    },
    {
      id: 3,
      img: 'https://www.tiflux.com.br/assets/images/uses-home/xJiraSoftware.png.pagespeed.ic.XtTTnNZAZg.webp',
      link: 'https://www.tiflux.com.br/',
      title: 'Titulo do post',
      time: '10:00',
      description: 'O TiFlux facilitou a gestão do Time de Consultoria elevando a experiência de atendimento dos nossos clientes demonstrando mais profissionalismo e a gestão de contratos em uma única solução centralizada facilitou muito a nossa gestão!',
    },
    {
      id: 4,
      img: 'https://www.tiflux.com.br/assets/images/uses-home/xJiraSoftware.png.pagespeed.ic.XtTTnNZAZg.webp',
      link: 'https://www.tiflux.com.br/',
      title: 'Titulo do post',
      time: '10:00',
      description: 'O TiFlux facilitou a gestão do Time de Consultoria elevando a experiência de atendimento dos nossos clientes demonstrando mais profissionalismo e a gestão de contratos em uma única solução centralizada facilitou muito a nossa gestão!',
    },
    {
      id: 5,
      img: 'https://www.tiflux.com.br/assets/images/uses-home/xJiraSoftware.png.pagespeed.ic.XtTTnNZAZg.webp',
      link: 'https://www.tiflux.com.br/',
      title: 'Titulo do post',
      time: '10:00',
      description: 'O TiFlux facilitou a gestão do Time de Consultoria elevando a experiência de atendimento dos nossos clientes demonstrando mais profissionalismo e a gestão de contratos em uma única solução centralizada facilitou muito a nossa gestão!',
    },
    {
      id: 6,
      img: 'https://www.tiflux.com.br/assets/images/uses-home/xJiraSoftware.png.pagespeed.ic.XtTTnNZAZg.webp',
      link: 'https://www.tiflux.com.br/',
      title: 'Titulo do post',
      time: '10:00',
      description: 'O TiFlux facilitou a gestão do Time de Consultoria elevando a experiência de atendimento dos nossos clientes demonstrando mais profissionalismo e a gestão de contratos em uma única solução centralizada facilitou muito a nossa gestão!',
    }
  ]
  const [postData, setPostData] = useState(initialData)

  function handleDelete(id){
    setPostData(
      postData.filter(post => post.id != id )
    )
  }

  return ( 
    <div>
      {postData.map(post => (
        <Post
          key={post.id}
          id={post.id}
          img={post.img} 
          link={post.link} 
          title={post.title} 
          time={post.time} 
          description={post.description}
          handleDelete={handleDelete} 
        />
      ))}
    </div>
  )
  
}

