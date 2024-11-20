const Phone = () => {
  return (
    <div className="flex items-center justify-center h-auto bg-gray-100 py-6">
      <div className="flex flex-col items-center space-y-4 lg:flex-row lg:space-x-6">
        <div className="max-w-lg p-4 text-center lg:text-left">
          <p className="p-4 text-lg italic text-center">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis
            eligendi molestias, aspernatur adipisci dolores, similique vel
            laudantium, repellendus suscipit aperiam soluta consequuntur nihil
            doloremque magnam fugiat eaque possimus facere earum.
          </p>
        </div>
        <div className="mockup-phone ">
          <div className="camera"></div>
          <div className="display">
            <div className="artboard bg-black artboard-demo phone-1 text-gray-800 text-lg font-semibold">
              <img
                src="https://images.pexels.com/photos/1624496/pexels-photo-1624496.jpeg"
                alt="mountains"
                className="w-full"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Phone;
