"use client";

import { Typography } from "@material-tailwind/react";
import Image from "next/image";
import { TbTopologyStarRing3 } from "react-icons/tb";

export function BlogSection14() {
  return (
    <section className="flex flex-col items-center lg:py-28 py-10 px-8">
      <h1 className="text-4xl lg:text-5xl mb-5">Ritu&apos;s Biography</h1>
      <div className="relative flex py-5 w-1/2 mb-5 mx-auto items-center">
        <div className="flex-grow border-t-4 border-abcf w-96"></div>
        <p className="mx-5  text-center">
          <TbTopologyStarRing3 />
        </p>
        <div className="flex-grow border-t-4 border-abcf w-96"></div>
      </div>
      <p className="mb-10 text-xl">
        &quot;Advancing Justice, Navigating Legal Rights - Empowering
        Communities, Transforming Lives.&quot;
      </p>
      <div className="inline m-20 container  my-auto ">
        <Image
          src="/angie.jpeg"
          alt="blog"
          className="float-left mr-10 mb-5 rounded-lg shadow-2xl lg:max-w-[26rem] lg:min-h-[26rem]"
          width={500}
          height={500}
        />

        <div className="mb-12">
          <Typography className="mb-8 font-normal">
            I am a dedicated advocate for social justice and community
            empowerment, driven by a lifelong commitment to making a difference.
            With a diverse background spanning various industries, I bring a
            unique blend of skills and experiences to my role as the Founder and
            Director of Advocacy for Better Communities Foundation (ABC
            Foundation) in Calgary.
          </Typography>

          <Typography className="mb-8 font-normal">
            With a proven track record of leadership and innovation, I am adept
            at spearheading advocacy initiatives, forging strategic
            partnerships, and fostering community engagement. My professional
            journey is marked by a deep-seated passion for promoting access to
            justice, amplifying marginalized voices, and advocating for fair
            outcomes for all members of society.
          </Typography>

          <Typography className="mb-6 font-normal">
            As the visionary behind ABC Foundation, I recognized the unmet needs
            in legal representation and advocacy services, particularly for
            those facing socio-economic challenges and systemic barriers. With
            unwavering determination, I established the foundation to address
            these gaps, building a robust network of legal professionals and
            community stakeholders dedicated to the cause.
          </Typography>
          <Typography className="mb-6 font-normal">
            My commitment to empowerment extends beyond advocacy alone. I have
            developed and implemented educational programs and resources aimed
            at increasing legal awareness and empowering individuals to navigate
            the legal system effectively. My focus on providing resources and
            services to low socio-economic status and marginalized individuals
            underscores my dedication to creating positive change at the
            grassroots level.
          </Typography>
          <Typography className="mb-6 font-normal">
            Prior to founding ABC Foundation, I held various roles in real
            estate, oil & gas, finance, automotive, and construction sectors,
            honing my skills in project management, client relations, and
            organizational efficiency. My diverse background has equipped me
            with a keen understanding of community needs and a holistic approach
            to problem-solving.
          </Typography>
          <Typography className="mb-6 font-normal">
            My academic achievements are equally impressive, with ongoing
            pursuit of a Juris Doctorate degree at the University of Alberta
            Faculty of Law, complemented by a Bachelor of Arts in Criminal
            Justice from Mount Royal University. My academic excellence has been
            recognized through numerous awards and scholarships, underscoring my
            commitment to academic and professional excellence.
          </Typography>
          <Typography className="mb-6 font-normal">
            Outside of my professional endeavors, I am deeply involved in
            volunteer work, dedicating my time to various community outreach and
            engagement initiatives. I am a staunch advocate for youth
            involvement, healthcare access, and social welfare, actively
            contributing to causes that align with my values of compassion,
            integrity, and equity.In my spare time, I enjoy giving back to the
            community through blood donations, embodying my belief in the
            importance of collective action and solidarity in creating positive
            social change.
          </Typography>
          <Typography className="mb-6 font-normal">
            As a member of several professional associations and honour
            societies, including the Canadian Bar Association and Golden Key
            International Honour Society, I remain committed to continuous
            learning and collaboration within my field.
          </Typography>
          <Typography className="mb-6 font-normal">
            My tireless dedication, visionary leadership, and unwavering
            commitment to social justice make me a driving force behind the
            mission of Advocacy for Better Communities Foundation. Through my
            work, I strive to build a more equitable and inclusive society,
            where justice is truly accessible to all.
          </Typography>
        </div>
      </div>
    </section>
  );
}

export default BlogSection14;
