import { Button } from "../../components/ui/button";

export default function Home() {
  return (
    <div className="w-full h-full flex justify-center items-center bg-slate-200">
      <div className="flex flex-col gap-2 bg-slate-300 p-20 rounded-md">
        <input className="rounded-md p-2" placeholder="Full Name" type="text" />
        <input className="rounded-md p-2" placeholder="Number" type="text" />
        <Button>Next</Button>
      </div>
    </div>
  );
}
