"use client";
import { useEffect, useRef, type ReactNode } from "react";
let modalCount = 0;
let previousOverflow = "";
export function AdminModal({ children, labelId, descriptionId, onDismiss, compact = false }: { children: ReactNode; labelId: string; descriptionId?: string; onDismiss: () => void; compact?: boolean }) {
  const ref = useRef<HTMLDialogElement>(null);
  useEffect(() => {
    const dialog = ref.current;
    if (!dialog) return;
    const opener = document.activeElement as HTMLElement | null;
    if (modalCount++ === 0) { previousOverflow = document.body.style.overflow; document.body.style.overflow = "hidden"; }
    dialog.showModal();
    dialog.querySelector<HTMLElement>("[data-modal-autofocus]")?.focus({ preventScroll: true });
    return () => { dialog.close(); if (--modalCount === 0) document.body.style.overflow = previousOverflow; if (opener?.isConnected) opener.focus({ preventScroll: true }); else document.querySelector<HTMLButtonElement>(".admin-create")?.focus({ preventScroll: true }); };
  }, []);
  return <dialog ref={ref} className={`admin-modal${compact ? " is-compact" : ""}`} aria-labelledby={labelId} aria-describedby={descriptionId} onKeyDown={event => {
    if (event.key === "Escape") { event.preventDefault(); event.stopPropagation(); onDismiss(); return; }
    if (event.key !== "Tab") return;
    const dialog = event.currentTarget;
    const controls = Array.from(dialog.querySelectorAll<HTMLElement>("button, a[href], input, textarea, select, [tabindex='0']")).filter(element => !element.matches(":disabled") && element.getClientRects().length > 0);
    const first = controls[0], last = controls[controls.length - 1];
    if (!first) { event.preventDefault(); return; }
    if ((event.shiftKey && document.activeElement === first) || (!event.shiftKey && document.activeElement === last)) { event.preventDefault(); (event.shiftKey ? last : first).focus(); }
  }} onCancel={event => { event.preventDefault(); onDismiss(); }} onClick={event => { if (event.target !== event.currentTarget) return; const rect = event.currentTarget.getBoundingClientRect(); if (event.clientX < rect.left || event.clientX > rect.right || event.clientY < rect.top || event.clientY > rect.bottom) onDismiss(); }}>{children}</dialog>;
}
