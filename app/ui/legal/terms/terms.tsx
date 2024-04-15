"use client";

import Link from "next/link";

export function TermsPage() {
  return (
    <section className="p-8">
      <div className="mx-auto max-w-screen-md text-justify">
        <p className="font-normal">
          Welcome to {""}
          <Link href="https://www.abcfoundationconnect.com/">
            abcfoundationconnect.com
          </Link>{" "}
          {""}
          (hereinafter referred to as the &quote;Website&quote;), owned and
          operated by Advocacy for Better Communities Foundation (ABC
          Foundation). By accessing or using this Website, you agree to be bound
          by the following terms and conditions:
        </p>
        <br />
        <h3 className="font-bold"> Disclaimer:</h3>
        <br />
        <p className="font-normal">
          The content provided on this Website is for general informational
          purposes only. ABC Foundation makes no representations or warranties
          of any kind, express or implied, about the completeness, accuracy,
          reliability, suitability, or availability of the information,
          products, services, or related graphics contained on the Website for
          any purpose. Any reliance you place on such information is therefore
          strictly at your own risk.
        </p>

        <br />
        <p className="font-bold">Copyright:</p>
        <br />
        <p className="font-normal">
          Unless otherwise stated, ABC Foundation owns the intellectual property
          rights for all material on
          <Link href="https://www.abcfoundationconnect.com/">
            abcfoundationconnect.com
          </Link>
          . All intellectual property rights are reserved. You may view and/or
          print pages from the Website for your own personal use subject to
          restrictions set in these terms and conditions.
        </p>
        <br />
        <p className="font-bold">License:</p>
        <br />
        <p className="font-normal">
          By posting or submitting any content to the Website, you grant ABC
          Foundation a non-exclusive, royalty-free, perpetual, irrevocable, and
          fully sublicensable right to use, reproduce, modify, adapt, publish,
          translate, create derivative works from, distribute, and display such
          content throughout the world in any media.
        </p>
        <br />
        <p className="font-bold">Limitation of Warranties and Disclaimer:</p>
        <br />
        <p className="font-normal ">
          The Website is provided &quot;as is&quot; without any representations
          or warranties, express or implied. ABC Foundation makes no
          representations or warranties in relation to the Website or the
          information and materials provided on the Website. ABC Foundation does
          not warrant that the Website will be constantly available or available
          at all.
        </p>
        <p className=" mt-10  text-bold">Confidentiality:</p>
        <br />
        <p className="font-normal ">
          ABC Foundation does not guarantee the confidentiality of any
          communication or material transmitted to or from the Website. Any
          information or material you transmit to or from the Website will be
          considered non-confidential and non-proprietary.
        </p>
        <p className=" mt-10  text-bold">Computer Viruses:</p>
        <br />
        <p className="font-normal ">
          ABC Foundation does not warrant that the Website or any content,
          service or feature of the Website will be uninterrupted or error-free,
          that defects will be corrected, or that the Website or the server that
          makes it available are free of viruses or other harmful components.
        </p>
        <p className=" mt-10  text-bold">Links to Other Sites:</p>
        <br />
        <p className="font-normal ">
          <br />
          The Website may contain links to third-party websites or services that
          are not owned or controlled by ABC Foundation. ABC Foundation has no
          control over, and assumes no responsibility for, the content, privacy
          policies, or practices of any third-party websites or services. You
          further acknowledge and agree that ABC Foundation shall not be
          responsible or liable, directly or indirectly, for any damage or loss
          caused or alleged to be caused by or in connection with use of or
          reliance on any such content, goods, or services available on or
          through any such websites or services.
          <br />
          By using this Website, you signify your acceptance of these terms and
          conditions. If you do not agree to these terms, please do not use our
          Website. ABC Foundation reserves the right to modify these terms and
          conditions at any time without prior notice. It is your responsibility
          to review these terms and conditions periodically for any changes.
          Your continued use of the Website following the posting of changes
          will constitute your acceptance of such changes.
        </p>
        <p className=" mt-10  text-bold text-ab">
          <Link
            href="https://www.abcfoundationconnect.com/"
            className="text-abcf"
          >
            abcfoudnationconnect.com
          </Link>{" "}
          is the property of Advocacy for Better Communities Foundation
        </p>
      </div>
    </section>
  );
}

export default TermsPage;
