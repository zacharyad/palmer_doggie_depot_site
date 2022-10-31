import Link from "next/link";
export default function Home() {
  return (
    <div>
      <div className="mx-auto bg-gray-50 w-3/4">
        <div className="mx-auto max-w-7xl py-12 px-4 sm:px-6 lg:flex lg:items-center lg:justify-between lg:py-16 lg:px-8">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            <span className="block">Welcome </span>
            <span className="block text-cyan-600">To Palmer Doggie Depot</span>
          </h2>
          <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0">
            <div className="inline-flex rounded-md shadow">
              <Link
                href="/Blog"
                className="inline-flex items-center justify-center rounded-md border border-transparent bg-cyan-600 px-5 py-3 text-base align-middle font-medium text-white hover:bg-cyan-700"
              >
                Check out the latest!
              </Link>
            </div>
            <div className="ml-3 inline-flex rounded-md shadow">
              <Link
                href="/Faqs"
                className="inline-flex items-center justify-center rounded-md border border-transparent bg-white px-5 py-3 text-base font-medium text-cyan-600 hover:bg-cyan-50"
              >
                Learn more.
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
