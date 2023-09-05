import Link from "next/link";
const Card = (props) => {
  return (
    <div  className="bg-cyan-500 text-white  rounded-md overflow-hidden my-2 text-center">
      <div className="p-5">{props.key}
        <h2 className="text-xl font-semibold">{props.title}</h2>
        <div className="mt-4">
          <Link href={props.url} className="bg-gray-500 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded">Know more</Link>
        </div>
      </div>
    </div>
  );
};

export default Card;
