import Link from "next/link";
import { APIComponent } from "../components/APIComponent";

export default function Page2() {
    return (
      <div>
        Page 2
        <Link href="/">Go to Home</Link>
        <APIComponent />
      </div>
    );
}