
import React, { useState } from "react"
import './App.css';

function App() {

  const [word, setWord] = useState("")

  const arr = ["feuer","wasser",'Erde',"liebe","gedichte","worte","Silben","ausfallen","Müdigkeit",
  "meinen","meinen"]
  const index = arr.indexOf(word)

  const fireImg = "https://i.guim.co.uk/img/media/95f1ef8a42211b74deb3485e8e9cb2ab60ae96e8/0_233_3500_2101/master/3500.jpg?width=465&quality=45&auto=format&fit=max&dpr=2&s=b4ca589f55209c52c1b82acebd98c601"
  const aguaImg =  "https://static.mundoeducacao.uol.com.br/mundoeducacao/conteudo_legenda/fd12ca2ea635c273d6b91dbd02b152a2.jpg"
  const terraImg = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1wAFdlCG7Te8Rv-4lYNb_XJujNXYyRyj77v-sQdYPpukkp5CqNGMBO7yEHDmJUeqtNuc&usqp=CAU"
  const worteImg = "https://lh3.googleusercontent.com/proxy/yNmik45PhndMys2a_hAzZyt2Kw1ZXOA-Oa3y-VcgJH9nCss_xlyvkJJzQaKU2BRSppVZRYedbFMFbXUj8Pv-ioMbvgyy_p8h5mNaywn8yoGYh57QYgUjL6lyZ0tN51QH2KN190m-1XkLUd8HmPz_" 
  const poemaImg = "https://www.schreiben.net/wp-content/uploads/2019/02/Gedichte-Feature-Depo.jpg"
  const palavrasImg = "https://cdn.shopify.com/s/files/1/0305/4075/9177/products/Papel-de-Parede-Palavras-Jornal-Esporte-Branco-Your-Dream-171502-sw.jpg?v=1636634125"
  const silabasImg = "https://s1.static.brasilescola.uol.com.br/be/conteudo/images/as-silabas-tem-como-nucleo-as-vogais-sao-classificadas-em-tonicas-ou-atonas-57d187a7c6187.jpg"
  const falhaImg = "https://media.istockphoto.com/vectors/failed-stamp-failed-square-grungy-red-sign-vector-id1217828210"
  const fadifaImg = "https://www.nucleode-stress.com.br/wp-content/uploads/2021/01/sindrome-da-fadiga-cronica.png"
  const falarImg = "https://blog.jaleko.com.br/wp-content/uploads/2019/03/falar_em_publico.png"

  const arrImg = [fireImg,aguaImg,terraImg,worteImg,poemaImg,palavrasImg,silabasImg,falhaImg,
    fadifaImg,falarImg] 

    
  const input = <input type="text" 
  placeholder="digite uma palavra"
  value={word}
  onChange={(e) => setWord(e.target.value)}
  />

  return (
    <div className="App">
      {input}
      {arr[index] && <img src={arrImg[index]}></img>}
    </div>
  );
}

export default App;

