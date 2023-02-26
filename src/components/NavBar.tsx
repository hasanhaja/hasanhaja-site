import { createSignal, ParentComponent } from "solid-js";

const NavLink: ParentComponent<{href: string}> = (props) => (
  <li class="flex justify-end">
    <a
      rel="prefetch"
      class="text-2xl hover:underline md:text-3xl p-1 pr-4"
      href={props.href}
    >
      {props.children}
    </a>
  </li>
);

const NavBar = () => {
  const [expanded, setExpanded] = createSignal(false);
  return (
    <>
      <button
        class="md:hidden z-[9999] absolute top-8 right-8"
        onClick={() => setExpanded((prev) => !prev)}
        aria-controls="primary-navigation"
        aria-expanded={expanded()}
      >
        <span class="sr-only">Menu</span>
        <img
          class="w-10 h-10"
          src={expanded() ? "/close-menu.svg" : "/hamburger-menu.svg"}
          alt={expanded() ? "Close menu" : "Open menu"}
        />
      </button>
      <nav
        class="md:flex md:items-center md:justify-between md:mb-2 bg-green-300 rounded-md md:bg-transparent"
      >
        <ul
          class={`md:flex md:items-center md:gap-2 ${
            expanded() ? "block" : "hidden"
          }`}
          id="primary-navigation"
          aria-hidden={!expanded()}
          hidden={!expanded()}
        >
          <NavLink href="/">Home</NavLink>
          <NavLink href="/weather">Weather</NavLink>
          <NavLink href="/count">Counter</NavLink>
          <NavLink href="/picks">Picks</NavLink>
        </ul>
      </nav>
    </>
  );
};

export default NavBar;
