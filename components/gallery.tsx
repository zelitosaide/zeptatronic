function Profile() {
  return (
    <div className="flex flex-col gap-1">
      <img 
        src="https://i.imgur.com/MK3eW3As.jpg" 
        alt="Katherine Johnson"
      />
      <p>Katherine Johnson</p>
    </div>
  );
}

export function Gallery() {
  return (
    <section>
      <h1>Amazing scientists</h1>
      <div className="grid grid-flow-col gap-4 mt-4">
        <Profile />
        <Profile />
      </div>
    </section>
  );
}

