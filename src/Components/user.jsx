import React from "react";

const User = ({users}) => {
    return(
     <div className="row">
       {
           users.map(data => (
               <div className="col-md-3" key={data.id} style={{margin:"10px"}}>
                <div className="card text-left">
                  <img className="card-img-top" src={`https://i.pravatar.cc/150?img=${data.id}`}
                   alt=""/>
                  <div className="card-body">
                    <h4 className="card-title">Name : {data.name}</h4>
                    <p className="card-text">Email : {data.email }</p>
                    <p className="card-text">Username : {data.username }</p>
                    <p className="card-text">Website : {data.website }</p>
                    <p className="card-text">Address : {`${data.address.street}
                    ${data.address.suite}
                    ${data.address.city}
                    ${data.address.zipcode}`}</p>
                    <p className="card-text">Geo : {`${data.address.geo.lat}
                     ${data.address.geo.lng}`}</p>
                    <p className="card-text">Company : {`${data.company.name}
                     ${data.company.catchPharse} 
                    ${data.company.bs}` }</p>
                    <p className="card-text">Phone : {data.phone }</p>
                    
                    
                  </div>
                </div>
                </div>
           ))
       }
     </div>
    )
    
    
}

export default User;