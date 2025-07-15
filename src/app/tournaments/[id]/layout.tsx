export default function TournamentsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div> 
      <div>
        <h1>Your Tournaments</h1>
      </div>
      {children}
    </div>
  );
}