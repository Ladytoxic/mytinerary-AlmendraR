import Main from "../layouts/Main";
import Welcome from "../components/Welcome/Welcome";
import Carousel from "../components/Carousel/Carousel";

function HomePage() {
    return (
        <>
            <Main>
                <Welcome />
                <Carousel />
            </Main>
        </>
    )
}

export default HomePage