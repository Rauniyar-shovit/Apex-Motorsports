import Link from "next/link";

const Contact = () => {
  return (
    <main className="min-h-screen">
      <section className="relative bg-foreground text-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 py-16 sm:py-20 md:py-24 lg:py-28 2xl:py-32 text-center">
          <h1 className="font-barlow text-4xl sm:text-5xl md:text-[3.45rem] 2xl:text-6xl  uppercase tracking-relaxed">
            Contacts
          </h1>

          {/* Breadcrumb */}
          <nav className="mt-6 font-sans">
            <ol className="flex items-center justify-center gap-2 text-sm  font-semibold tracking-wider uppercase">
              <li>
                <Link
                  href="/"
                  className=" relative after:content-[''] after:absolute after:left-1/2 after:-bottom-1 
   after:h-[1.5px] after:w-0  after:bg-white after:-translate-x-1/2
   after:transition-all after:duration-300 hover:after:w-full"
                >
                  Home
                </Link>
              </li>
              <li>/</li>
              <li className="text-white">Contacts</li>
            </ol>
          </nav>
        </div>
      </section>
    </main>
  );
};

export default Contact;
