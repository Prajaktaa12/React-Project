import React from "react";
const Search = ({InputData,placeholder}) =>{
    return(
        <div className="row">
            <div className="col-md-8">
                <form>
                   <div className="form-group">
                       <input type="text" className="form-control" 
                       onChange={InputData}
                       placeholder={placeholder}
                       
                       />

                   </div>
                </form>  
            </div>
        </div>
    )
} 
    
export default Search;