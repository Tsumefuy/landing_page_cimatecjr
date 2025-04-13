import Image from "next/image";

export function BoxModal({ 
  data 
}: {
  data: { id: number; name: string; img: string; description: string }
}) {
  return (
    <div className="h-[275px] w-[300px] bg-neutral-800 p-5 rounded-xl border-2 border-transparent shadow-lg">
      <div className="h-[170px] relative bg-white rounded-xl">
        <Image
          src={data.img}
          alt={data.name}
          fill
          style={{ objectFit: "contain" }}
          className="p-4"
        />
      </div>
      <div className="h-[50px] bg-white rounded-lg mt-2 flex items-center justify-center">
        <p className="text-primary font-bold text-sm">{data.name}</p>
      </div>
    </div>
  );
}
