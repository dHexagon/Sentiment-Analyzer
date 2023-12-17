const Notfound = () => {
  return (
    <div className="h-screen w-full flex justify-around items-center">
      
      <div className="h-[80%] w-4/5 flex flex-col justify-around items-center">
        <img
          src="/assets/notFound/notfound.svg"
          alt="404 not found error icon"
          className="h-1/2 w-1/2 object-contain"
        />
        <span className="text-5xl font-alumniSans font-bold">
          Error 404: Page Not Found
        </span>
        <div className="text-center">
          <span className="text-2xl font-lato font-normal">
            Oops! The page you are looking for doesn’t exist.
          </span>
          <br />
          <span className="text-2xl font-lato font-normal">
            Please head back home
          </span>
        </div>
      </div>
      </div>
  );
};

export default Notfound;
