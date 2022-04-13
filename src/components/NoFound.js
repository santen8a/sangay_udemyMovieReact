import Hero from "./Hero";

const NoFound = () => {
    return (
      <>
      <Hero text="Error 404"/>
      <h2 className="bg-danger">Sorry, the page you are looking for is not found</h2>
      </>
    )
  }

  export default NoFound;