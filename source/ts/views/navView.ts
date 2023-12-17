// navView.ts
export class NavView {
  static handleNavigation() {
    // navigation functionality
    const navButtons = document.querySelectorAll('[data-role="nav-btn"]');
    const navLinks = document.querySelectorAll(".nav-item");

    navButtons?.forEach((item) =>
      item.addEventListener("click", (e) => {
        const closestNavItem = (e.target as HTMLElement).closest(".nav-item");

        navLinks.forEach((link) => {
          if (link !== closestNavItem)
            link.setAttribute("area-expanded", "false");
        });

        const areaExpanded = closestNavItem?.getAttribute("area-expanded");

        areaExpanded === "true"
          ? closestNavItem?.setAttribute("area-expanded", "false")
          : closestNavItem?.setAttribute("area-expanded", "true");
      })
    );

    document.addEventListener("click", (e) => {
      if (!(e.target as HTMLElement).closest(".header")) {
        navLinks.forEach((link) => {
          link.setAttribute("area-expanded", "false");
        });
      }
    });
  }
}
