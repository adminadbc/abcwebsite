import { Button, Typography } from "@material-tailwind/react";

export function WidgetsExample6() {
  return (
    <section className="m-10">
      <div className="rounded-xl bg-[url('/gradientone.png')] bg-cover bg-center p-10">
        <Typography variant="small" color="white" className="font-bold mb-2">
          Upcoming Events
        </Typography>
        <Typography variant="h3" color="white">
          Legal Summit: Shaping Tomorrow
        </Typography>
        <Typography color="white" className="mt-2 mb-6 !text-base">
          Prepare to be part of dynamic conversations that will redefine the
          boundaries.
        </Typography>
        <Button color="gray" className="flex-shrink-0">
          Book a call
        </Button>
      </div>
    </section>
  );
}
export default WidgetsExample6;
