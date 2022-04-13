
import Hero from "./Hero";
const Home = () => {
    return (
      <>
      <Hero text="Welcome to React 101"/>
        <div className="container">
            <div className="row">
                <div className="col-lg-8 offset-lg-2">
                    <p className="lead">
                        This is the great paragraph
                    </p>
                </div>
            </div>
        </div>

      </>
  
    )
  }

  export default Home;