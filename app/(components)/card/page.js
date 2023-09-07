import Link from "next/link";
const Card = (props) => {
  return (
<table class="table mt-2">
  <thead>
    <tr>
      <th scope="col">Name</th>
      <th scope="col">Link</th>
    </tr>
  </thead>
  <tbody class="table-group-divider">
    <tr>
      <th scope="col">{props.title}</th>
      <td><Link href={props.url} className="btn btn-info">find out</Link></td>
    </tr>
  </tbody>
</table>
  );
};

export default Card;
