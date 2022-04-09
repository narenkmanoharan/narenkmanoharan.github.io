import Link from "next/link";
import { useState } from 'react';
import SocialButtons from "./social_buttons";

function DesktopLayout() {
  return (
    <>
      {/* For Desktop */}
      <div className="flex flex-row mb-10">
        <div className="flex-none text-gray-700 pl-0">
          <Link href="/">
            <a className="text-lg text-gray-600 hover:no-underline">
              Blog
            </a>
          </Link>
        </div>
        <div className="flex flex-grow justify-center space-x-4">
        </div>
        <div className="flex flex-row space-x-4 mt-2">
          <Link href="/blog">
            <a className="nav-item text-lg text-gray-600 hover:no-underline px-2 pb-1">Blog</a>
          </Link>
        </div>
      </div>
    </>
  )
}

function MobileLayout() {
  const [navMenuOpened, setNavMenuOpened] = useState(false);

  return (
    <>
      {/* For Mobile */}
      <MobileNavMenuSidebar navMenuOpened={navMenuOpened} setNavMenuOpened={setNavMenuOpened} />

      <ul className="inline-flex m-0">
        <li>
          <button className="py-2 text-gray-600 appearance-none focus:outline-none" onClick={() => setNavMenuOpened(true)}>
            <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <title>Menu</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
            </svg>
          </button>
        </li>
        <li className="mx-4">
          <Link href="/">
            <a className="text-lg text-gray-600 hover:no-underline py-1">
              Blog
            </a>
          </Link>
        </li>
      </ul>
    </>
  );
}

function MobileNavMenuSidebar({ navMenuOpened, setNavMenuOpened }) {
  if (!navMenuOpened) {
    return null;
  }

  return (
    <div className="w-full absolute top-0 left-0 z-10 m-0 bg-gray-700">
      <div className="absolute top-0 right-0 m-4" onClick={() => setNavMenuOpened(false)}>Close</div>
      <div className="flex flex-col m-4 space-y-4">
        <Link href="/">
          <a className="text-lg text-gray-400 hover:no-underline px-2">
            Home
          </a>
        </Link>
        <Link href="/blog">
          <a className="text-lg text-gray-400 hover:no-underline px-2">
            Blog
          </a>
        </Link>
        <div className="flex flex-row space-x-4 px-2">
          <SocialButtons />
        </div>
      </div>
    </div>
  );
}

export default function SiteHeader() {
  return (
    <>
      <div className="hidden lg:block">
        <DesktopLayout />
      </div>
      <div className="block lg:hidden">
        <MobileLayout />
      </div>
    </>
  );
}
