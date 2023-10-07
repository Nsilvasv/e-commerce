import { useState } from "react"
import produtos from "../../Data/produtos.json"
import tw from "tailwind-styled-components"
import { NavLink } from "react-router-dom"

const ContainerCardapio = tw.div`
    max-w-[1520px] 
    m-auto 
    px-4 
    py-12
    
`
const Cabecalho = tw.h1`
    text-black-500 
    font-bold 
    text-2xl 
    text-center 
    py-1
` 
const Button = tw.button`
    m-1
    pb-6
    border-orange-700 
    text-balck 
    hover:bg-white 
    hover:text-orange-700 
    hover:border-orange-700
`
const Container = tw.div`
    grid 
    md:grid-cols-2 
    sm:grid-cols-1 
    lg:grid-cols-3 
    gap-6  
    py-4

`
const DivInfo = tw.div`
    border-none 
    hover:scale-105 
    duration-300
    
`
const Img = tw.img`
    w-full 
    h-[200px] 
    object-contain
    rounded-lg
`
const TextoPreco = tw.p`
    flex
    justify-center
    font-bold
`
const TextoVejaMais = tw.p`
    flex 
    justify-between 
    pl-2 
    py-4 
    -mt-7
    items-center 
    text-indigo-600
`

const Produtos = () => {

   const dados = produtos.produtos

   const [produto, setProduto ] = useState(dados)

    const filtraCategoria = (categoria) => {
        setProduto(dados.filter( item => {
            return item.categoria === categoria
        }))
    }


    return(
        <ContainerCardapio>
        <Cabecalho> Nossos Produtos </Cabecalho>

        <div className="flex flex-col lg:flex-row justify-center">

            <div className="flex justify-center md:justify-center">


                <Button onClick={() => setProduto(dados)} > 
                    Todos
                </Button>
                <Button onClick={() => filtraCategoria("diversão")} > 
                    Diversão
                </Button>
                <Button onClick={() => filtraCategoria("mais-vendidos")} > 
                    Mais vendidos
                </Button>
                <Button onClick={() => filtraCategoria("lançamentos")} > 
                    Lançamentos
                </Button>

            </div>
        </div>

        <Container>

            {produto.map( (item) => (
                <DivInfo key={item.id}>

                    <NavLink to={`/produtos/${item.id}`}> <TextoVejaMais> Veja mais </TextoVejaMais> </NavLink>


                    <Img src={item.img}  alt={item.nome}/>

                    <div className="flex justify-center py-2 px-2 ">
                        <p className="font-bold ">{item.nome}</p> 
                    </div>

                    <div className="flex justify-center pl-2 py-1 ">
                        <TextoPreco> {item.preco}  </TextoPreco>
                    </div>


                </DivInfo>
            ))}

        </Container>

    </ContainerCardapio>
    )
}

export default Produtos