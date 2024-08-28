export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10" style={{ height: "calc(100% - 100px)"}}>
      <div className="flex w-full  justify-center items-center">
        {children}
      </div>
    </section>
  );
}
