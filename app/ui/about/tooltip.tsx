import { Tooltip, Typography } from "@material-tailwind/react";

export function TooltipCustomStyles() {
  return (
    <Tooltip
      placement="bottom"
      className="border border-blue-gray-50 bg-white px-4 py-3 shadow-xl shadow-black/10"
      content={
        <div className="w-80">
          <Typography color="blue-gray" className="font-medium">
            Material Tailwind
          </Typography>
          <Typography
            variant="small"
            color="blue-gray"
            className="font-normal opacity-80"
          >
            My name is Pat Jones, and I proudly hail from Calgary, Alberta. With
            a decade spent living in the USA, I&#x2019ve garnered invaluable
            experiences that enhance both my professional and personal
            interactions. Bringing a wealth of diverse professional experience
            to the table, I am a strong, articulate, passionate and independent
            woman who seeks to empower others. Beyond my professional pursuits,
            my passion for animals and nature runs deep. I have devoted myself
            to caring for rescued animals and the marginalized, embodying
            kindness and empathy in every interaction, whether with handicapped
            individuals or children and seniors. Family holds immense importance
            to me. I take pride in being a parent to two adult children and a
            grandparent to two beautiful granddaughters residing in the US. I am
            a staunch advocate for diversity, inclusion, equality, and respect
            for all beliefs. Committed to lifelong learning, I am dedicated to
            supporting those less fortunate than myself. I am thrilled at the
            prospect of contributing to the foundation&#x2019s mission, aiming
            to create positive change and provide education and support to those
            in need within our community.
          </Typography>
        </div>
      }
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
        className="h-5 w-5 cursor-pointer text-blue-gray-500"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z"
        />
      </svg>
    </Tooltip>
  );
}
