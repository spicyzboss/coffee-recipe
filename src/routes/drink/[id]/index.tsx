import { component$ } from "@builder.io/qwik";
import { Link, useLocation } from "@builder.io/qwik-city";
import drinks from "~/data/drinks.json";

export default component$(() => {
  const { params } = useLocation();
  const customer = drinks.filter((c) => c.customerId.toString() === params.id);

  return (
    <div class="flex min-h-[100dvh] flex-col items-center justify-center gap-4 p-4">
      <p class="text-2xl font-bold">{customer[0].customer}</p>
      <div class="grid grid-cols-1 gap-4 lg:grid-cols-4">
        {customer.map((drink) => (
          <div
            key={drink.name}
            class="rounded-xl bg-slate-100 p-4 hover:bg-blue-100"
          >
            <p class="text-center font-bold">{drink.name}</p>
            <p>แก้ว: {drink.glass.name}</p>
            {drink.glass.size && <p>ขนาด: {drink.glass.size}</p>}
            {drink.ice && <p>น้ำแข็ง: {drink.ice}</p>}
            {drink.tea && <p>ชา: {drink.tea}</p>}
            {drink.shot !== 0 && <p>ช็อต: {drink.shot}</p>}
            {drink.fill.name && <p>เติม: {drink.fill.name}</p>}
            {drink.fill.temperature !== 0 && (
              <p>อุณหภูมิ: {drink.fill.temperature}</p>
            )}
            {drink.fill.volume && <p>ปริมาตร: {drink.fill.volume}</p>}
            {drink.syrup.name && <p>ไซรัป: {drink.syrup.name}</p>}
            {drink.syrup.pump !== 0 && <p>ไซรัปจำนวน: {drink.syrup.pump}</p>}
            {drink.cream?.name && (
              <p>
                วิปครีม: {drink.cream.name}
                {drink.cream.volume && ` ปริมาณ ${drink.cream.volume}`}
              </p>
            )}
            {drink.topping && <p>ท็อปปิ้ง: {drink.topping}</p>}
          </div>
        ))}
      </div>
      <Link
        href="/drink"
        class="rounded-xl text-xl font-bold decoration-blue-500 decoration-wavy hover:underline"
      >
        Back to customers
      </Link>
    </div>
  );
});
