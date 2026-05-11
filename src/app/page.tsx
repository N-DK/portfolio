import React from "react";

export default async function Home(props: {
  searchParams?: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  const searchParams = await props.searchParams;
  return (
    <React.Fragment>
      <div>CONTENT</div>
    </React.Fragment>
  );
}
