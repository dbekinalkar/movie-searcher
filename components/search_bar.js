export default function Search_Bar() {
    return (<form className="d-flex" action="/search" method="search">
    <input className="form-control bg-light me-2" type="search" id="search" name="search" placeholder="Search Movies" />
    <button className="btn btn-secondary my-2 my-sm-0" type="submit">Search</button>
  </form>);
}