
export default function DocsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="flex flex-col  gap-4 ">
      <div className="   ">{children}</div>
    </section>
  );
}
