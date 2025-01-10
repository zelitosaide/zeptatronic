// import { Gallery } from "./gallery";

// const person = {
//   name: "Gregorio Y. Zara",
//   avatar: {
//     height: 90,
//     borderRadius: "50%"
//   },
//   theme: {
//     backgroundColor: "black",
//     color: "pink",
//   },
// }

// function TodoList() {
//   return (
//     <div style={person.theme}>
//       <h1>{person.name}&apos;s Todos</h1>
//       <img 
//         src="https://i.imgur.com/7vQD0fPs.jpg" 
//         alt={person.name} 
//         className="photo"
//         style={person.avatar}
//       />
//       <ul
//         style={{
//           backgroundColor: "black",
//           color: "pink",
//           padding: 10,
//         }}
//       >
//         <li>Invent new traffic lights</li>
//         <li>Rehearse a movie scene</li>
//         <li>Improve the spectrum technology</li>
//       </ul>
//     </div>
//   );
// }

// interface Person {
//   name: string,
//   imageId: string,
// }

// interface AvatarProps {
//   person: Person,
//   size?: number,
// }

// function getImageUrl(person: Person, size = "s") {
//   return "https://i.imgur.com/" + person.imageId + size + ".jpg";
// }

// function Avatar({ person, size = 100 }: AvatarProps) {
// function Avatar(props: AvatarProps) {
//   const person = props.person;
//   const size = props.size;
//   console.log({ props });
//   // const avatar = "https://i.imgur.com/7vQD0fPs.jpg";
//   // const description = "Gregorio Y. Zara";
//   return (
//     <img 
//       src={getImageUrl(person)}
//       alt={person.name}
//       width={size}
//       height={size}
//       style={{ borderRadius: "50%", display: "inline" }}
//       // src="https://i.imgur.com/7vQD0fPs.jpg" 
//       // alt="Gregorio Y. Zara" 
//       // src={avatar}
//       // alt={description}
//       // style={{ height: 90, borderRadius: "50%" }}
//     />
//   );
// }

// function Scientist() {
//   const name = "Gregorio Y. Zara";
//   return <h1>{name}'s To Do List</h1>;
// }

// function formatDate(date: Date) {
//   return new Intl.DateTimeFormat(
//     "en-US", 
//     { weekday: "long" }
//   ).format(date);
// }

// const today = new Date();

interface ItemProps {
  name: string
  isPacked: boolean
}

function Item({ name, isPacked }: ItemProps) {
  // if (isPacked) {
  //   return <li>{name} ✅</li>;
  // }
  // if (isPacked) {
  //   return null;
  // }
  // return <li>{name}</li>;
  // return (
  //   <li>
  //     {isPacked ? (
  //       <del>{name + " ✅"}</del>
  //     ): (
  //       name
  //     )}
  //   </li>
  // );

  // return (
  //   <li>
  //     {name} {isPacked && "✅"}
  //   </li>
  // );

  // let itemContent = name;
  // if (isPacked) {
  //   itemContent = name + " ✅";
  // }
  // return <li>{itemContent}</li>;

  let itemContent: string | React.ReactElement = name;
  if (isPacked) {
    itemContent = (
      <del>
        {name + " ✅"}
      </del>
    );
  }
  return <li>{itemContent}</li>;
}

function PackingList() {
  return (
    <section>
      <h1>Sally Ride&apos;s Packing List</h1>
      <ul>
        <Item name="Space suit" isPacked={true} />
        <Item name="Helmet with a golden leaf" isPacked={true} />
        <Item name="Photo of Tam" isPacked={false} />
      </ul>
    </section>
  );
}

export default function App() {
  return (
    <>
      <PackingList />
      {/* <Gallery /> */}
      {/* <TodoList /> */}
      {/* <Avatar
        person={{
          name: "Katsuko Saruhashi",
          imageId: "YfeOqp2",
        }}
      />
      <Avatar
        person={{
          name: "Aklilu Lemma",
          imageId: "OKS67lh",
        }}
        size={80}
      />
      <Avatar 
        person={{ 
          name: "Lin Lanying", 
          imageId: "1bX5QH6",
        }}
        size={50}
      /> */}
      {/* <Scientist /> */}
      {/* <h1>To Do List for {formatDate(today)}</h1> */}
      {/* <Profile spread="wau..." /> */}
    </>
  );
}

// interface ProfileProps {
//   spread: string;
// }

// function Profile(props: ProfileProps) {
//   return (
//     <Card>
//       <Avatar 
//         {...props}  
//         person={{ 
//           name: "Aklilu Lemma", 
//           imageId: "OKS67lh", 
//         }} 
//       />
//     </Card>
//   );
// }

// function Card(props: { children: React.ReactNode }) {
//   console.log({ props });
//   return (
//     <div style={{ backgroundColor: "black", padding: 10 }}>
//       {props.children}
//     </div>
//   );
// }