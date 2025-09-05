import type { HeaderProps } from "../types";
import HamburgerIcon from "./HamburgetIcon";
import styles from "./index.module.scss";

const Header: React.FC<HeaderProps & { className?: string }> = ({
  onHamburgerClick,
  className,
}) => {
  return (
    <header className={className}>
      <button
        className={styles.hamburgerButton}
        onClick={onHamburgerClick}
        aria-label='Open Sidebar Menu'>
        <HamburgerIcon />
      </button>
      <h1 className={styles.title}> Portfolio </h1>
    </header>
  );
};

export default Header;