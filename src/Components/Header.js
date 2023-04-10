import space from "../space.jpg";
const Header = () => {
  return (
    <div className="head ">
      <div className="md:p-20 bg-black bg-opacity-20 p-6">
        <div className="mx-auto max-w-3xl flex flex-col space-y-12">
          <p className="text-center md:text-6xl font-mono text-white text-4xl">
            Asteroids - NeoWs
          </p>
          <p className="text-center text-xl tracking-wide font-medium text-slate-200">
            NeoWs (Near Earth Object Web Service) is a RESTful web service for
            near earth Asteroid information. With NeoWs a user can: search for
            Asteroids based on their closest approach date to Earth.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Header;
