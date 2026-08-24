import { redirect } from "next/navigation";

// Each trip lives in its own subpage (e.g. /travel/goan-diaries).
// While there's only one trip, /travel goes straight to it by default —
// once more trips exist, replace this redirect with a trip index page
// listing a card per trip.
export default function Travel() {
  redirect("/travel/goan-diaries");
}
