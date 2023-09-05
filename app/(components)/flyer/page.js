const Flyer = (props) => {
  return (
    <div key={props.key} className="bg-green-300 p-1">
      <h2 className="text-2xl font-semibold text-white">{props.title}</h2>
      <p className="text-lg text-white mt-2">{props.url}</p>
      <button className="bg-yellow-500 text-white px-4 py-2 mt-4 rounded-lg hover:bg-yellow-600 focus:outline-none focus:ring-2 focus:ring-yellow-500">
        Learn More
      </button>
    </div>
  );
};

export default Flyer;
