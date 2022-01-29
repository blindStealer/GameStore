import s from "./Header.module.css";

const Header = () => {
  return (
    <header className={s.header}>
      <img
        src="https://connexxo.com/wp-content/uploads/2017/11/Less-Logo-150x150-300x300.png"
        alt="logo"
      />
    </header>
  );
};

export default Header;
