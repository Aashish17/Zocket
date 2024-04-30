import './Home.css'
import BoxComponent from '../components/EditBox/BoxComponent'
import Display from '../components/Canvas/Display'

function Home() {

    return (
        <div className='flex flex-col sm:flex-row w-screen'>

            <Display />
            <BoxComponent />

        </div>
    )
}

export default Home;