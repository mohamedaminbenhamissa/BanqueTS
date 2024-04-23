


const NotFound = () => {
  return (
    
    <div className="w-full h-screen flex flex-col lg:flex-row items-center justify-center space-y-16 lg:space-y-0 space-x-8 2xl:space-x-0">
    <div className="w-full  flex flex-col items-center justify-center lg:px-2 xl:px-0 text-center">
        <p className="text-7xl md:text-8xl lg:text-9xl font-bold tracking-wider text-gray-300">404</p>
        <p className="text-xl md:text-xl lg:text-3xl font-bold tracking-wider text-black-300 mt-2">Uh-Oh!</p>
        <p className="text-lg md:text-xl lg:text-2xl text-gray-500 my-10">Sorry, the page you are looking for could not be found.</p>
        <a href="#" className="flex items-center space-x-2 bg-blue-600 hover:bg-blue-700 text-gray-100 px-4 py-2 rounded transition duration-150" title="Return Home">
            
            <span>Return Home</span>
        </a>
    </div>
    <div className=" lg:h-full flex lg:items-end justify-center p-4">
        </div>
</div>
  );
};

export default NotFound;
