import React from 'react'
import styled from 'styled-components'






const Header = styled.header `
display: flex;
width: 100vw;
height: 10vh;
background-color: #0E2254;
`

const H1Header = styled.h1 `
display: flex;
margin: 0 auto;
padding-top: 2vh;
color: white;
`

const BodyPage = styled.div `
background-color: #483165;
width: 100vw;
height: 100vh;
`
const CentralDivs = styled.div `
display: flex;
max-width: 100vw;
max-height: 100vh;
justify-content: space-between;
`
const FiltroDiv = styled.div `
display:flex;
width: 20vw;
height: 30vw;
background-color: #483165;
border: 0.5px solid white;
`
const ProdutosDiv = styled.div `
display:flex;
width: 60vw;
height: 30vw;
background-color: #483165;
justify-content: space-around;

`
const CarrinhoDiv = styled.div `
display:flex;
width: 20vw;
height: 30vw;
background-color: #483165;
border: 0.5px solid white;
`
const H2TitulosDasDivs = styled.h3 `
margin-left: 2vw;
color: white;
`

const Footer = styled.footer `
display: flex;
width: 100vw;
height: 8vh;
max-width: 100vw;
max-height: 8vh;
background-color: #0E2254;
color: white;
`

const FooterH2 = styled.h2 `
display: flex;
margin: 0 auto;
`
const ProdutoContainer = styled.div `
display: flex;
border: 1px solid black;
height: 50vh;
margin-top: 3vh;
flex-direction: column;
`


const ProdutoImage = styled.img `
display: flex;
width: 9vw;
height: 30vh;
padding: 10px;
`

const ProdutoName = styled.p `
display: flex;
justify-content: center;
color: white;
`

const ProdutoValue = styled.p `
display: flex;
justify-content: center;
color: white;
`
    // const InputBox = styled.input `
    // display: flex;
    // margin-top: 100px;
    // width: 15vw;
    // height: 2vh;

// `

export default class StyledHome extends React.Component {
    state = {
        inputFilter: "",
        produto: [{
                id: 1,
                produtoNome: "Roupa Espacial Militar",
                produtoValue: 9900,
                produtoImage: 'https://exame.com/wp-content/uploads/2017/01/roupa-espacial-da-bpeing.jpg?quality=70&strip=all'
            },
            {
                id: 2,
                produtoNome: "Roupa Espacial Laranja",
                produtoValue: 4500,
                produtoImage: 'https://i.pinimg.com/originals/d9/45/21/d94521ee32233b8ad3a3befe7d85242a.jpg'
            },
            {
                id: 3,
                produtoNome: "Roupa Espacial Oficial",
                produtoValue: 15900,
                produtoImage: 'https://conteudo.imguol.com.br/c/noticias/2014/05/02/2mai2014---nasa-apresenta-prototipo-de-roupa-espacial-para-viagem-a-marte-1399033393191_300x420.jpg.webp'
            },
            {
                id: 4,
                produtoNome: "Lançamento Roupa Espacial Nasa",
                produtoValue: 8500,
                produtoImage: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fd/AX-5-spacesuit.jpg/220px-AX-5-spacesuit.jpg'
            },
            {
                id: 5,
                produtoNome: "Roupa Espacial Infantil",
                produtoValue: 3900,
                produtoImage: 'https://ae01.alicdn.com/kf/HTB1tw_JNFXXXXXpXXXXq6xXFXXXf/Crian-as-Fantasia-Festa-Marinha-Uniforme-Da-Pol-cia-Roupas-Meninos-Toddlers-Macac-o-Halloween-Traje.jpg_Q90.jpg_.webp'
            },
        ]
    }

    onChangeInputSearch = (event) => {
        this.setState({ inputFilter: event.target.value })
    }

    adicionarNoCarrinho = () => {

    }

    render() {
        const listaDeProdutos = this.state.produto.map((produto) => {
            return ( <
                ProdutoContainer >
                <
                ProdutoImage src = { produto.produtoImage }
                /> <
                ProdutoName > { produto.produtoNome } < /ProdutoName> <
                ProdutoValue > { produto.produtoValue } < /ProdutoValue> <
                button onClick = "" > Adicionar ao carrinho < /button> <
                /ProdutoContainer>
            )
        })
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
        ProdutosDiv > { listaDeProdutos } <
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