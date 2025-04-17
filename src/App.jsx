
import Banner from "./Banner/Banner"
import Foother from "./Foother/Foother"
import Section1 from "./Section1/Section1"
import Section2 from "./Section2/Section2"
import Section3 from "./Section3/Section3"
import Section4 from "./Section4/Section4"


function App() {




  return (
    <>
      <div className=" ">
        <Banner></Banner>
        <div className="mt-8">
          <Section1></Section1>
        </div>
        <div>
          <Section2></Section2>
        </div>
        <div>
          <Section3></Section3>
        </div>
        <div>
          <Section4></Section4>
        </div>
        <div>
          <Foother></Foother>
        </div>
      </div>

    </>
  )
}

export default App
