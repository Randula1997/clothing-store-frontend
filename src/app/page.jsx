import Image from "next/image";
import MainNavbar from "./(components)/(Navbar)/MainNavbar";
import TextCategorySlider from "./(components)/(Slider)/TextCategorySlider";
import AdsSlider from "./(components)/(Slider)/AdsSlider";
import ImageCategorySlider from "./(components)/(Slider)/ImageCategorySlider";
import MainBodyContent from "./(components)/(BodyContent)/MainBodyContent";
import OfferNavbar from "./(components)/(Navbar)/OfferNavbar";
import ItemCardSlider from "./(components)/(Slider)/ItemCardSlider";

function page() {
  return (
    <>
        <MainBodyContent>
          <MainNavbar />
          <TextCategorySlider />
          <AdsSlider />
          <div className="flex justify-end w-full items-center py-2.5 text-[#9B9B9B]">
            All categories
          </div>
          <ImageCategorySlider />
          <OfferNavbar/>
          <ItemCardSlider/>
        </MainBodyContent>
    </>
  );
}

export default page;
