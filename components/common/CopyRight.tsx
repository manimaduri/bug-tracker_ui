import Link from "next/link";

function Copyright(props: any) {
  const { fdprocessedid, ...rest } = props;
  return (
    <div className="text-center text-gray-700" {...rest}>
      {"Copyright © "}
      <Link href="" className=" underline">
        Bug Tracker
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </div>
  );
}

export default Copyright;