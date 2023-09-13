import Footer from "../common/Footer"
import Header from "../common/Header"

export default function Layout(props) {
    return (
        <div className={`bg-white_2 min-h-screen pb-20`}>
            <Header title="BeerApp" />
            <main className="relative z-10 bg-white_2 pt-20 mb-60">{props.children}</main>
            <Footer developer={{label: 'Soberly Crafted by:', name: "Sofia Ferreira", link: 'https://github.com/SofiaFerreira77/beer-collection-case'}}/>
        </div>
    )
}