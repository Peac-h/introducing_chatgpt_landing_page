// headerView.ts
export class HeaderView {
  static changeHeaderBgColor() {
    window.addEventListener("scroll", () => {
      const header = document.getElementById("header") as HTMLElement;
      const scrollPosition = window.scrollY;

      scrollPosition >=
      5 * parseFloat(getComputedStyle(document.documentElement).fontSize)
        ? header?.classList.add("white-bg")
        : header?.classList.remove("white-bg");
    });
  }
}
