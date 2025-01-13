"use client";
// import { Gallery } from "./gallery";

import { useState } from "react";

// import { Fragment } from "react";

// import { getImageUrl } from "@/utils/utils";
// import { Fragment } from "react";

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

// interface ItemProps {
//   name: string
//   isPacked: boolean
// }

// function Item({ name, isPacked }: ItemProps) {
//   // if (isPacked) {
//   //   return <li>{name} ✅</li>;
//   // }
//   // if (isPacked) {
//   //   return null;
//   // }
//   // return <li>{name}</li>;
//   // return (
//   //   <li>
//   //     {isPacked ? (
//   //       <del>{name + " ✅"}</del>
//   //     ): (
//   //       name
//   //     )}
//   //   </li>
//   // );

//   // return (
//   //   <li>
//   //     {name} {isPacked && "✅"}
//   //   </li>
//   // );

//   // let itemContent = name;
//   // if (isPacked) {
//   //   itemContent = name + " ✅";
//   // }
//   // return <li>{itemContent}</li>;

//   let itemContent: string | React.ReactElement = name;
//   if (isPacked) {
//     itemContent = (
//       <del>
//         {name + " ✅"}
//       </del>
//     );
//   }
//   return <li>{itemContent}</li>;
// }

// function PackingList() {
//   return (
//     <section>
//       <h1>Sally Ride&apos;s Packing List</h1>
//       <ul>
//         <Item name="Space suit" isPacked={true} />
//         <Item name="Helmet with a golden leaf" isPacked={true} />
//         <Item name="Photo of Tam" isPacked={false} />
//       </ul>
//     </section>
//   );
// }

// const people = [
//   { 
//     id: 0,
//     name: "Creola Katherine Johnson: mathematician",
//     profession: "mathematician",
//     accomplishment: "spaceflight calculations",
//     imageId: "MK3eW3A"
//   },
//   { 
//     id: 1,
//     name: "Mario José Molina-Pasquel Henríquez: chemist",
//     profession: "chemist",
//     accomplishment: "discovery of Arctic ozone hole",
//     imageId: "mynHUSa"
//   },
//   {
//     id: 2,
//     name: "Mohammad Abdus Salam: physicist",
//     profession: "physicist",
//     accomplishment: "electromagnetism theory",
//     imageId: "bE7W1ji"
//   },
//   {
//     id: 3,
//     name: "Percy Lavon Julian: chemist",
//     profession: "chemist",
//     accomplishment: "pioneering cortisone drugs, steroids and birth control pills",
//     imageId: "IOjWm71"
//   },
//   {
//     id: 4,
//     name: "Subrahmanyan Chandrasekhar: astrophysicist",
//     profession: "astrophysicist",
//     accomplishment: "white dwarf star mass calculations",
//     imageId: "lrWQx8l"
//   },
// ];

// const listItems = people.map(person => 
//   <Fragment key={person.id}>
//     <h1>{person.name}</h1>
//     <p>{person.profession}</p>
//   </Fragment>  
// )

// const chemists = people.filter(person =>
//   person.profession === "chemist"
// );

// const listItems = chemists.map(person => 
//   <li>
//     <img
//       src={getImageUrl(person)}
//       alt={person.name}
//     />
//     <p>
//       <b>{person.name}:</b>
//       {" " + person.profession + " "}
//       known for {person.accomplishment}
//     </p>
//   </li>  
// );

// function List() {
//   // const listItems = people.map(person => 
//   //   <li>{person.name}</li>
//   // );
//   const chemists = people.filter(person =>
//     person.profession === "chemist"
//   );
//   const listItems = chemists.map(person =>
//     <li key={person.id}>
//        <img
//         src={getImageUrl(person)}
//         alt={person.name}
//       />
//       <p>
//         <b>{person.name}:</b>
//         {" " + person.profession + " "}
//         known for {person.accomplishment}
//       </p>
//     </li>  
//   );
//   return <ul>{listItems}</ul>;
// }

// function double(number: number): number {
//   return 2 * number;
// }

// const y = double(3);
// console.log({ y });

