import { component$ } from "@builder.io/qwik";
import customers from "~/data/common.json";

export default component$(() => {
  const uniqueCustomers = [
    ...new Map(customers.map((v) => [v.customerId, v])).values(),
  ];

  return (
    <div class="flex min-h-[100dvh] flex-col items-center justify-center gap-4 p-4">
      {uniqueCustomers.map(({ customerId, customer }) => (
        <a
          key={customerId}
          class="group flex gap-2 rounded-xl bg-slate-100 p-4 text-2xl font-bold hover:bg-orange-100"
          href={`/customer/${customerId}`}
        >
          <p class="hidden group-hover:block">🪿</p>
          <p>{customer}</p>
          <p class="hidden group-hover:block">🪿</p>
        </a>
      ))}
    </div>
  );
});
