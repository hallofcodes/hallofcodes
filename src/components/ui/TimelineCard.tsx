import { TimelineEntry } from "@/lib/timeline";

export default function TimelineCard({
  timeline,
}: {
  timeline: TimelineEntry;
}) {
  return (
    <>
      <div className="text-sm text-gray-500">{timeline.date}</div>
      <div className="font-semibold text-white">{timeline.heading}</div>
      {timeline.description && (
        <div className="text-gray-300 text-sm mt-1">{timeline.description}</div>
      )}
    </>
  );
}
