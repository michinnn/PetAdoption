import React from "react";
import AdoptCard
 from "../../Components/adoptcard/adoptcard";


function Adopt() {

    return(
        <>
            <div className="h-screen w-full px-14 lg:px-24 flex flex-col pt-20 lg:pt-24 gap-10 lg:gap-20">
              <AdoptCard/>
              <AdoptCard/>
              <AdoptCard/>
              <AdoptCard/>
              <AdoptCard/>
            </div>
        </>
    )
}

export default Adopt