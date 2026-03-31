export const metadata = {
  title: "Clip Finder",
  description: "Find clip-worthy moments from YouTube transcripts",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
