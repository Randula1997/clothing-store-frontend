import bg_login from "../../assets/images/home_bg.png";
import nextIcon from "../../assets/images/next_icon.png";
import CompanyInfoText from "../(components)/(Footer)/CompanyInfoText";
import Image from "next/image";
import TextCategory from "../(components)/(Category)/TextCategory";
import Button from "../(components)/(Button)/Button";
import Link from "next/link";
import SubNavbar from "../(components)/(Navbar)/SubNavbar";

function page() {
  return (
    <>
      <div
        className="bg-cover bg-center h-screen w-full"
        style={{ backgroundImage: `url(${bg_login.src})` }}
      >
        <SubNavbar />
        <div className="flex justify-center items-center h-screen w-full absolute top-0">
          <div className="py-10 px-14 rounded-3xl text-center relative max-md:w-full max-sm:px-10">
            <h2 className="text-[2rem] font-bold pb-4 max-sm:text-3xl">
              Where Fashion Dreams Take Flight
            </h2>
            <div className="bg-[#f4f4f494] flex flex-row justify-center items-center gap-4 rounded-full pr-2 [box-shadow:0_10px_25px_rgba(0,0,0,0.1)]">
              <input
                type="text"
                placeholder="What are you looking for ?"
                className={`w-full py-4 px-5 bg-transparent h-h-100 rounded-full max-sm:w-full`}
              />
              <Button btnWidth="w-40" btnName="Search" btnType="button" />
            </div>
            <div className="max-w-full bg-transparent flex justify-center items-center gap-4 rounded-full p-3 max-sm:w-full max-sm:hidden">
              <TextCategory
                btnCategoryName="Clothes"
                btnCategoryBgColor="bg-[#f4f4f494]"
              />
              <TextCategory
                btnCategoryName="Shoes"
                btnCategoryBgColor="bg-[#f4f4f494]"
              />
              <TextCategory
                btnCategoryName="Jewelry"
                btnCategoryBgColor="bg-[#f4f4f494]"
              />
              <Link href="/">
                <div className="relative w-fit px-10 py-2.5 bg-[#f4f4f494] text-[#9B9B9B] rounded-full mr-2 max-md:hidden cursor-pointer">
                  <Image
                    src={nextIcon}
                    width={28}
                    height={28}
                    className="animate-move_right"
                  />
                </div>
              </Link>
            </div>
          </div>
        </div>
        <CompanyInfoText />
      </div>
    </>
  );
}

export default page;
