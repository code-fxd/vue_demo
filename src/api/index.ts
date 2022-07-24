import service from "@/utils/service";

export function getCardList() {
  return service({
    url: "/web-card-list",
  });
}
