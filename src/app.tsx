import { useState } from "preact/hooks";
import "./app.css";

export function App() {
  const [count, setCount] = useState(0);

  function handleOnChange(event: Event) {
    const target = event.target as HTMLInputElement;

    setCount(parseInt(target?.value));
  }

  function handleCreate() {
    parent.postMessage(
      { pluginMessage: { type: "create-rectangles", count } },
      "*",
    );
  }

  function handleCancel() {
    parent.postMessage({ pluginMessage: { type: "cancel" } }, "*");
  }

  return (
    <>
      <h2>Rectangle Creator</h2>
      <p>
        Count: <input id="count" value={count} onChange={handleOnChange} />
      </p>
      <button id="create" onClick={handleCreate}>
        Create
      </button>
      <button id="cancel" onClick={handleCancel}>
        Cancel
      </button>
    </>
  );
}
