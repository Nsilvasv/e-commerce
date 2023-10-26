import { NavLink, useParams } from "react-router-dom";
import produtos from "../../Data/produtos.json"

const InfoProdutos = () => {

    const dados = produtos.produtos

    const proId = useParams();
    const proDetail = dados.filter(item => item.id == proId.id)
    const product = proDetail[0];
    console.log(product);

    return(

    <div className ="md:flex items-start justify-center py-12 2xl:px-20 md:px-6 px-4">

        <NavLink to={"/"}> <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" >Voltar</button> </NavLink>

        <div className ="xl:w-2/6 lg:w-2/5 w-80 md:block hidden">
            <img className ="w-full"  src={product.img} alt={product.nome} />
        </div>

        <div className ="md:hidden">
            <img className ="w-full"  src={product.img} alt={product.nome} />
        </div>

        <div className ="xl:w-2/5 md:w-1/2 lg:ml-8 md:ml-6 md:mt-0 mt-6">

            <div className ="border-b border-gray-200 pb-6">
                <p className ="text-base  ">{product.nome}</p>
            </div>

            <div className ="py-4 border-b border-gray-200 flex items-center justify-between">
                <p className ="text-base ">Preço</p>
            <div className ="flex items-center justify-center">
                <p className ="text-sm  mr-3">{product.preco}</p>
            
            </div>
            
            </div>
     
            <div>
                <p className ="xl:pr-48 text-base lg:leading-tight leading-normal mt-7">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                <p className ="text-base leading-4 mt-7">Código do Produto: 8BN321AF2IF0NYA</p>
                <p className ="text-base leading-4 mt-4">Peso: 13.2 inches</p>
                <p className ="text-base leading-4 mt-4">Tamanho: 10 inches</p>
                <p className ="text-base leading-4 mt-4">Avaliação: 5.1 inches</p>
            </div>
      
            <div>
            
            </div>
        </div>
    </div>

    )
}

export default InfoProdutos