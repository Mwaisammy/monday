import NavBar from "../components/nav-bar";
const Home = () => {
  return (
    <div>
      <NavBar />
      <div className="flex h-[50vh] w-full justify-between items-center p-[20px]">
        <div className="basis-[60%]  ">
          <p>
            Welcome to our beauty products!
            <br />
            We care about our customers
          </p>
          <button>Explore us</button>
        </div>

        <div
          className="basis-[40%] flex justify-center items-center bg-slate-200 p-[15px]"
          style={{ border: "4px solid #290340" }}
        >
          <img
            src="
        https://images.pexels.com/photos/2536965/pexels-photo-2536965.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1
        "
            alt=""
            className="max-h-[300px] max-w-[330px] rounded-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
