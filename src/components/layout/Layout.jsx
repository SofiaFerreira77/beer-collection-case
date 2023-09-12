import Footer from "../common/Footer"
import Header from "../common/Header"

export default function Layout(props) {
    return (
        <div className={`bg-white_2 min-h-screen pb-20`}>
            <Header title="My Beer Collection" />
            <main className="relative z-10 bg-white_2 pt-20 mb-60">{props.children}</main>
            <Footer title="My Beer Collection" />
        </div>
    )
}