type ComingSoonPageProps = {
  title: string;
};

export function ComingSoonPage({ title }: ComingSoonPageProps) {
  return (
    <section className="future-page">
      <p>Coming Soon</p>
      <h1>{title}</h1>
    </section>
  );
}
