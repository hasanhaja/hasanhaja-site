import { createSignal, ParentComponent } from "solid-js";

const NavController: ParentComponent<{}> = (props) => {
  const [expanded, setExpanded] = createSignal(false);  

  return (
    <nav
      class="md:flex md:items-center md:justify-between md:mb-2 bg-green-300 rounded-md md:bg-transparent"
    >
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
      <ul
        class={`md:flex md:items-center md:gap-2 ${
          expanded() ? "block" : "hidden"
        }`}
        id="primary-navigation"
        aria-hidden={!expanded()}
        hidden={!expanded()}
      >
        { props.children }
      </ul>
    </nav>
  );
};

export default NavController;