// const poem = {
//   lines: [
//     "I write, erase, rewrite",
//     "Erase again, and then",
//     "A poppy blooms.",
//   ]
// };

// function Poem() {
//   const output: React.ReactElement[] = [];

//   poem.lines.forEach((poem, index) => {
//     output.push(
//       <hr 
//         key={index + "-separator"} 
//         style={{ 
//           border: "1px dashed #45c3d8",
//           margin: "0 320px 0 0",
//         }}   
//       />
//     );
//     output.push(
//       <p key={index + "-text"}>{poem}</p>
//     );
//   });

//   output.shift();

//   return (
//     <article>
//       {output}
//       {/* {poem.lines.map((poem, index) => (
//         <Fragment key={index}>
//           {Boolean(index) && 
//             <hr 
//               style={{ 
//                 border: "1px dashed #45c3d8",
//                 margin: "0 320px 0 0",
//               }} 
//             />
//           }
//           <p>{poem}</p>
//         </Fragment>
//       ))} */}
//     </article>
//   );
// }

// function Recipe({ drinkers }: { drinkers: number}) {
//   return (
//     <ol>    
//       <li>Boil {drinkers} cups of water.</li>
//       <li>Add {drinkers} spoons of tea and {0.5 * drinkers} spoons of spice.</li>
//       <li>Add {0.5 * drinkers} cups of milk to boil and sugar to taste.</li>
//     </ol>
//   );
// }

// let guest = 0;
// function Cup() {
// function Cup({ guest }: { guest: number}) {
//   // Bad: changing a preexisting variable!
//   // guest = guest + 1;
//   return <h2>Tea cup for guest #{guest}</h2>
// }

// function TeaGathering() {
//   const cups = [];
//   for (let i = 1; i <= 12; i++) {
//     cups.push(<Cup key={i} guest={i} />)
//   }
//   return cups;
// }

// function TeaSet() {
//   return (
//     <>
//       <Cup guest={1} />
//       <Cup guest={2} />
//       <Cup guest={3} />
//     </>
//   );
// }
const inspirations = [
  {type: 'quote', value: "Don’t let yesterday take up too much of today.” — Will Rogers"},
  {type: 'color', value: "#B73636"},
  {type: 'quote', value: "Ambition is putting a ladder against the sky."},
  {type: 'color', value: "#256266"},
  {type: 'quote', value: "A joy that's shared is a joy made double."},
  {type: 'color', value: "#F9F2B4"},
];

function Copyright({ year }: { year: number }) {
  return (
    <p className="text-sm">©️ {year}</p>
  );
}

interface FancyTextProps {
  title?: boolean
  text: string
}

function FancyText({ title, text }: FancyTextProps) {
  return title
    ? <h1 className="text-lg text-[#007AA3] underline">{text}</h1>
    : <h3 className="text-lg italic">{text}</h3>;
}

function Color({ value }: { value: string }) {
  return (
    <div
      style={{ 
        height: 100,
        width: 100,
        margin: 8,
        backgroundColor: value
      }}
    />
  );
}

function InspirationGenerator({ 
  children 
}: { 
  children: React.ReactNode
}) {
  const [index, setIndex] = useState(0);
  const inspiration = inspirations[index];
  function next() {
    setIndex((index + 1) % inspirations.length);
  }

  return (
    <>
      <p>Your inspirational quote is:</p>
      {inspiration.type === "quote"
        ? <FancyText text={inspiration.value} />
        : <Color value={inspiration.value} />
      }
      
      <button onClick={next}>Inspire me again</button>
      {children}
    </>
  );
}

export default function App() {
  return (
    <>
      <FancyText title text="Get Inspired App" />
      <InspirationGenerator>
        <Copyright year={2025} />
      </InspirationGenerator>
      {/* <TeaGathering /> */}
      {/* <TeaSet /> */}
      {/* <section>
        <h1>Spiced chai Recipe</h1>
        <h2>For two</h2>
        <Recipe drinkers={2} />
        <h2>For a gathering</h2>
        <Recipe drinkers={4} />
      </section> */}
      {/* <Poem /> */}
      {/* <List /> */}
      {/* <PackingList /> */}
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