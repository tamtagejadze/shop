import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import apiDetails from '../../hooks/apiDetails';
import Page from '../Page/Page'


export default function Products(){

 const param = useParams()
  
  
  const {data, isLoading} = useQuery(["product" , param.productId], () => apiDetails("GET",  param.productId))

  if(isLoading){
    return <div> Load</div>
  } 
    return(
        <Page>

          <div className="container-fluid tm-container-content tm-mt-60">
            <div className="row mb-4">
              <h2 className="col-12 tm-text-primary"> {data.title} </h2>
            </div>
            <div className="row tm-mb-90">
              <div className="col-xl-8 col-lg-7 col-md-6 col-sm-12">
                <img src={data.images[0]} alt="Image" className="img-fluid2" />
              </div>
            <div className="col-xl-4 col-lg-5 col-md-6 col-sm-12">
              <div className="tm-bg-gray tm-video-details">
                <p className="mb-4">
                 {data.description}  Price : {data.price} .00 $ 
              </p>
              <div className="text-center mb-5">
                <a href="#" className="btn btn-primary tm-btn-big">
                  ADD TO CART
                </a>
              </div>
              <div>
                <h3 className="tm-text-gray-dark mb-3">Details</h3>
                <a href="#" className="tm-text-primary mr-4 mb-2 d-inline-block">
                {data.brand}
                </a>
                <br/>
                <a href="#" className="tm-text-primary mr-4 mb-2 d-inline-block">
                {data.category}
                </a>
                <br/>
                <a href="#" className="tm-text-primary mr-4 mb-2 d-inline-block">
                Rating : {data.rating}
                </a>
                <br/>
                <a href="#" className="tm-text-primary mr-4 mb-2 d-inline-block">
                  Stock : {data.stock}
                </a>
               
                </div>
              </div>
            </div>
          </div>
        </div>

        </Page>


    )
}