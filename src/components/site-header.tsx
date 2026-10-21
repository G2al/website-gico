"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowUpRight, ChevronDown, Mail, Menu, Phone, X } from "lucide-react";
import { useEffect, useRef, useState, type CSSProperties } from "react";
import { gicoContact } from "@/lib/gico-contact";
import { navigation, originalPage } from "@/lib/navigation";
import { ArrowLink } from "./arrow-link";
import "./site-header.css";

const desktopQuery = "(min-width: 1200px)";

export function SiteHeader({ activePath = "/" }: { activePath?: string }) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<number | null>(null);
  const [scrolled, setScrolled] = useState(false);
  const [concealed, setConcealed] = useState(false);
  const headerRef = useRef<HTMLElement>(null);
  const menuToggleRef = useRef<HTMLButtonElement>(null);
  const dropdownRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const hoverCloseRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const cancelHoverClose = () => {
    if (hoverCloseRef.current !== null) {
      clearTimeout(hoverCloseRef.current);
      hoverCloseRef.current = null;
    }
  };

  const supportsDesktopHover = () => window.matchMedia(`${desktopQuery} and (hover: hover) and (pointer: fine)`).matches;

  useEffect(() => () => {
    if (hoverCloseRef.current !== null) clearTimeout(hoverCloseRef.current);
  }, []);

  // Compact on scroll; slide away while reading down and return on the way up.
  useEffect(() => {
    let lastY = window.scrollY;
    let frame = 0;
    const update = () => {
      frame = 0;
      const y = window.scrollY;
      setScrolled(y > 12);
      if (Math.abs(y - lastY) < 6) return;
      setConcealed(y > lastY && y > 220);
      lastY = y;
    };
    const schedule = () => { if (!frame) frame = window.requestAnimationFrame(update); };
    update();
    window.addEventListener("scroll", schedule, { passive: true });
    return () => {
      window.cancelAnimationFrame(frame);
      window.removeEventListener("scroll", schedule);
    };
  }, []);

  useEffect(() => {
    const closeOutside = (event: PointerEvent) => {
      if (!headerRef.current?.contains(event.target as Node)) {
        setOpenDropdown(null);
        setMobileOpen(false);
      }
    };
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key !== "Escape") return;
      if (openDropdown !== null) {
        dropdownRefs.current[openDropdown]?.focus();
        setOpenDropdown(null);
      } else if (mobileOpen) {
        setMobileOpen(false);
        menuToggleRef.current?.focus();
      }
    };
    document.addEventListener("pointerdown", closeOutside);
    document.addEventListener("keydown", closeOnEscape);
    return () => {
      document.removeEventListener("pointerdown", closeOutside);
      document.removeEventListener("keydown", closeOnEscape);
    };
  }, [openDropdown, mobileOpen]);

  useEffect(() => {
    const desktop = window.matchMedia(desktopQuery);
    const resetNavigation = () => {
      cancelHoverClose();
      setMobileOpen(false);
      setOpenDropdown(null);
    };
    desktop.addEventListener("change", resetNavigation);
    return () => desktop.removeEventListener("change", resetNavigation);
  }, []);

  // The full-screen mobile menu owns the scroll while it is open.
  useEffect(() => {
    if (!mobileOpen) return;
    const root = document.documentElement;
    const previous = root.style.overflow;
    root.style.overflow = "hidden";
    return () => { root.style.overflow = previous; };
  }, [mobileOpen]);

  const menuActive = mobileOpen || openDropdown !== null;
  const headerClasses = ["site-header", scrolled && "is-scrolled", concealed && !menuActive && "is-concealed", mobileOpen && "is-menu-open"].filter(Boolean).join(" ");

  return (
    <>
      <header className={headerClasses} ref={headerRef} onFocus={() => setConcealed(false)} onBlur={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget as Node | null)) {
          setOpenDropdown(null);
          setMobileOpen(false);
        }
      }}>
        <div className="site-header-bar">
          <Link className="brand" href="/" aria-label="GiCo Cooperativa Sociale — homepage">
            <Image src="/images/logo-gico-coop.png" alt="GiCo" width={800} height={403} sizes="116px" loading="eager" className="brand-logo" />
            <span className="brand-caption">Cooperativa Sociale</span>
          </Link>
          <nav id="navigazione-principale" aria-label="Navigazione principale" className={`main-nav${mobileOpen ? " is-open" : ""}`}>
            <ul className="nav-list">
              {navigation.map((item, index) => (
                <li key={item.label} className="nav-item" style={{ "--item-index": index } as CSSProperties} onPointerEnter={(event) => {
                  if (event.pointerType !== "mouse" || !supportsDesktopHover()) return;
                  cancelHoverClose();
                  setOpenDropdown(item.children ? index : null);
                }} onPointerLeave={(event) => {
                  if (event.pointerType !== "mouse" || !supportsDesktopHover()) return;
                  cancelHoverClose();
                  hoverCloseRef.current = setTimeout(() => {
                    setOpenDropdown((current) => current === index ? null : current);
                    hoverCloseRef.current = null;
                  }, 180);
                }}>
                  {item.children ? (
                    <>
                      <button type="button" className={`nav-link nav-dropdown-toggle${item.children.some(child => child.href === activePath) ? " is-active" : ""}`} aria-expanded={openDropdown === index} aria-controls={`submenu-${index}`} ref={(node) => { dropdownRefs.current[index] = node; }} onClick={(event) => {
                        cancelHoverClose();
                        setOpenDropdown(event.detail > 0 && supportsDesktopHover() ? index : openDropdown === index ? null : index);
                      }} onKeyDown={(event) => {
                        if (event.key === "ArrowDown") {
                          event.preventDefault();
                          setOpenDropdown(index);
                          requestAnimationFrame(() => document.querySelector<HTMLAnchorElement>(`#submenu-${index} .mega-link`)?.focus());
                        }
                      }}>
                        <span>{item.label}</span><ChevronDown size={14} aria-hidden="true" />
                      </button>
                      <div id={`submenu-${index}`} className={`mega-panel${openDropdown === index ? " is-open" : ""}`}>
                        <div className="mega-inner">
                          <a className="mega-feature" href={item.feature.href}>
                            <Image src={item.feature.image} alt={item.feature.alt} fill sizes="340px" className="mega-feature-image" />
                            <span className="mega-feature-copy">
                              <strong>{item.feature.title}</strong>
                              <span>{item.feature.description}</span>
                              <span className="mega-feature-cta">{item.feature.cta}<ArrowRight size={16} aria-hidden="true" /></span>
                            </span>
                          </a>
                          <div className="mega-links">
                            <p className="mega-label" aria-hidden="true">{item.label}</p>
                            <ul className={item.children.length > 3 ? "is-columns" : undefined}>
                              {item.children.map(({ icon: Icon, ...child }) => (
                                <li key={child.label}>
                                  <a className="mega-link" href={child.href} aria-current={child.href === activePath ? "page" : undefined}>
                                    <span className="mega-link-icon" aria-hidden="true"><Icon size={20} strokeWidth={1.6} /></span>
                                    <span className="mega-link-text"><strong>{child.label}</strong><span>{child.description}</span></span>
                                    <ArrowUpRight className="mega-link-arrow" size={17} aria-hidden="true" />
                                  </a>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </div>
                    </>
                  ) : <a href={item.href} className="nav-link" aria-current={item.href === activePath ? "page" : undefined}><span>{item.label}</span><ArrowRight className="nav-link-arrow" size={22} aria-hidden="true" /></a>}
                </li>
              ))}
            </ul>
            <div className="mobile-menu-footer">
              <ArrowLink className="mobile-contact" href={originalPage("/contatti-cooperativa/")}>Contattaci</ArrowLink>
              <ul className="mobile-menu-contacts">
                <li><a href={gicoContact.phoneHref}><Phone size={16} aria-hidden="true" />{gicoContact.phone}</a></li>
                <li><a href={`mailto:${gicoContact.email}`}><Mail size={16} aria-hidden="true" />{gicoContact.email}</a></li>
              </ul>
              <ul className="mobile-menu-socials" aria-label="Profili social GiCo">
                {gicoContact.socialProfiles.map(profile => (
                  <li key={profile.href}><a href={profile.href} target="_blank" rel="noopener noreferrer" aria-label={`${profile.platform} GiCo ${profile.area} (si apre in una nuova scheda)`}><Image src={`/images/${profile.platform === "Instagram" ? "instagram" : "facebook"}-gico.webp`} alt="" width={22} height={22} /><span aria-hidden="true">{profile.area}</span></a></li>
                ))}
              </ul>
            </div>
          </nav>
          <div className="header-actions">
            <ArrowLink className="header-contact" href={originalPage("/contatti-cooperativa/")}>Contattaci</ArrowLink>
            <button ref={menuToggleRef} type="button" className="mobile-menu-toggle" aria-expanded={mobileOpen} aria-controls="navigazione-principale" aria-label={mobileOpen ? "Chiudi il menu" : "Apri il menu"} onClick={() => {
              setMobileOpen(!mobileOpen);
              setOpenDropdown(null);
            }}>{mobileOpen ? <X size={22} /> : <Menu size={22} />}</button>
          </div>
        </div>
        <span className="header-progress" aria-hidden="true" />
      </header>
      <div className={`nav-backdrop${openDropdown !== null && !mobileOpen ? " is-visible" : ""}`} aria-hidden="true" />
    </>
  );
}
