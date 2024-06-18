// import { useState } from "react";
// import "../src/index.css";

// const App = () => {
//   const [value, setValue] = useState("");
//   const [error, setError] = useState("");
//   const [chatHistory, setChatHistory] = useState([]);
  
//   const surpriseOptions = [
//     "Who won the latest Novel Peace Prize?",
//     "Where does pizza come from?",
//     "What is the height of Mount Everest?",
//   ];

//   const clear =() =>{
//     setValue("");
//     setError("");
//     setChatHistory([]);
//   }
//   const surprise = () => {
//     const randomValue =
//       surpriseOptions[Math.floor(Math.random() * surpriseOptions.length)];
//     setValue(randomValue);
//   };

//   const getResponse = async () => {
//     if (!value) {
//       setError("Error! Please ask a question");
//       return;
//     }
//     try {
//       const options = {
//         method: "POST",
//         body: JSON.stringify({
//           history: chatHistory,
//           message: value,
//         }),
//         headers: {
//           "Content-Type": "application/json",
//         },
//       };
//       const response = await fetch("http://localhost:8000/chat", options);
//       const data = await response.text();
//       console.log(data);
//       setChatHistory((oldChatHistory) => [
//         ...oldChatHistory,
//         { role: "user", parts: value },
//         {
//           role: "model",
//           parts: data,
//         },
//       ]);
//       setValue("");
//     } catch (error) {
//       setError("Error! Something went wrong");
//     }
//   };
//   return (
//     <div className="app">
//       <p>
//         What do you want to know?
//         <button className="surprise" onClick={surprise} disabled={!chatHistory}>
//           {" "}
//           Surprise Me{" "}
//         </button>
//       </p>
//       <div className="input-container">
//         <input
//           type="text"
//           value={value}
//           placeholder="Enter a topic"
//           onChange={(e) => setValue(e.target.value)}
//         />
//         {!error && <button onClick={getResponse}>Ask Me</button>}
//         {error && <button onClick={clear}>Clear</button>}
//       </div>
//       {error && <p className="error">{error}</p>}
//       <div className="search-results">
//         {chatHistory.map((chatItem, _index) => (
//           <div key={_index}>
//             <p className="answer">
//               {chatItem.role}:{chatItem.parts}
//             </p>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default App;


// import { useState } from "react";
// import "../src/index.css";

// const App = () => {
//   const [value, setValue] = useState("");
//   const [error, setError] = useState("");
//   const [chatHistory, setChatHistory] = useState([]);

//   const surpriseOptions = [
//     "Who won the latest Novel Peace Prize?",
//     "Where does pizza come from?",
//     "What is the height of Mount Everest?",
//   ];

//   const clear = () => {
//     setValue("");
//     setError("");
//     setChatHistory([]);
//   };

//   const surprise = () => {
//     const randomValue =
//       surpriseOptions[Math.floor(Math.random() * surpriseOptions.length)];
//     setValue(randomValue);
//   };

//   const getResponse = async () => {
//     if (!value) {
//       setError("Error! Please ask a question");
//       return;
//     }
//     try {
//       const options = {
//         method: 'POST',
//         body: JSON.stringify({
//           history: chatHistory,
//           message: value
//         }),
//         headers: {
//           "Content-Type": "application/json",
//         }
//       };
//       const response = await fetch("http://localhost:8000/gemini", options);
//       const data = await response.text();

//       setChatHistory((oldChatHistory) => [
//         ...oldChatHistory,
//         { role: "user", parts: value },
//         {
//           role: "model",
//           parts: data,
//         },
//       ])
//       setValue("");
//     } catch (error) {
//       setError("Error! Something went wrong");
//     }
//   };

//   return (
//     <div className="app">
//       <p>
//         What do you want to know?
//         <button className="surprise" onClick={surprise} disabled={!value}>
//           {" "}
//           Surprise Me{" "}
//         </button>
//       </p>
//       <div className="input-container">
//         <input
//           type="text"
//           value={value}
//           placeholder="Enter a topic"
//           onChange={(e) => {
//             setValue(e.target.value);
//             if (error) setError("");
//           }}
//         />
//         {!error && <button onClick={getResponse}>Ask Me</button>}
//         {error && <button onClick={clear}>Clear</button>}
//       </div>
//       {error && <p className="error">{error}</p>}
//       <div className="search-results">
//         {chatHistory.map((chatItem, _index) => (
//           <div key={_index}>
//             <p className="answer">
//               {chatItem.role}:{chatItem.parts}
//             </p>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default App;


import { useState } from "react";
import "../src/index.css";

const App = () => {
  const [value, setValue] = useState("");
  const [error, setError] = useState("");
  const [chatHistory, setChatHistory] = useState([]);

  const surpriseOptions = [
    "Who won the latest Nobel Peace Prize?",
    "Where does pizza come from?",
    "What is the height of Mount Everest?",
  ];

  const clear = () => {
    setValue("");
    setError("");
    setChatHistory([]);
  };

  const surprise = () => {
    const randomValue =
      surpriseOptions[Math.floor(Math.random() * surpriseOptions.length)];
    setValue(randomValue);
  };

  const getResponse = async () => {
    if (!value) {
      setError("Error! Please ask a question");
      return;
    }
    try {
      const options = {
        method: 'POST',
        body: JSON.stringify({
          history: chatHistory,
          message: value
        }),
        headers: {
          "Content-Type": "application/json",
        }
      };
      const response = await fetch("http://localhost:8000/gemini", options);
      const data = await response.text();

      setChatHistory((oldChatHistory) => [
        ...oldChatHistory,
        { role: "user", parts: value },
        { role: "model", parts: data }
      ]);
      setValue("");
    } catch (error) {
      setError("Error! Something went wrong");
    }
  };

  return (
    <div className="app">
      <p>
        What do you want to know?
        <button className="surprise" onClick={surprise}>
          Surprise Me
        </button>
      </p>
      <div className="input-container">
        <input
          type="text"
          value={value}
          placeholder="Enter a topic"
          onChange={(e) => {
            setValue(e.target.value);
            if (error) setError("");
          }}
        />
        <button onClick={getResponse}>Ask Me</button>
        {error && <button onClick={clear}>Clear</button>}
      </div>
      {error && <p className="error">{error}</p>}
      <div className="search-results">
        {chatHistory.map((chatItem, index) => (
          <div key={index}>
            <p className="answer">
              {chatItem.role}: {chatItem.parts}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;

