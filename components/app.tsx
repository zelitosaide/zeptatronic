import { Gallery } from "./gallery";

const person = {
  name: "Gregorio Y. Zara",
  avatar: {
    height: 90,
    borderRadius: "50%"
  },
  theme: {
    backgroundColor: "black",
    color: "pink",
  },
}

function TodoList() {
  return (
    <div style={person.theme}>
      <h1>{person.name}'s Todos</h1>
      <img 
        src="https://i.imgur.com/7vQD0fPs.jpg" 
        alt={person.name} 
        className="photo"
        style={person.avatar}
      />
      <ul
        style={{
          backgroundColor: "black",
          color: "pink",
          padding: 10,
        }}
      >
          <li>Invent new traffic lights</li>
          <li>Rehearse a movie scene</li>
          <li>Improve the spectrum technology</li>
      </ul>
    </div>
  );
}

function Avatar() {
  const avatar = "https://i.imgur.com/7vQD0fPs.jpg";
  const description = "Gregorio Y. Zara";

  return (
    <img 
      // src="https://i.imgur.com/7vQD0fPs.jpg" 
      // alt="Gregorio Y. Zara" 
      src={avatar}
      alt={description}
      style={{ height: 90, borderRadius: "50%" }}
    />
  );
}

function Scientist() {
  const name = "Gregorio Y. Zara";
  return <h1>{name}'s To Do List</h1>;
}

function formatDate(date: Date) {
  return new Intl.DateTimeFormat(
    "en-US", 
    { weekday: "long" }
  ).format(date);
}

const today = new Date();

export default function App() {
  return (
    <>
      {/* <Gallery /> */}
      <TodoList />
      {/* <Avatar /> */}
      {/* <Scientist /> */}
      {/* <h1>To Do List for {formatDate(today)}</h1> */}
    </>
  );
}