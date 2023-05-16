import { useSession } from "next-auth/react";
import Link from "next/link";
import React, { use } from "react";

function SideNav() {
  const session = useSession();
  const user = session.data?.user;
  return (
    <nav className="sticky top-0 px-2 py-4">
      <ul className="flex flex-col items-start gap-2 whitespace-nowrap">
        <li>
          <Link href="/">Home</Link>
        </li>
        {user != null && (
          <li>
            <Link href={`/profiles/${user.id}`}>Profiles</Link>{" "}
          </li>
        )}
        {user == null ? null : null}
        {/* {user == null ? (<li><Link href={`/`}>Log In</Link></li>) : ( <li ><Link>Log Out User</Link></li>)} */}
      </ul>
    </nav>
  );
}

export default SideNav;
