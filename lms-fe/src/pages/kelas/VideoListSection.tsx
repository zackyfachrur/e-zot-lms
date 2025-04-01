import CardList from "./CardList";

export default function VideoListSection() {
  return (
    <>
      <section className="flex flex-row items-center justify-between gap-8 p-8 text-start">
        <nav>
          <ul>
            <li>test</li>
          </ul>
        </nav>

        {/* Card Wrapper */}
        <CardList />
        {/* End Card Wrapper */}
      </section>
    </>
  );
}
