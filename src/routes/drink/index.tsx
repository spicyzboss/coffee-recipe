import { component$ } from "@builder.io/qwik";
import { Link } from "@builder.io/qwik-city";
import drinks from "~/data/drinks.json";

export default component$(() => {
  const uniqueCustomers = [
    ...new Map(drinks.map((v) => [v.customerId, v])).values(),
  ];

  return (
    <div class="flex min-h-[100dvh] flex-col items-center justify-center gap-4 p-4">
      <p class="text-4xl font-bold mb-8">สูตรกาแฟลูกค้าประจำ (Special Guest)</p>
      {uniqueCustomers.map(({ customerId, customer }) => (
        <Link
          key={customerId}
          class="group flex w-full max-w-lg justify-center gap-2 rounded-xl bg-slate-100 p-4 text-2xl font-bold hover:bg-orange-100"
          href={`/drink/${customerId}`}
        >
          <p class="hidden group-hover:block">🪿</p>
          <p>{customer}</p>
          <p class="hidden group-hover:block">🪿</p>
        </Link>
      ))}
    </div>
  );
});