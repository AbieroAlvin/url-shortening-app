const Contact = () => {
  return (
    <div className="flex items-center justify-center w-full md:p-20 p-12 bg-DarkViolet md:bg-[url(src/assets/images/bg-boost-desktop.svg)] bg-[url(src/assets/images/bg-boost-mobile.svg)] bg-cover bg-center bg-no-repeat">
      <div className="text-white flex flex-col items-center justify-center">
        <h1 className="md:text-4xl text-2xl font-bold">
          Boost your links today
        </h1>
        <button className="py-2 px-6 text-white font-semibold rounded-full bg-Cyan hover:bg-Cyan/95 hover:scale-110 mt-6">
          Get Started
        </button>
      </div>
    </div>
  );
};

export default Contact;
