// searchView.ts
export class SearchView {
  static initializeSearch() {
    const closeSearchBtn = document.getElementById("closeSearchBtn");
    const searchPlaceholder = document.getElementById("searchPlaceholder");
    const searchBtn = document.getElementById("searchBtn");

    closeSearchBtn?.addEventListener("click", () => {
      const searchSection = document.getElementById("searchSection");
      searchSection?.classList.add("hide");
    });

    searchPlaceholder?.addEventListener("click", () => {
      const searchSection = document.getElementById("searchSection");
      searchSection?.classList.add("hide");
    });

    searchBtn?.addEventListener("click", () => {
      const searchSection = document.getElementById("searchSection");
      const searchInput = document.getElementById("searchInput");
      searchSection?.classList.remove("hide");
      searchInput?.focus();
    });
  }
}
