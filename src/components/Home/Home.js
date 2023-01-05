import { useEffect, useState } from "react";
import { useQuery } from "react-query";
import { Link, useSearchParams } from "react-router-dom";
import apiRequest from "../../hooks/apiRequest";
import Page from "../Page/Page";

export default function Home(){
  let [searchParames, setSeachParams] = useSearchParams()
  const [itemValue, setItemValue] = useState('')
  const {data} = useQuery(["product", itemValue], () => apiRequest("GET", "products/search?q=" + itemValue) || "")

  useEffect(() =>{
    setItemValue(itemValue)
  },[])

  function searchItem(e){
    e.preventDefault();
    setSeachParams({
      search : itemValue
    })
  }

    return(
        <Page>
          <div className="search">
            <form onSubmit={searchItem}>
              <input
              className="search-input"
              placeholder="Search"
              type="text"
              value = {itemValue}
              onChange = {e => setItemValue(e.target.value)}
              />
              <button className="search-btn" type='submit'>Search</button>
            </form>
          </div>
          <div className="container-fluid tm-container-content tm-mt-60">
            <div className="row mb-4">
              <h2 className="col-6 tm-text-primary">RECENTLY ADDED</h2>
            </div>
            <div className="row tm-mb-90 tm-gallery">
              {(data || []).map(item => (
              <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12 mb-5" key={item.id}>
                <figure className="effect-ming tm-video-item">
                  <img src={"https://i.dummyjson.com/data/products/1/1.jpg"} alt="Image" className="img-fluid" />
                  <figcaption className="d-flex align-items-center justify-content-center">
                    <h2>Buy Now</h2>
                    <Link to={"/product/"+ item.id} href="photo-detail.html">Buy Now</Link>
                  </figcaption>
                </figure>
                <div className="d-flex justify-content-between tm-text-gray">
                  <span className="tm-text-gray-light">{item.title}</span>
                  <span>{item.price  + ".00 $"}</span>
                </div>
              </div>
              ))}             
          
            </div>         
          </div>     
      </Page>      
    )
}