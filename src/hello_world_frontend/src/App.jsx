import { useState } from 'react';
import { hello_world_backend } from 'declarations/hello_world_backend';

function App() {
  const [greeting, setGreeting] = useState('');
  const [submittedNames, setSubmittedNames] = useState([]);

  // Handle name submission
  function handleSubmit(event) {
    event.preventDefault();
    const name = event.target.elements.name.value;

    // Call the backend greet function
    hello_world_backend.greet(name).then((greeting) => {
      setGreeting(greeting);
    });

    event.target.elements.name.value = ''; // Clear input
    return false;
  }

  // Fetch submitted names
  function handleFetchNames() {
    hello_world_backend.submittedNames().then((names) => {
      setSubmittedNames(names);
    });
  }

  return (
    <main>
      <img src="/logo2.svg" alt="DFINITY logo" />
      <br />
      <br />
      <form action="#" onSubmit={handleSubmit}>
        <label htmlFor="name">Enter your name: &nbsp;</label>
        <input id="name" alt="Name" type="text" />
        <button type="submit">Click Me!</button>
      </form>
      <section id="greeting">{greeting}</section>
      <br />
      <button onClick={handleFetchNames}>Show Submitted Names</button>
      <section id="submitted-names">
        <h3>Submitted Names:</h3>
        <ul>
          {submittedNames.map((name, index) => (
            <li key={index}>{name}</li>
          ))}
        </ul>
      </section>
    </main>
  );
}

export default App;
