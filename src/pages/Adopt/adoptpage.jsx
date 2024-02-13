import React from "react";
import AdoptCard
 from "../../Components/adoptcard/adoptcard";


function Adopt() {

    return(
        <>
            <div className="h-screen w-full px-24 flex flex-col pt-20 gap-10">
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