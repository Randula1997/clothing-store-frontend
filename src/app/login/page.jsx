import bg_login from "../../assets/images/bg_login.png";
import fbIcon from "../../assets/images/fb_icon.png";
import googleIcon from "../../assets/images/google_icon.png";
import appleIcon from "../../assets/images/apple_Icon.png";
import Icon from "../(components)/(Icon)/Icon";
import Input from "../(components)/(Input)/Input";
import Button from "../(components)/(Button)/Button";
import CompanyInfoText from "../(components)/(Footer)/CompanyInfoText";
import Link from "next/link";

const Login = () => {
  return (
    <div
      className="bg-cover bg-center h-screen w-full"
      style={{ backgroundImage: `url(${bg_login.src})` }}
    >
      <div className="text-[2rem] font-bold px-[0.875em] py-[0.475em] ">
        Company
      </div>
      <div className="flex justify-end items-center border-2 h-screen w-full absolute top-0 pr-24 max-md:pr-0 max-md:justify-center">
        <div className="bg-[#f4f4f494] py-10 px-14 rounded-3xl text-center relative max-md:w-full max-sm:px-10">
          <h2 className="text-[2rem] font-bold pb-1">Hello</h2>
          <p className="text-[#9B9B9B] pb-5">
            Sign in to company or{" "}
            <span className="underline cursor-pointer">
              <Link href="/signup">create an account</Link>
            </span>
          </p>
          <div className="flex flex-col justify-center items-center gap-4">
            <Input
              inputWidth="w-full"
              inputType="text"
              inputPlaceholder="Email or Username"
            />
            <Input
              inputWidth="w-full"
              inputType="password"
              inputPlaceholder="Password"
            />
            <Button btnWidth="w-full" btnName="Continue" btnType="button" />
          </div>
          <p className="text-[#9B9B9B] py-4">Or</p>
          <div className="flex flex-row justify-center items-center gap-6">
            <Icon iconSrc={fbIcon} iconBg="bg-white" />
            <Icon iconSrc={googleIcon} iconBg="bg-white" />
            <Icon iconSrc={appleIcon} iconBg="bg-white" />
          </div>
        </div>
      </div>
      <CompanyInfoText />
    </div>
  );
};

export default Login;
