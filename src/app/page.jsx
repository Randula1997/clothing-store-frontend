import Image from "next/image";
import MainNavbar from "./(components)/(Navbar)/MainNavbar";
import TextCategorySlider from "./(components)/(Slider)/TextCategorySlider";
import AdsSlider from "./(components)/(Slider)/AdsSlider";
import ImageCategorySlider from "./(components)/(Slider)/ImageCategorySlider";
import BodyContent from "./(components)/(BodyContent)/BodyContent";

function page() {
  return (
    <>
        <BodyContent>
          <MainNavbar />
          <TextCategorySlider />
          <AdsSlider />
          <div className="flex justify-end w-full items-center py-2.5 text-[#9B9B9B]">
            All categories
          </div>
          <ImageCategorySlider />
        </BodyContent>
    </>
  );
}

export default page;
