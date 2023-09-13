
const Card = (props) => {
  return (
<table class="table mt-2">
  <thead>
    <tr>
      <th scope="col">Github User</th>
      <th scope="col">Picture</th>
      <th scope="col"> link</th>
    </tr>
  </thead>
  <tbody class="table-group-divider mt-1">
    <tr>
      <td scope="col" className=" text-primary text-upparcase font-bold">{props.bio} {props.title}</td>
      <td><img src={props.src} width="50" alt="" /></td>
      <td><button onClick={props.handler} className="btn btn-primary" >followers</button></td>
    </tr>
     
  </tbody>
</table>
  );
};

export default Card;
