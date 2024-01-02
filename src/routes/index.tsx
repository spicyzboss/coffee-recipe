import { component$ } from "@builder.io/qwik";
import { Link, type DocumentHead } from "@builder.io/qwik-city";

export default component$(() => {
  return (
    <div class="flex h-[100dvh] flex-col items-center justify-center">
      <Link
        class="rounded-xl bg-slate-100 p-4 text-2xl font-bold hover:bg-blue-100"
        href="/drink"
      >
        Drink Recipes
      </Link>
    </div>
  );
});

export const head: DocumentHead = {
  title: "Coffee Recipe",
  meta: [
    {
      name: "description",
      content: "Line I love coffee special guest recipes",
    },
    {
      name: "og:title",
      content: "Coffee Recipe",
    },
    {
      name: "og:description",
      content: "Line I love coffee special guest recipes",
    },
  ],
};
