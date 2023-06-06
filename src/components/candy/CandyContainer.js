import { useState } from "react"
import { CandyList } from "./CandyList";
import { CandySearch } from "./CandySearch";


export const ProductContainer = () => {
  const [searchTerms, setSearchTerms] = useState("")

  return <>
      <CandySearch setterFunction={setSearchTerms} />
      {/* <CandyList searchTermState={searchTerms}/> */}
      {searchTerms && <CandyList searchTermState={searchTerms}/>}
    </>
}