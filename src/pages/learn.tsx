import AccordianContainer from "@/component/Accordian";
import Footer from "@/component/Footer";
import InfoCheckBox from "@/component/InfoCheckbox/InfoCheckbox";
import { StructuredData } from "@/component/SEO";
import Head from "next/head";
import Link from "next/link";
import Script from "next/script";

const header = [
  {
    title: "How to monetize web stories with google adsense ?",
    description:
      "Connect your site to google adsense, Create display ad,  Copy the data ad client and data ad slot string.",
  },
  {
    title: "Can web stories increase blog view?",
    description:
      "Yes, web stories are given preference in the discovery feature of google search. Add call to action button to your web story to your main blog or article.",
  },
  {
    title: "How to add google analytics in web stories ?",
    description:
      "Sign in to Google analytics. Click on Gear icon with the label Admin. Click on the Create Property. After completing the form about Property details. Recommended that you create a Google Analytics 4 property. Add the g-tab inside the amp story auto analytics component and add the tag as a child of amp story component.",
  },
];

const data = [
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "How to monetize web stories with google adsense ?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Connect your site to google adsense, Create display ad,  Copy the data ad client and data ad slot string.",
        },
      },
      {
        "@type": "Question",
        name: "Can web stories increase blog view?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, web stories are given preference in the discovery feature of google search. Add call to action button to your web story to your main blog or article.",
        },
      },
      {
        "@type": "Question",
        name: "How to add google analytics in web stories ?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Sign in to Google analytics. Click on Gear icon with the label Admin. Click on the Create Property. After completing the form about Property details. Recommended that you create a Google Analytics 4 property. Add the g-tab inside the amp story auto analytics component and add the tag as a child of amp story component.",
        },
      },
    ],
  },
  StructuredData({
    title: "Learn about AMP web stories Search Engine Optimisation or SEO",
    description:
      " Learn the basic of seo of AMP web stories. Tips and tricks to improve the seo of your amp web stories. - Coolhead || Web story",
    image: "https://webstory.coolhead.in/og.jpeg",
    authorName: "Pratik Sharma",
    authorUrl: "https://coolhead.in",
    publisherWebsite: "https://coolhead.in",
    publisherName: "Coolhead",
  }),
];

