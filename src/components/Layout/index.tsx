import { Outlet } from "react-router-dom";
import Sidebar from "../Sidebar";
import Header from "../Header";
import styles from "./index.module.scss";
import { useState, useEffect, useCallback } from "react";

const Layout = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const closeSidebar = useCallback(() => {
    setIsSidebarOpen(false);
  }, []);

  const toggleSidebar = useCallback(() => {
    setIsSidebarOpen((prev) => !prev);
  }, []);

  const handleBackdropClick = useCallback(() => {
    closeSidebar();
  }, [closeSidebar]);

  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape" && isSidebarOpen) {
        closeSidebar();
      }
    };

    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, [isSidebarOpen, closeSidebar]);

  return (
    <div className={styles.layout}>
      {isSidebarOpen && (
        <div
          className={styles.backdrop}
          onClick={handleBackdropClick}
          aria-hidden='true'
        />
      )}

      <Sidebar
        className={`${styles.sidebar} ${isSidebarOpen ? styles.open : ""}`}
        isOpen={isSidebarOpen}
        onClose={closeSidebar}
      />

      <div className={styles.main}>
        <Header className={styles.header} onHamburgerClick={toggleSidebar} />
        <main className={styles.mainContent}>
          <div className={styles.contentContainer}>
            <Outlet />
          </div>
        </main>
      </div>
    </div>
  );
};

export default Layout;
