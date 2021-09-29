import Cart from "./Cart";

function Header({cart}) {
  return (
    <header>
      <h1>The Shop!</h1>
      < Cart cart={cart} />
    </header>
  );
}

export default Header;