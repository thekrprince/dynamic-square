import type { V2_MetaFunction } from "@remix-run/node";
import Square from "../components/square";

export const meta: V2_MetaFunction = () => {
  return [{ title: "New Remix App" }];
};

export default function Index() {
  return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.4", textAlign: "center" }}>
      <h1>Dynamic Square</h1>
      <Square />
    </div>
  );
}
