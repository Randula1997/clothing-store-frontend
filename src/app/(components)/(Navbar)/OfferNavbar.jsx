'use client'

import CategoryBodyContent from "../(BodyContent)/CategoryBodyContent";
import TextCategory from "../(Category)/TextCategory";

function OfferNavbar() {

  return (
    <CategoryBodyContent>
        <div className="px-2 py-5 pb-2 flex justify-center items-center gap-4 max-md:w-fit max-md:justify-start max-md:gap-0">
            <TextCategory categoryName="Up to 90% off" categoryHover="hover:text-black"/>
            <TextCategory categoryName="All under $1" categoryHover="hover:text-black"/>
            <TextCategory categoryName="3 for $19" categoryHover="hover:text-black"/>
            <TextCategory categoryName="Christmas offer" categoryHover="hover:text-black"/>
        </div> 
    </CategoryBodyContent>    
  );
}

export default OfferNavbar;


