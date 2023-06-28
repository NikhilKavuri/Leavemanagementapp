"use client";
import StudentComponent from "@/app/components/student";
import { useRouter } from "next/navigation";
const Student = () => {
  const loggedIn = JSON.parse(localStorage.getItem("loggenIn"));
  const router = useRouter();
//   if (!loggedIn) {
//     router.push("/");
//   }
  return (
    <div>
      <StudentComponent />
    </div>
  );
};
export default Student;
