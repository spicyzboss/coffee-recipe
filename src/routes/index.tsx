import { component$ } from "@builder.io/qwik";
import { Link, type DocumentHead } from "@builder.io/qwik-city";

export default component$(() => {
  return (
    <div class="h-[100dvh] flex justify-center flex-col items-center">
      <Link class="p-4 rounded-xl bg-slate-100 text-2xl font-bold hover:bg-blue-100" href="/drink">Drink Recipes</Link>
    </div>
  );
});

export const head: DocumentHead = {
  title: "Coffee Recipe",
  meta: [
    {
      name: "description",
      content: "Qwik site description",
    },
  ],
};
