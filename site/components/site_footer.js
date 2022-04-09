import Link from "next/link";
import styles from "./layout.module.scss";
import SocialButtons from "./social_buttons";

function DesktopLayout() {
  return (
    <>
      {/* For Desktop */}
      <div className="flex flex-row mb-10">
        <div className="flex flex-row text-gray-700 pl-0 space-x-4">
          <Link href="/sitemap.xml">
            <a className="text-gray-600 hover:no-underline" target="_blank">
              Sitemap
            </a>
          </Link>
        </div>
        <div className="flex flex-grow justify-center text-gray-600 space-x-4 mt-1">
          <div>Powered by Next.js and Github Pages</div>
        </div>
        <div className="flex flex-row space-x-4 mt-2">
          <SocialButtons />
        </div>
      </div>
    </>
  )
}

function MobileLayout() {
  return (
    <>
      <div className="flex flex-col space-y-4">
        <div>
          <Link href="/sitemap.xml">
            <a className="text-gray-600 hover:no-underline" target="_blank">
              Sitemap
            </a>
          </Link>
        </div>
        <div>
          <div>Powered by Next.js and Github Pages</div>
        </div>
        <div className="flex flex-row space-x-4 mt-2">
          <SocialButtons />
        </div>
      </div>
    </>
  );
}

export default function SiteFooter() {
  return (
    <div className="border-t border-gray-600 pt-8 mt-8 mb-8">
      <div className="hidden lg:block">
        <DesktopLayout />
      </div>
      <div className="block lg:hidden">
        <MobileLayout />
      </div>
    </div>
  );
}