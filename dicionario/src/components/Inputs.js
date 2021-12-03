import React,{ useState } from "react"
import Style from "./styles/dicionario.module.css"

export default function Inputs(){

    const [inicio,recebeOValor] = useState()
    const [apareceNaTela, mudaOInicio] = useState()

    const arr={
        feuer:"https://static.mundoeducacao.uol.com.br/mundoeducacao/2020/08/fogueira.jpg",
        wasser:"https://as2.ftcdn.net/v2/jpg/01/38/88/33/500_F_138883382_ac40gMz6kh2Y1FZBaWd0TrPGg6paDfKe.jpg"
    }
    

    function show(e){
        e.preventDefault()
        if(inicio == "wasser"){
            mudaOInicio(inicio)
        }else{
            mudaOInicio(false)
        }
    }


    return (
        <div>
            <div className={Style.header}>
                <input type="text" placeholder="digite uma palavra"
                onChange={(e)=> recebeOValor(e.target.value)}
                />
                <button onClick={show}>enviar</button>
            </div>
            {apareceNaTela &&(
                <div>
                    <img src={arr.wasser} />
                </div>
            )}
            
        </div>
    )
}