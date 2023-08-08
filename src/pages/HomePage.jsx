
import Welcome from "../components/Welcome/Welcome";
import Carousel from "../components/Carousel/Carousel";

function HomePage() {
    return (
        <>
            <Welcome />
            <main>
                <Carousel />
            </main>
        </>
    );
}

export default HomePage;