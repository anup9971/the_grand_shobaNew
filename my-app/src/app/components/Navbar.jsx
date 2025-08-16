"use client";
import React, { useState } from "react";
import styles from "./Navbar.module.css";
import Link from "next/link";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      {/* Top White Bar */}
      <div className={styles.topBar}>
        <div className={styles.topBarLeft}>WORLD OF HYATT®</div>
        <div className={styles.topBarRight}>
          🌐 <span>Sign In or Join ▼</span>
        </div>
      </div>

      {/* Main Navbar */}
      <div className={styles.mainNav}>
        {/* Left Section */}
        <div className={styles.navLeft}>
          <span
            className={styles.hamburger}
            onClick={() => setMenuOpen(true)}
          >
            ☰
          </span>
          <strong>The Grand Shoba </strong>
        </div>

        {/* Center Logo */}
          <Link href="/">
        <div className={styles.navCenter}>
          S H <i>O</i> B A
        </div>
          </Link>

        {/* Right Section */}
        <div className={styles.navRight}>
          <div className={styles.locations}>LOCATIONS ▼</div>
          <button className={styles.bookBtn}>BOOK</button>
        </div>
      </div>

      {/* Full-Screen Menu */}
      <div className={`${styles.fullMenu} ${menuOpen ? styles.show : ""}`}>
        <span className={styles.closeBtn} onClick={() => setMenuOpen(false)}>✕</span>

        <div className={styles.menuLinks}>
          <a href="/">Home</a>
          <a href="/room&suite">Rooms & Suites</a>
          <a href="/dining">Dining</a>
          <a href="/offers">Offers</a>
          <a href="#">Events & Attractions</a>
        </div>

        {/* Hotel Info */}
        <div className={styles.hotelInfo}>
          <strong>ANDAZ DELHI</strong>
          <p>Asset No. 1, Aerocity, New Delhi - 110037, Delhi, India</p>
          <p>📞 Tel: +91 11 4903 1234</p>
          <p>⭐ 4.5 (1411 Reviews)</p>
        </div>
      </div>
    </>
  );
}
