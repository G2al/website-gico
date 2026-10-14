"use client";

import Image from "next/image";
import { ChevronDown, Menu, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { navigation, originalPage } from "@/lib/navigation";
import { ArrowLink } from "./arrow-link";
import "./site-header.css";

export function SiteHeader({ activePath = "/" }: { activePath?: string }) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<number | null>(null);
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

  const supportsDesktopHover = () => window.matchMedia("(min-width: 1200px) and (hover: hover) and (pointer: fine)").matches;

  useEffect(() => () => {
    if (hoverCloseRef.current !== null) clearTimeout(hoverCloseRef.current);
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
    const desktop = window.matchMedia("(min-width: 1200px)");
    const resetNavigation = () => {
      cancelHoverClose();
      setMobileOpen(false);
      setOpenDropdown(null);
    };
    desktop.addEventListener("change", resetNavigation);
    return () => desktop.removeEventListener("change", resetNavigation);
  }, []);

  return (
    <header className="site-header" ref={headerRef} onBlur={(event) => {
      if (!event.currentTarget.contains(event.relatedTarget as Node | null)) {
        setOpenDropdown(null);
        setMobileOpen(false);
      }
    }}>
      <a className="brand" href="/" aria-label="GiCo Cooperativa Sociale — homepage">
        <Image src="/images/logo-gico-coop.png" alt="GiCo" width={800} height={403} sizes="116px" loading="eager" className="brand-logo" />
        <span className="brand-caption">Cooperativa Sociale</span>
      </a>
      <nav id="navigazione-principale" aria-label="Navigazione principale" className={`main-nav ${mobileOpen ? "is-open" : ""}`}>
        <ul className="nav-list">
          {navigation.map((item, index) => (
            <li key={item.label} className="nav-item" onPointerEnter={(event) => {
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
                      requestAnimationFrame(() => document.querySelector<HTMLAnchorElement>(`#submenu-${index} a`)?.focus());
                    }
                  }}>
                    {item.label}<ChevronDown size={13} aria-hidden="true" />
                  </button>
                  <ul id={`submenu-${index}`} className="nav-submenu" hidden={openDropdown !== index}>
                    {item.children.map((child) => <li key={child.label}><a href={child.href} aria-current={child.href === activePath ? "page" : undefined}>{child.label}</a></li>)}
                  </ul>
                </>
              ) : <a href={item.href} className="nav-link" aria-current={item.href === activePath ? "page" : undefined}>{item.label}</a>}
            </li>
          ))}
        </ul>
        <ArrowLink className="mobile-contact" href={originalPage("/contatti-cooperativa/")}>Contattaci</ArrowLink>
      </nav>
      <div className="header-actions">
        <ArrowLink className="header-contact" href={originalPage("/contatti-cooperativa/")}>Contattaci</ArrowLink>
        <button ref={menuToggleRef} type="button" className="mobile-menu-toggle" aria-expanded={mobileOpen} aria-controls="navigazione-principale" aria-label={mobileOpen ? "Chiudi il menu" : "Apri il menu"} onClick={() => {
          setMobileOpen(!mobileOpen);
          setOpenDropdown(null);
        }}>{mobileOpen ? <X size={24} /> : <Menu size={24} />}</button>
      </div>
    </header>
  );
}
