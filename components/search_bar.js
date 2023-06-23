export default function Search_Bar({ className }) {
    return (<form className={"d-flex "+className} action="/search" method="search">
    <input className="form-control bg-light mx-2 my-2 my-sm-0" type="search" id="search" name="search" placeholder="Search Movies" />
    <button className="btn btn-secondary my-2 my-sm-0" type="submit">Search</button>
    </form>);
}