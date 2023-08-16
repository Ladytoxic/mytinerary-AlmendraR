import Banner from "../components/Banner/Banner"
import Search from "../components/Search/SearchInput"
import CardList from "../components/CartList/CardList"

const CitiesPage = () => {
  return (
    <>
      <Banner />
      <main>
        <section>
          <Search />
          <CardList />
        </section>
      </main>
    </>
  )
}

export default CitiesPage
