import MainNavbar from "./(components)/(Navbar)/MainNavbar";
import TextCategorySlider from "./(components)/(Slider)/TextCategorySlider";
import AdsSlider from "./(components)/(Slider)/AdsSlider";
import ImageCategorySlider from "./(components)/(Slider)/ImageCategorySlider";
import MainBodyContent from "./(components)/(BodyContent)/MainBodyContent";
import OfferNavbar from "./(components)/(Navbar)/OfferNavbar";
import ItemCardSlider from "./(components)/(Slider)/ItemCardSlider";
import RectangleButton from "./(components)/(Button)/RectangleButton";
import BrandCategorySlider from "./(components)/(Slider)/BrandCategorySlider";
import Topic from "./(components)/(Topic)/Topic";
import SubTopic from "./(components)/(Topic)/SubTopic";
import Footer from "./(components)/(Footer)/Footer";

function page() {
  return (
    <>
        <MainBodyContent>
          <MainNavbar />
          <TextCategorySlider />
          <AdsSlider />
          <SubTopic subTopic="All categories"/>
          <ImageCategorySlider />
          <OfferNavbar/>
          <ItemCardSlider/>
          <Topic topic="Recommended" subTopic="Lorem ipsum dolor sit amet, consectetur adipisicing elit"/>
          <ItemCardSlider/>
          <ItemCardSlider/>
          <RectangleButton/>
          <Topic topic="Trending brands" subTopic="Lorem ipsum dolor sit amet, consectetur adipisicing elit"/>
          <BrandCategorySlider />
          <ItemCardSlider/>
          <Topic topic="More to love" subTopic="Lorem ipsum dolor sit amet, consectetur adipisicing elit"/>
          <AdsSlider />
          <ItemCardSlider/>
          <ItemCardSlider/>
          <ItemCardSlider/>
          <Footer/>
        </MainBodyContent>
    </>
  );
}

export default page;
