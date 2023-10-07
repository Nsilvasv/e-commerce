import styled from "styled-components"
import Banner from "../../img/banner.jpg"

const Navbar = styled.nav`
    background-color: tomato;
    height: 100px;
    display: flex;
    justify-items: center;
`
const Logo = styled.h1`
    font-size: 35px;
    font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
    color: black;
    font-weight: 700;
`

const ListOPcoes = styled.ul`
    display: flex;

`
const Opcao = styled.li`
    display: flex;
    justify-content: center;
    align-items: center;
`

const Header = () => {

    const link = ["Inicio", "Produtos", "Ajuda"]
    return(
        <>
            <Navbar>

                <Logo> E-commerciag</Logo>

              
            </Navbar>

            <img src={Banner} alt="img"/>
        </>
    )
}

export default Header