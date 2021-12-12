import "./Info.css";

const Info = () => {
  // const emailRef = useRef(null);

  // const submitHandler = (event) => {
  //   event.preventDefault();

  //   const enteredEmail = emailRef?.current?.value;
  //   const [isSuccessTrue, setIsSuccessTrue] = useState(false);

  //   if (!enteredEmail || !enteredEmail.includes("@")) {
  //     console.log("Invalid input.");
  //     return;
  //   }

  //   fetch("https://shrouded-shore-56422.herokuapp.com/subscribe", {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify({ email: enteredEmail }),
  //   })
  //     .then((response) => response.json())
  //     .then((data) => {
  //       console.log("Success:", data);
  //       setIsSuccessTrue(true);
  //     })
  //     .catch((error) => {
  //       console.error("Error:", error);
  //       setIsSuccessTrue(false);
  //     });

  //   emailRef.current.value = "";
  // };

  return (
    <main className="main">
      <div className="text_content">
        <p className="comming_soon">Coming Soon</p>
        <h1 className="title">ADVANCED FLEXUS PARTNERSHIP</h1>
        <p className="extra_paragraph">
          <span className="flexus_color">FlEXUS INTERNATIONAL TRADING</span> is
          a leading producer of Fine Greek Food Products <br /> under the{" "}
          <span className="terra_greca_color">TERRA GRECA</span> brand.
        </p>
      </div>
      <div className="subscription_form_wrapper">
        <form className="subscription_form">
          <h2>Get Notified</h2>
          <div className="form_input--container">
            <input placeholder="Your Email" />
            <button>Notify Me</button>
          </div>
        </form>
      </div>
      <div className="text_content">
        <p className="closing_text">
          Our only criterion for selecting raw materials is quality. Welcome to
          the world of <br />
          TERRA GRECA's Pure Traditional Products.
        </p>
      </div>
    </main>
  );
};

export default Info;
