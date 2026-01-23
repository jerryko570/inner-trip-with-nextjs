export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="pt-30 flex items-center justify-center">
      <div className="w-full max-w-[980px]">{children}</div>
    </div>
  );
}
