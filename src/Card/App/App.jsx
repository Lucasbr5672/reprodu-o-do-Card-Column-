import ContainerCard from "../../Containercard/Container"
import iconeSedan from "../../../images/icon-sedans.svg"
import iconeSuv from "../../../images/icon-suvs.svg"
import iconeluxury from "../../../images/icon-luxury.svg"
import "./App.css"
const App = () => {
    return( 
        <section>
        <ContainerCard
        imagem={iconeSedan}
        titulo="SEDANS"
        texto=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita accusamus sit eum hic officia reprehenderit eligendi officiis"
        classe="sedan"
        />
        <ContainerCard
        imagem={iconeSuv}
        titulo="SUVS"
        texto=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita accusamus sit eum hic officia reprehenderit eligendi officiis"
        classe="suv"
        />
         <ContainerCard
        imagem={iconeluxury}
        titulo="LUXURY"
        texto=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita accusamus sit eum hic officia reprehenderit eligendi officiis"
        classe="lux"
        />
         </section>
    )
}
export default App