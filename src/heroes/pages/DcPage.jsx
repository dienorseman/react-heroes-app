import { HeroList } from "../components/HeroList"


export const DcPage = () => {
  return (
    <>
      <div className="container">
        <h1>DcPage</h1>
        <hr />
        <HeroList publisher={ "DC Comics" } />
      </div>
    </>
  )
}