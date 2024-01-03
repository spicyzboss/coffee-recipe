import { component$ } from "@builder.io/qwik";
import { type DocumentHead, Link } from "@builder.io/qwik-city";
import drinks from "~/data/drinks.json";

export default component$(() => {
  const uniqueCustomers = [
    ...new Map(drinks.map((v) => [v.customerId, v])).values(),
  ];

  return (
    <div class="flex min-h-[100dvh] flex-col items-center justify-center gap-4 p-4">
      <p class="mb-8 text-4xl font-bold">สูตรกาแฟลูกค้าประจำ (Special Guest)</p>
      <div class="grid grid-cols-1 gap-4 lg:grid-cols-4">
        {uniqueCustomers.map(({ customerId, customer }) => (
          <Link
            key={customerId}
            class="group flex w-full max-w-lg justify-center gap-2 rounded-xl bg-slate-100 p-4 text-2xl font-bold hover:bg-orange-100"
            href={`/drink/${customerId}`}
          >
            {customer}
          </Link>
        ))}
      </div>
      <Link
        href="/"
        class="rounded-xl text-xl font-bold decoration-blue-500 decoration-wavy hover:underline"
      >
        Back to main
      </Link>
    </div>
  );
});

export const head: DocumentHead = {
  title: "Drink - Coffee Recipe",
  meta: [
    {
      name: "description",
      content: "Line I love coffee special guest drink recipes",
    },
    {
      name: "og:title",
      content: "Drink - Coffee Recipe",
    },
    {
      name: "og:description",
      content: "Line I love coffee special guest drink recipes",
    },
  ],
};
