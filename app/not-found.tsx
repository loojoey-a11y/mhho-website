import Link from "next/link";

export default function NotFound() {
  return (
    <section className="container-wide py-32 text-center">
      <p className="text-xs font-medium tracking-[0.18em] uppercase text-saffron-600">404</p>
      <h1 className="mt-3 font-serif text-4xl sm:text-5xl text-sage-900 text-balance">
        This page wandered off the path.
      </h1>
      <p className="mt-4 text-foreground/70 max-w-md mx-auto">
        The page you&rsquo;re looking for doesn&rsquo;t exist or has been moved.
      </p>
      <Link
        href="/"
        className="mt-8 inline-flex items-center rounded-full bg-sage-700 hover:bg-sage-800 transition-colors px-6 py-3 text-sm font-medium text-white"
      >
        Return home
      </Link>
    </section>
  );
}
