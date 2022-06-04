import type { NextPage } from 'next'
import Titulo from '../ui/components/Titulo/Titulo'
import Lista from '../ui/components/Lista/Lista'

const Home: NextPage = () => {
  return (
    <div>
      <Titulo 
      titulo="" 
      subtitulo={
        <span>
          Com um pequeno valor mensal, você <br />
          pode <strong> adotar um pet virtualmente!</strong>
        </span>
      } />

      <Lista
        pets={[
          {
            id: 1, 
            nome: 'Bidu',
            historia:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores, eos quam? Aliquam eum recusandae id eligendi iste doloribus nobis et consequatur neque. Voluptatem optio fugiat ut enim suscipit repellat amet.",
            foto: "https://love.doghero.com.br/wp-content/uploads/2018/12/golden-retriever-1.png"
          },
          {
            id: 2, 
            nome: 'Flokinho',
            historia:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores, eos quam? Aliquam eum recusandae id eligendi iste doloribus nobis et consequatur neque. Voluptatem optio fugiat ut enim suscipit repellat amet.",
            foto: "https://www.petlove.com.br/dicas/wp-content/uploads/2020/10/Cachorro-culpa-Petlove.jpg"
          }
          ,
          {
            id: 3, 
            nome: 'Belinha',
            historia:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores, eos quam? Aliquam eum recusandae id eligendi iste doloribus nobis et consequatur neque. Voluptatem optio fugiat ut enim suscipit repellat amet.",
            foto: "https://blogs.correiobraziliense.com.br/nqv/wp-content/uploads/sites/22/2018/08/DjubZ3nXgAAw4e--1280x720.jpg"
          }
          ,
          {
            id: 4, 
            nome: 'Ursinho',
            historia:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores, eos quam? Aliquam eum recusandae id eligendi iste doloribus nobis et consequatur neque. Voluptatem optio fugiat ut enim suscipit repellat amet.",
            foto: "https://meupet.elanco.com/sites/g/files/adhwdz661/files/styles/paragraph_image/public/2020-07/gato_de_retrato_olhando_para_a_camera.jpg?itok=iXWiqVkY"
          }
          
        ]} 
      />
    </div>
  )
}

export default Home
