import React from 'react'
import styled from 'styled-components'

const Botão = styled.button `
display: flex;
margin: 0 auto;
`

const Header = styled.header `
display: flex;
width: 100vw;
height: 10vh;
background-color: #E9F4F1;
`

const H1Header = styled.h1 `
display: flex;
margin: 0 auto;
padding-top: 2vh;
color: black;
`

const BodyPage = styled.div `
background-color: #E1F58F;
width: 100vw;
height: 100vh;
`
const CentralDivs = styled.div `
display: flex;
max-width: 100vw;
max-height: 100vh;
`
const FiltroDiv = styled.div `
display:flex;
width: 20vw;
height: 30vw;
background-color: pink;
`
const ProdutosDiv = styled.div `
display:flex;
width: 60vw;
height: 30vw;
background-color: orange;
`
const CarrinhoDiv = styled.div `
display:flex;
width: 20vw;
height: 30vw;
background-color: red;
`
const H2TitulosDasDivs = styled.h2 `
margin-left: 2vw;
`

const Footer = styled.footer `
display: flex;
width: 100vw;
height: 8vh;
max-width: 100vw;
max-height: 8vh;
background-color: #E9F4F1;
`

const FooterH2 = styled.h2 `
display: flex;
margin: 0 auto;

`

export default class StyledHome extends React.Component {
    state = {

    }

    onChangeInputSearch = (event) => {
        this.setState({ nomeDoInput: event.target.value })
    }


    render() {
        return <BodyPage >
            <
            Header >
            <
            H1Header > LabECommerce < /H1Header> <
            /Header> <
            CentralDivs >
            <
            FiltroDiv > { /* <h1>Essa div é para os filtros</h1> */ } <
            H2TitulosDasDivs > Filtros < /H2TitulosDasDivs> <
            /FiltroDiv>

        <
        ProdutosDiv > { /* <h1>Essa div é para os produtos</h1> */ }

        <
        H2TitulosDasDivs > Produtos < /H2TitulosDasDivs> <
            /ProdutosDiv>

        <
        CarrinhoDiv > { /* <h1>Essa div é para os carrinhos</h1> */ } <
            H2TitulosDasDivs > Carrinho < /H2TitulosDasDivs> <
            /CarrinhoDiv>

        <
        /CentralDivs> <
        Footer >
            <
            FooterH2 > Footer Aqui!(pra adicionar links, se quiser) < /FooterH2> <
            /Footer> <
            /BodyPage>
    }
}