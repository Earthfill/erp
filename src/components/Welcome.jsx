const Welcome = () => {
  return (
    <div className="flex justify-between items-center bg-gray-50 rounded-md p-7 w-full">
      <div className="">
        <h3 className="text-3xl font-bold">Hello Ifeoluwa!</h3>
        <p className="text-gray-500 font-normal">
          Hope you're having a great day!
        </p>
      </div>
      <div className="text-3xl font-thin text-base-300">|</div>
      <div className="font-normal text-lg text-blue-900">
        Your last Appraisal Score was
        <span class="ml-5 bg-orange-400 text-base-100 text-2xl p-5 font-bold rotate-12 mask mask-hexagon-2">
          85%
        </span>
      </div>
    </div>
  );
};

export default Welcome;
