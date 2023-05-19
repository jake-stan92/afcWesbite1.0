import facebookImg from "../images/facebook.svg";
import instagramImg from "../images/instagram.svg";
import twitterImg from "../images/twitter.svg";

function SocialIconsFooter() {
    return(        
        <div className="socialIconsFooter">
            <img alt="Facebook" src={facebookImg}></img>
            <img alt="Instagram" src={instagramImg}></img>
            <img alt="Twitter" src={twitterImg}></img>
        </div>        
    )
}

export default SocialIconsFooter;