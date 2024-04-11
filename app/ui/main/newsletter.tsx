"use client";

export function NewsLetter1() {
  return (
      <div className=" mx-auto flex space-y-5 w-fit   flex-col !items-center
       justify-center rounded-2xl bg-white px-6 py-16">
        <h3 className="text-3xl font-semibold">Stay informed and empowered </h3>
        <p className="w-80 text-center">Register now to receive periodic newsletter and stay updated 
          on our latest initiatives and advocacy records. </p>
        <div className="mt-2 flex w-full flex-col gap-3 md:w-fit md:flex-row">
        <input type="email" placeholder="example@email.com" className="text-center border w-52 rounded-md
         outline-none"/>
        <button className="rounded-md bg-[#B49712] text-white py-3 px-10">Subscribe</button> 
        </div>
    </div>
  );
}
export default NewsLetter1;
