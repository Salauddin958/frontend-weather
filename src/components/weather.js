import Daily from "./daily";
import Future from "./future";
import Historic from "./historic";
import React from 'react';


const Weather = React.memo( ({location}) => {
    console.log("location "+location)
    return (
    <div>
        <div className="container">
            <div className="row">
        <h2><p class="text-center">Weather Information in {location} </p></h2>
                <div className="col-sm">  
                    <h3><p class="text-center">Today</p></h3>
                    <Daily location={location}/>
                </div>
                <div className="col-sm">
                    <h3><p class="text-center">Historic</p></h3>
                    <Historic location={location} />
                </div>
                <div className="col-sm">
                    <h3><p class="text-center">Future</p></h3>
                    <Future location={location} />
                </div>
            </div>
        </div>
              
    </div>
    )
})

export default Weather;