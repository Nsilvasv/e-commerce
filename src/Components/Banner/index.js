import styled from "styled-components"
import BannerImg from "../../img/banner1.webp"

const Container = styled.div`
    text-align: center;
`
const ImgBanner = styled.img`
    width: 100%;
    height: 100%;
`
const Banner = () => {

    return(
        <Container>
            <ImgBanner src={BannerImg}  alt="img banner"/>
        </Container>
    )
}

export default Banner