import './Welcome.css'

function Welcome() {
    const title = 'My Tinerary'
    const subTitle = ''
    return (
        <>
            <div className="welcomeApp"></div>
            <h1>Welcome a<br />{title}</h1>
            <span>{subTitle}</span>
            <button>Citys</button>
        </>
    )
}
export default Welcome