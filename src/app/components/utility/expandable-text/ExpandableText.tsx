"use client";
import { useState } from "react";

type Props = {
  text: string;
  limit?: number;
};

const ExpandableText = ({ text, limit = 300 }: Props) => {
  const [expanded, setExpanded] = useState(false);

  if (!text) return null;

  const aboveLimit = text.length > limit;

  const summary =
    aboveLimit && !expanded ? text.slice(0, limit) + "...  " : text + "  ";

  return (
    <p className="mb-6">
      {summary}{" "}
      {aboveLimit && (
        <button
          className="underline cursor-pointer py-1 rounded-md text-orange-300"
          onClick={() => setExpanded((prev) => !prev)}
        >
          {expanded ? "show less" : "show more"}
        </button>
      )}
    </p>
  );
};

export default ExpandableText;
