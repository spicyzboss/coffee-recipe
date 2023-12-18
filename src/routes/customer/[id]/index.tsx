import { component$ } from "@builder.io/qwik";
import { useLocation } from "@builder.io/qwik-city";
import customers from "~/data/common.json";

export default component$(() => {
  const { params } = useLocation();
  const customer = customers.filter(
    (c) => c.customerId.toString() === params.id,
  );

  return (
    <div class="flex min-h-[100dvh] flex-col items-center justify-center gap-4 p-4">
      <p class="text-2xl font-bold">{customer[0].customer}</p>
      <div class="grid grid-cols-1 gap-4 lg:grid-cols-4">
        {customer.map((drink) => (
          <div key={drink.name} class="rounded-xl bg-slate-100 p-4">
            <p class="text-center font-bold">{drink.name}</p>
            <p>แก้ว: {drink.glass}</p>
            <p>ขนาด: {drink.size}</p>
            {drink.shot !== 0 && <p>ช็อต: {drink.shot}</p>}
            {drink.fill && <p>เติม: {drink.fill}</p>}
            {drink.temperature !== 0 && <p>อุณหภูมิ: {drink.temperature}</p>}
            {drink.volume && <p>ปริมาตร: {drink.volume}</p>}
            {drink.syrup && <p>ไซรัป: {drink.syrup}{drink.pump !== 0 && ` ${drink.pump} ปั๊ม`}</p>}
            
          </div>
        ))}
      </div>
      <a
        href="/customer"
        class="rounded-xl font-bold hover:underline decoration-wavy"
      >
        Back to customers
      </a>
    </div>
  );
});
