import { BsTwitter, BsGithub } from "react-icons/bs";

import { FaFacebookF } from "react-icons/fa";

const SocialMedia = () => {
  return (
    <div className="app__social">
      <div>
        <a href="https://twitter.com/Aliu94992120">
          <BsTwitter />
        </a>
      </div>
      <div>
        <a href="https://web.facebook.com/ali.ajibade.946">
          <FaFacebookF />
        </a>
      </div>
      <div>
        <a href="https://github.com/leewebstechnologies">
          <BsGithub />
        </a>
      </div>
    </div>
  );
};

export default SocialMedia;
