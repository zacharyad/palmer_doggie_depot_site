import SocialLinks from "./SocialLinks";
import Link from "next/link";

const SupportCard = () => {
  return (
    <div className=" mx-auto my-8 p-8 bg-sky-50">
      <div className="signup-wrapper">
        <form className="flex flex-col align-middle justify-center">
          <label htmlFor="email-mailinglist">Sign up for the newsletter!</label>
          <input
            className="m-2 p-2"
            placeholder="Bark@squirrel.com"
            id="email-mailinglist"
            type="text"
          />

          <button
            className="bg-sky-100 px-6 rounded py-2 mx-auto my-2"
            onClick={() => alert("Dummy signup")}
          >
            Sign up
          </button>
        </form>
      </div>

      <hr />

      <Link className="my-4" href="/Blog">
        Check out what is going on at the park!
      </Link>

      <hr />
      <SocialLinks />

      <hr />

      <div className="flex flex-col items-center pt-12">
        <h3>Support the Park!</h3>
        <button
          className="bg-yellow-100 py-2 px-4 rounded mt-4"
          onClick={() => alert("Dummy dontate")}
        >
          Donate
        </button>
      </div>
    </div>
  );
};

export default SupportCard;
