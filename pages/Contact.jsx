import { useState } from "react";

const Contact = () => {
  let initForm = { email: "", subject: "", content: "" };
  const [form, setForm] = useState(initForm);

  const [isFormSubmitted, setIsFormSubmitted] = useState(false);

  function handleType(e) {
    console.log("form: ", form);
    console.log("e: ", e.target.name);
    setForm(() => ({ ...form, [e.target.name]: e.target.value }));
  }

  function postContactMessage(e) {
    e.preventDefault();
    let { email, content, subject } = form;
    email = email.length ? email : null;

    let packet = {
      email,
      subject,
      content,
    };
    console.log(packet);

    setForm(initForm);
    setIsFormSubmitted(true);
  }

  if (isFormSubmitted) {
    return (
      <div className="flex justify-center py-24 w-full">
        <div>Thank you for contacting Palmer Doggie Depot!</div>
      </div>
    );
  }

  return (
    <div>
      <form
        onSubmit={postContactMessage}
        className="flex flex-col mx-auto p-4 rounded items-center justify-center w-full bg-slate-100"
      >
        <div className="flex flex-col w-5/6 md:w-1/2">
          <label className="self-center my-4" htmlFor="email-mailinglist">
            Subject *
          </label>

          <input
            required
            name="subject"
            onChange={handleType}
            value={form.subject}
            className="m-2 p-2 flex-grow"
            id="email-mailinglist"
            type="text"
          />
        </div>

        <div className="flex flex-col w-5/6 md:w-1/2">
          <label className="self-center my-4" htmlFor="email-mailinglist">
            Message *
          </label>

          <textarea
            required
            name="content"
            onChange={handleType}
            value={form.content}
            className="m-2 p-2 h-28 align-end"
            id="email-mailinglist"
            type="text"
          />
        </div>

        <div className="flex flex-col w-5/6 md:w-1/2">
          <label className="self-center my-4" htmlFor="email-mailinglist">
            Email Contact
          </label>

          <input
            onChange={handleType}
            name="email"
            value={form.email}
            className="m-2 p-2 flex-grow border-2 rounded"
            id="email-mailinglist"
            type={form.email.length ? "email" : "text"}
          />
        </div>

        <button
          className="bg-sky-100 px-6 rounded py-2 mx-auto my-2"
          type="submit"
        >
          Send
        </button>
      </form>
    </div>
  );
};

export default Contact;
