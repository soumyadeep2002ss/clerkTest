import { UserButton } from "@clerk/nextjs";
 
export default function page() {
  return (
    <div>
      hello
      <UserButton afterSignOutUrl="/"/>
    </div>
  )
}