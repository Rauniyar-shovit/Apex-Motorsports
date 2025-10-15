import type { StructureResolver } from "sanity/structure";

// https://www.sanity.io/docs/structure-builder-cheat-sheet
export const structure: StructureResolver = (S) =>
  S.list()
    .title("Content")
    .items([
      S.documentTypeListItem("sponsor").title("Sponsors"),
      S.documentTypeListItem("achievement").title("Achievements"),
      S.documentTypeListItem("blog").title("Blogs"),
      S.documentTypeListItem("category").title("Categories"),
      S.documentTypeListItem("alumni").title("Alumnis"),
      S.documentTypeListItem("team").title("Team Members"),
      S.documentTypeListItem("department").title("Departments"),
    ]);
