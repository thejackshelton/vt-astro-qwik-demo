import { component$, useSignal } from "@builder.io/qwik";

export const Input = component$(() => {
  const str = useSignal<string>("");

  return (
    <>
      <input bind:value={str} />
      <p>{str.value}</p>
    </>
  );
});
