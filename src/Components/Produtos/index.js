import { useState } from "react"
import produtos from "../../Data/produtos.json"
import tw from "tailwind-styled-components"
import { BsArrowRightShort } from "react-icons/bs"
import { NavLink } from "react-router-dom"

const ContainerCardapio = tw.div`
    max-w-[1520px] 
    m-auto 
    px-4 
    py-12
    
`
const Cabecalho = tw.h1`
    font-black 
    text-3xl 
    text-center 
    py-1
` 
const Button = tw.button`
    px-2
    mt-8
    mx-1 
    rounded-full
    border-orange-700 
    text-white 
    bg-slate-600
    hover:bg-black
  
`
const Container = tw.div`
    grid 
    md:grid-cols-2 
    sm:grid-cols-2 
    lg:grid-cols-3 
    gap-6  
    py-4

`
const DivInfo = tw.div`
    border-none 
    hover:scale-105 
    duration-300
    mt-10
    
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
    pl-2
    py-4 
    mt-7
    items-center 
    text-indigo-700
`

const Produtos = () => {

    const dados = produtos.produtos

    const [produto, setProduto ] = useState(dados)


    const filterProdutos = (filtro, valor) =>{
        if(filtro === "categoria"){
            const produto = dados.filter(produto => produto.categoria === valor)
            setProduto(produto)
        }
        if(filtro === "preco"){
            const produto = dados.filter(produto => {
                let preco = produto.preco
                preco = parseFloat(preco)
                return preco <= valor
            })
            setProduto(produto)
        }
    }

    return(
        <ContainerCardapio>
     
            <Cabecalho> Nossos Produtos </Cabecalho>

            <div className="flex flex-col lg:flex-row justify-center">

                <div className="flex justify-center md:justify-center sm:">

                    <Button onClick={() => setProduto(dados)} > 
                        Todos
                    </Button>
                    <Button onClick={() => filterProdutos("categoria", "diversão")} > 
                        Diversão
                    </Button>
                    <Button onClick={() => filterProdutos("categoria", "mais-vendidos")} > 
                        Mais vendidos
                    </Button>
                    <Button onClick={() => filterProdutos("categoria", "promoção")} > 
                        Promoção
                    </Button>
            
                </div>

            </div>

            <input type="range" className="flex xl:justify-end lg:justify-center mt-5 items-center" min={0}  max={5000}  onInput={(e) => {filterProdutos("preco", e.target.value)}}/>
            <h1>Preço de R$0 a R$5000.00</h1>
            <Container>

                {produto.map( (item) => (
                    <DivInfo key={item.id}>

                        <NavLink to={`/produtos/${item.id}`}> 
                            <TextoVejaMais> Veja mais <BsArrowRightShort className="ml-1 h-6 w-6" /> </TextoVejaMais> 
                        </NavLink>


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