import Main from "../layouts/MainLayouts";
import Welcome from "../components/Welcome/Welcome";
import Carousel from "../components/Carousel/Carousel";

function HomePage() {
    return (
        <>
            <Main>
                <Welcome />
                <main>
                    <Carousel />
                </main>
            </Main>
        </>
    )
}

export default HomePage