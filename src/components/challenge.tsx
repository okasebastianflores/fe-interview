import { Button } from "./ui/button";

export function Challenge() {
  return (
    <div className="flex flex-col gap-8 max-w-7xl mx-auto p-8">
      <h1 className="text-4xl font-bold text-center">Where are you from?</h1>
      <section className="flex flex-col gap-4 w-full">
        <h2>Select your region, province and district:</h2>
      </section>
      <div className="flex gap-4 self-center">
        <Button>Submit</Button>
        <Button className="w-fit self-center bg-white text-primary border border-primary hover:bg-primary/10">
          Reset
        </Button>
      </div>
      <p className="text-center">Given address:</p>
    </div>
  );
}
