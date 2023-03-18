import { createSignal, Show, ParentComponent } from "solid-js";

const NavController: ParentComponent<{}> = (props) => {
  const [expanded, setExpanded] = createSignal(false);  

  return (
    <nav
      class="bg-skin-secondary text-skin-inverted md:text-skin-base rounded-md md:bg-transparent"
    >
      <button
        class="md:hidden z-[9999] absolute top-4 right-4"
        onClick={() => setExpanded((prev) => !prev)}
        aria-controls="primary-navigation"
        aria-expanded={expanded()}
      >
        <span class="sr-only">Menu</span>

        <Show
          when={expanded()}
          fallback={
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-10 h-10 fill-skin-base">
              <path fill-rule="evenodd" d="M3 6.75A.75.75 0 013.75 6h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 6.75zM3 12a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 12zm0 5.25a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75a.75.75 0 01-.75-.75z" clip-rule="evenodd" />
            </svg> 
          }
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-10 h-10 fill-skin-base">
            <path fill-rule="evenodd" d="M5.47 5.47a.75.75 0 011.06 0L12 10.94l5.47-5.47a.75.75 0 111.06 1.06L13.06 12l5.47 5.47a.75.75 0 11-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 01-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 010-1.06z" clip-rule="evenodd" />
          </svg>
        </Show>
      </button>
      <ul
        class={`md:flex md:items-center md:gap-2 ${
          expanded() ? "block mt-4 md:m-0" : "hidden"
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
