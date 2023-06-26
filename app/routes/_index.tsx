import type { V2_MetaFunction } from "@remix-run/node";
import Square from "../components/square";

export const meta: V2_MetaFunction = () => {
  return [{ title: "Magic Square" }];
};

export default function Index() {
  return (
    <div style={{ fontFamily: "Ubuntu, sans-serif", lineHeight: "1.4", textAlign: "center" }}>
      <h3>Dynamic Square</h3>
      <Square />
    </div>
  );
}
