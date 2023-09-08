import Header from "./Header"

export default function Layout(props) {
    return (
        <>
            <Header title="My Beer Collection" />
            {props.children}
        </>
    )
}