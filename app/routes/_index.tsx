import type { V2_MetaFunction } from "@remix-run/node";
import Square, { links as squareLinks } from "~/components/square";

export const meta: V2_MetaFunction = () => {
  return [
    { title: "Dynamic Square" },
    { name: "description", content: "Magic Boxes!" },
  ];
};

export default function Index() {
  return (
    <div>
      <h3>Dynamic Square</h3>
      <Square />
    </div>
  );
}

export function links() {
  return [...squareLinks()]
}
