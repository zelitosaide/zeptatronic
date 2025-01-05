function Profile() {
  return (
    <img 
      src="https://i.imgur.com/MK3eW3As.jpg" 
      alt="Katherine Johnson"
    />
  );
}

export function Gallery() {
  return (
    <section>
      <h1>Amazing scientists</h1>
      <div className="grid grid-flow-col mt-4">
        <Profile />
        <Profile />
        <Profile />
        <Profile />
      </div>
    </section>
  );
}
