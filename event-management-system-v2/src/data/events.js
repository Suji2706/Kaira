// All dummy data lives here. Edit this file to change what the site shows.

export const categories = [
  {
    name: "Cultural",
    icon: "🎤",
    tagline: "Your stage is waiting.",
    description: "Performances and showcases for artists, dancers and storytellers.",
    examples: ["Dance", "Singing", "Drama", "Fashion Show"],
  },
];

export const events = [
  { id: 4, name: "Rangmanch Cultural Fest", category: "Cultural", date: "2026-11-19", time: "5:30 PM", venue: "Open Air Theatre", description: "A full evening of music, drama and showcases by every department." },
  { id: 5, name: "Footloose Dance Battle", category: "Cultural", date: "2026-11-20", time: "4:00 PM", venue: "Main Auditorium", description: "Solo and crew rounds in classical, folk and freestyle categories." },
  { id: 6, name: "Swar Singing Contest", category: "Cultural", date: "2026-11-21", time: "3:00 PM", venue: "Mini Auditorium", description: "Perform one song in front of a live audience and a judging panel." },
];

export function formatDate(dateString) {
  const d = new Date(dateString);
  return {
    day: d.toLocaleDateString("en-IN", { day: "2-digit" }),
    month: d.toLocaleDateString("en-IN", { month: "short" }),
    full: d.toLocaleDateString("en-IN", { day: "numeric", month: "long", year: "numeric" }),
  };
}
