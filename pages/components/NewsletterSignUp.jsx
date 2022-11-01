import { useState } from "react";

const NewsletterSignup = () => {
  const [email, setEmail] = useState("");
  const [userMsg, setUserMsg] = useState("Sign up for the newsletter!");
  const [submittedEmail, setSubmittedEmail] = useState(false);

  function postToEmail(e) {
    e.preventDefault();
    if (!email.includes("@")) {
      setUserMsg("You must Supply something to play fetch with.....");
      return;
    }
    setEmail("");
    setUserMsg("Thank you for signing up!");
    setSubmittedEmail(true);
  }

  function handleType({ target }) {
    setEmail(target.value);
  }
  return (
    <div>
      <form
        onSubmit={postToEmail}
        className="flex flex-col align-middle justify-center pb-4"
      >
        <label className="self-center my-4" htmlFor="email-mailinglist">
          {userMsg}
        </label>
        <div className={`${submittedEmail ? "hidden" : "flex flex-col"}`}>
          <input
            onChange={handleType}
            value={email}
            className="m-2 p-2 flex-grow text-center"
            placeholder="Bark@squirrel.com"
            id="email-mailinglist"
            type="email"
          />

          <button
            className="bg-sky-100 px-6 rounded py-2 mx-auto my-2"
            type="submit"
          >
            Sign up
          </button>
        </div>
      </form>
    </div>
  );
};

export default NewsletterSignup;
