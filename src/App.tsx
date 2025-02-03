import { useState } from 'react'
import './App.css'
import Logo from './assets/logo.png'

function App() {
  const [textoFrase, setTextoFrase] = useState("")
  const [categoriaSelecionada, setCategoriaSelecionada] = useState(0)
  const todasFrases = [
    {
      id: 1,
      nome: 'Motivacional',
      frases:[
        'É importante agradecer pelo hoje sem nunca desistir do amanhã!',
        'A ideia é nunca perder a motivação para subir cada degrau rumo ao sucesso, por mais difícil que seja. E também não esquecer de agradecer pelas lições aprendidas em cada etapa da jornada.',
        'Apreciando cada passo, mas já sonhando com as próximas conquistas!',
        'Lute. Acredite. Conquiste. Perca. Deseje. Espere. Alcance. Invada. Caia. Seja tudo o quiser ser, mas, acima de tudo, seja você sempre.',
        'Quem cultiva gratidão é capaz de realizar sonhos que parecem inalcançáveis!',
        'Se expressarmos gratidão pelo que temos, teremos mais pelo que expressar gratidão.',
      ]
    },
    {
      id: 2,
      nome: 'Amor',
      frases:[
        'O amor não se vê com os olhos, mas com o coração.',
        'O amor é o espaço e o tempo tornados sensíveis ao coração.',
        'Lutar pelo amor é bom, mas alcançá-lo sem luta é melhor.',
        'Cada qual sabe amar a seu modo; o modo, pouco importa; o essencial é que saiba amar.',
        'A distância faz ao amor aquilo que o vento faz ao fogo: apaga o pequeno, inflama o grande.',
      ]
    }
  ]

  const selecionarCategoria = (index: number) =>{
    setCategoriaSelecionada(index)
  }
  const gerarFrase = () =>{
    let numeroAleatorio = Math.floor(Math.random() * todasFrases[categoriaSelecionada].frases.length)
    setTextoFrase(`"${todasFrases[categoriaSelecionada].frases[numeroAleatorio]}"`)
  }

  return (
    <>
      <main className='container'>
          <img className='logo' src={Logo} alt='Logo' />
          <h1 className='titulo'>Categorias</h1>
          <section className='btn_container'>
            {todasFrases.map( (frase, index) => (
              <button 
                className='btn_categoria'
                key={index}
                style={{
                  borderWidth: frase.nome === todasFrases[categoriaSelecionada].nome ? 2 : 0,
                  borderColor:' #1fa4db'
                }}
                onClick={ () => selecionarCategoria(index)}
                >{frase.nome}
              </button>
            ))}
            
          </section>
          <button 
            onClick={ () => gerarFrase()}
            className='btn_gerar'>
            Gerar frase
            </button>
          {textoFrase !== '' && <p className='p_frase'>{textoFrase}</p>}
      </main>
    </>
  )
}

export default App
