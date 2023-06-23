import Search from '@/pages/search';
import Search_Bar from './search_bar'

import Link from 'next/link'

export default function Navbar({}) {
    return (<nav class="navbar sticky-top navbar-expand-sm bg-primary" data-bs-theme="dark">
    <div class="container-fluid">
      <Link class="navbar-brand" href="/">Movie Searcher</Link>
      <div class="navbar-collapse" id="navbarColor01">
        <Search_Bar />
      </div>
    </div>
  </nav>);
}