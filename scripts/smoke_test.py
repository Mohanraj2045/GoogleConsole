#!/usr/bin/env python3
"""Lightweight smoke test for required static pages and nav links."""

from pathlib import Path
import sys

ROOT = Path(__file__).resolve().parents[1]
PAGES = ["index.html", "about.html", "services.html", "contact.html", "404.html"]


def fail(message: str) -> None:
    print(f"FAIL: {message}")
    sys.exit(1)


for page in PAGES:
    path = ROOT / page
    if not path.exists():
        fail(f"Missing page: {page}")

content = (ROOT / "index.html").read_text(encoding="utf-8")
for nav_target in ["about.html", "services.html", "contact.html"]:
    if nav_target not in content:
        fail(f"index.html is missing link to {nav_target}")

print("PASS: smoke test completed")

