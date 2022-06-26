import Link from "next/link";
import React from "react";

const ReturnHome = () => {
  return (
    <Link href="/">
      <div className="p-5 absolute cursor-pointer underline text-slate-50">
        The Maths and Physics Bay
      </div>
    </Link>
  );
};

export default ReturnHome;