function Learn() {
  const resources = [
    {
      text: "AMP SEO - Everything you need to know",
      link: "https://www.searchenginejournal.com/amp-seo-everything-you-need-to-know/375931/",
    },
    {
      text: "AMP Search report",
      link: "https://support.google.com/webmasters/answer/7450883?visit_id=638124340102566873-1453760594&rd=1#prioritize_fix_issues",
    },
    {
      text: "AMP Guidelines",
      link: "https://developers.google.com/search/docs/crawling-indexing/amp",
    },
    {
      text: "How to optimize amp stories for google search results",
      link: "https://www.searchenginejournal.com/how-to-optimize-amp-stories-for-google-search-results/348962/",
    },
    {
      text: "Web story Content Policy",
      link: "https://developers.google.com/search/docs/appearance/web-stories-content-policy",
    },
    {
      text: "Web Story SEO ",
      link: "https://blog.amp.dev/2020/02/12/seo-for-amp-stories/",
    },
    {
      text: "AMP Test ",
      link: "https://search.google.com/test/amp",
    },
    {
      text: "Rich Results Test",
      link: "https://search.google.com/test/rich-results",
    },
    {
      text: "Page Speed",
      link: "https://pagespeed.web.dev/",
    },
  ];
  return (
    <>
      <Head>
        <title>
          Learn about AMP web stories Search Engine Optimisation or SEO
        </title>
        <meta title="Learn about AMP web stories Search Engine Optimisation or SEO" />
        <meta
          property="title"
          content="Learn about AMP web stories Search Engine Optimisation or SEO"
        />

        <meta
          property="description"
          content="Learn the basic of seo of AMP web stories. Tips and tricks to improve the seo of your amp web stories. "
        />
        <meta
          property="og:title"
          content="Learn about AMP web stories search engine optimisation or SEO"
        />
        <meta
          property="og:description"
          content="Learn the basic of seo of AMP web stories. Tips and tricks to improve the seo of your amp web stories. - Coolhead || Web story"
        />
        <meta
          property="og:image"
          content="https://webstory.coolhead.in/og.jpeg"
        />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta
          name="twitter:title"
          content="Learn about AMP web stories search engine optimisation or SEO"
        />
        <meta
          name="twitter:description"
          content=" Learn the basic of seo of AMP web stories. Tips and tricks to improve the seo of your amp web stories. - Coolhead || Web story"
        />
        <meta
          name="twitter:image"
          content=" https://webstory.coolhead.in/og.jpeg"
        />
        <meta
          name="twitter:image:alt"
          content="Webstory code generator - no code tool editor "
        />
        <meta property="og:type" content="article" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta property="og:url" content="http://webstory.coolhead.in/learn" />
        <meta name="twitter:creator" content="@biomathcode" />
      </Head>
      <Script
        id="structedData"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(data),
        }}
      />
      <div className="flex center col jc gap-10 inter p-20 m-20">
        <article
          className="flex col gap-10 mt-10"
          style={{
            maxWidth: "600px",
            minWidth: "240px",
            padding: "20px",
          }}
        >
          <h1
            style={{
              fontSize: "36px",
              fontWeight: 300,
            }}
          >
            Learn about AMP web stories Search Engine Optimisation
          </h1>
          <p
            style={{ display: "flex", justifyContent: "flex-end", gap: "10px" }}
          >
            by{" "}
            <a
              href="http://twitter.com/biomathcode"
              target="_blank"
              rel="noreferrer"
            >
              Pratik Sharma
            </a>{" "}
          </p>

          <InfoCheckBox
            size={15}
            icon="success"
            title="For Monitisation"
            description="To enable ads on your webstories, add google adsense to your domain website. Web story should atleast have more than 7 story pages to be enabled for auto-ads."
          />
          <InfoCheckBox
            size={15}
            icon="info"
            title="Structured Data"
            description=" Add schema json to enable rich results for your web stories . You can visit https://search.google.com/test/rich-results
             "
          />
          <InfoCheckBox
            size={15}
            icon="warning"
            title="Dead Page"
            description="Make sure your webstory is not a dead lock without any CTA(external Link). Add CTA link to your main blog article, or your site link. "
          />
          <InfoCheckBox
            size={15}
            icon="danger"
            title="Valid AMP"
            description=" Make sure your amp html is valid. You can visit https://search.google.com/test/amp
             "
          />
          <section>
            <h2
              className="mt-y"
              style={{ fontWeight: "300", margin: "50px 0px" }}
            >
              Watch- Create Your First Web Story
            </h2>
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/2Mej5yNwncQ"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          </section>

          <h2
            className="mt-y"
            style={{ fontWeight: "500", margin: "50px 0px" }}
          >
            Tips To Make Better web stories
          </h2>

          <ul className="flex col gap-20">
            <li>Add Structued data to your webstories.</li>
            <li>
              Make sure there is enough contract between the text and the
              background image. <i>Tip: Add Overlay Effect</i>
            </li>
            <li>Text should be similar to tweets- short and informative.</li>
            <li>
              Add meta data - title, description, og:image, og:title,
              og:description - to get better link preview on social media.
            </li>
            <li>
              Add <b>Call To Action</b> link to your blog, article related to
              your webstory.
            </li>
            <li>
              Add your web stories into the XML sitemap, if you want your web
              stories to appear on Google search results. Also, add canonical
              tags to describe your web stories in an explicitly detailed way
            </li>
            <li>
              Authentic Stories grab more audience attention as compared to
              others. Be clear and write something you are passionate about. To
              rank well on Google, you need to nurture your brand by building
              its experience, expertise, authority, and trustworthiness
              (E-E-A-T). Hence being authentic will make your Web Stories more
              amazing.
            </li>
          </ul>
          <h3>Recommended Articles</h3>
          <p
            style={{
              border: "1px solid #444",
              borderRadius: "4px",
              padding: "20px",
              margin: "20px 0px",
            }}
          >
            Read to learn about monetization{" "}
            <Link href="/how-to-monetize-web-story">
              How to monetize web Stories ?
            </Link>
          </p>
          <p
            style={{
              border: "1px solid #444",
              borderRadius: "4px",
              padding: "20px",
              margin: "20px 0px",
            }}
          >
            Read to learn about analytics{" "}
            <Link href="/how-to-add-google-analytics-in-web-stories">
              How to add google analytics in web stories ?
            </Link>
          </p>

          <p
            style={{
              border: "1px solid #444",
              borderRadius: "4px",
              padding: "20px",
              margin: "20px 0px",
            }}
          >
            Tips for SEO{" "}
            <Link href="/seo-tips-for-google-web-stories">
              10 SEO Tips to increase views google web stories ?
            </Link>
          </p>

          <h3>Resource to learn more</h3>
          <ul className="flex col gap-10">
            {resources.map((el) => {
              return (
                <div className="flex " key={el.text}>
                  <a href={el.link}>{el.text}</a>
                </div>
              );
            })}
          </ul>

          <h4>Frequently asked questions </h4>
          <AccordianContainer header={header} />
        </article>
        <Footer />
      </div>
    </>
  );
}

export default Learn;
