import SocialLinks from "./SocialLinks";
import Link from "next/link";
import NewsletterSignup from "./NewsletterSignUp";
import { useState } from "react";
import Donate from "./Donate";

const SupportCard = () => {
  const [wantToGetInvolved, setGetInvolved] = useState(false);

  if (!wantToGetInvolved) {
    return (
      <div className="flex flex-col items-center">
        <button onClick={() => setGetInvolved(true)}>
          Want to get involved?
        </button>
        <SocialLinks />
      </div>
    );
  }

  return (
    <div className=" mx-auto mb-2 m-48 p-8 bg-sky-50 w-2/3">
      <NewsletterSignup />
      <hr />
      <Link className="my-4 flex justify-center underline" href="/Blog">
        Also, Check out what is going on at the park Blog!
      </Link>
      <hr />

      <hr />
      <Donate />
    </div>
  );
};

export default SupportCard;
