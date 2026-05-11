import ShowcasesContent from "./_ui/ShowcasesContent";

export default function ShowcasePage({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <ShowcasesContent>{children}</ShowcasesContent>;
}
