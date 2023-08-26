import HomePageCard from '../components/HomePageCard'

type Props = {}

const HomePage = (props: Props) => {
  return (
    <>
    <div className="App">
        <h1>App</h1>
    </div>
    <HomePageCard  />
    <HomePageCard />
    <HomePageCard />
  </>
  )
}

export default HomePage