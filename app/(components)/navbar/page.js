import Link from "next/link";

const Navbar = () => {
  return (
<div className="container-fluid bg-primary text-white p-4 col-sm-12 ">
  <div className="container">
    <div className="row">
      <div className="col-4 fs-2">Api App </div>
      <div className="col-4"></div>
      <div className="col-4">
      <form class="d-flex" role="search">
      <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
      <button class="btn btn-outline-success bg-info" type="submit">Search</button>
    </form>
      </div>
    </div>
  </div>
</div>
  );
};

export default Navbar;
