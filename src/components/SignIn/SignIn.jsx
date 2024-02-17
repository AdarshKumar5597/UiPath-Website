import Logo from "./../../assets/images/udsc.png";
export const SignIn = () => {
  return (
    <div className="h-full w-full bg-[#f7f7fc] flex items-center justify-center">
      <div className="flex flex-col bg-white mt-20 p-12 rounded-xl h-fit w-fit">
        <h1 className=" font-bold">Log in</h1>
        <img src={Logo} className=" w-72" />
        <div className="p-4">
          <div className="">
            <div>
              <input
                type="email"
                placeholder="email"
                className=" rounded-2xl w-full bg-[#f7f8fa] p-2 mb-4"
              />
              <br />
              <input
                type="password"
                placeholder="password"
                className=" rounded-2xl p-2 w-full bg-[#f7f8fa]"
              />
            </div>
            <button className="mt-4 rounded-2xl w-full bg-[#5541d7] p-3 text-white">
              Login
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
