import { useState } from "react";
const Donate = () => {
  const [showDonate, setShowDonate] = useState(true);

  function handleDonate() {
    setShowDonate(false);
  }

  if (!showDonate) {
    return (
      <div className={`flex flex-col items-center py-12`}>
        <h3>
          Thank you for your Support! This feature is not quiet there yet, but
          look at you about to donate to a good cause. You are great!
        </h3>
      </div>
    );
  }

  return (
    <div className={`flex flex-col items-center pt-12`}>
      <h3>Support the Park!</h3>
      <button
        className="bg-yellow-100 py-2 px-4  mt-4 border-2 animate-pulse rounded-lg"
        onClick={handleDonate}
      >
        Donate
      </button>
    </div>
  );
};

export default Donate;
