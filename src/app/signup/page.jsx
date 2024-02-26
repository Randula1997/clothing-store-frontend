import Image from 'next/image';
import backgroundImage from '../../assets/images/signup_bg.png';
import fbIcon from '../../assets/images/fb_icon.png';
import googleIcon from '../../assets/images/google_icon.png';
import appleIcon from '../../assets/images/apple_Icon.png';

const Login = () => {
    return(
        <div className="bg-cover bg-center h-screen w-full" style={{ backgroundImage: `url(${backgroundImage.src})`  }}>
            <div>
                <h2>Hello</h2>
                <div><p>Sign in  to company or</p><p>create an account</p></div>
                <div>
                    <input type="text" placeholder="Email or Username" />
                    <input type="password" placeholder="Password" />
                </div>
                <button>Continue</button>
                <p>Or</p>
                <div className='flex flex-row'>
                    <Image src={fbIcon} width={68} height={68}/>
                    <Image src={googleIcon} width={68} height={68}/>
                    <Image src={appleIcon} width={68} height={68}/>
                </div>
            </div>
        </div>
    )
}

export default Login;