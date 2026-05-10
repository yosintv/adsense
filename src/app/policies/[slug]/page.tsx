import { notFound } from 'next/navigation';

export async function generateStaticParams() {
  return [
    { slug: 'privacy' },
    { slug: 'terms' },
    { slug: 'cookies' },
    { slug: 'disclaimer' },
  ];
}

const policyContent: Record<string, { title: string, content: React.ReactNode }> = {
  'privacy': {
    title: 'Privacy Policy',
    content: (
      <>
        <p className="mb-4 text-sm text-gray-500">Last Updated: May 10, 2026</p>
        <p className="mb-6">At YoSinTV Blogs, accessible from yosintv.net, one of our main priorities is the privacy of our visitors. This Privacy Policy document contains types of information that is collected and recorded by YoSinTV Blogs and how we use it.</p>
        
        <h2 className="text-xl font-bold mt-8 mb-4 text-white">1. Log Files</h2>
        <p className="mb-4">YoSinTV Blogs follows a standard procedure of using log files. These files log visitors when they visit websites. All hosting companies do this and a part of hosting services' analytics. The information collected by log files include internet protocol (IP) addresses, browser type, Internet Service Provider (ISP), date and time stamp, referring/exit pages, and possibly the number of clicks. These are not linked to any information that is personally identifiable. The purpose of the information is for analyzing trends, administering the site, tracking users' movement on the website, and gathering demographic information.</p>
        
        <h2 className="text-xl font-bold mt-8 mb-4 text-white">2. Cookies and Web Beacons</h2>
        <p className="mb-4">Like any other website, YoSinTV Blogs uses 'cookies'. These cookies are used to store information including visitors' preferences, and the pages on the website that the visitor accessed or visited. The information is used to optimize the users' experience by customizing our web page content based on visitors' browser type and/or other information.</p>
        
        <h2 className="text-xl font-bold mt-8 mb-4 text-white">3. Google DoubleClick DART Cookie</h2>
        <p className="mb-4">Google is one of a third-party vendor on our site. It also uses cookies, known as DART cookies, to serve ads to our site visitors based upon their visit to www.website.com and other sites on the internet. However, visitors may choose to decline the use of DART cookies by visiting the Google ad and content network Privacy Policy at the following URL – https://policies.google.com/technologies/ads</p>
        
        <h2 className="text-xl font-bold mt-8 mb-4 text-white">4. Advertising Partners Privacy Policies</h2>
        <p className="mb-4">Third-party ad servers or ad networks uses technologies like cookies, JavaScript, or Web Beacons that are used in their respective advertisements and links that appear on YoSinTV Blogs, which are sent directly to users' browser. They automatically receive your IP address when this occurs. These technologies are used to measure the effectiveness of their advertising campaigns and/or to personalize the advertising content that you see on websites that you visit.</p>
        <p className="mb-4 text-sm italic">Note that YoSinTV Blogs has no access to or control over these cookies that are used by third-party advertisers.</p>
        
        <h2 className="text-xl font-bold mt-8 mb-4 text-white">5. Third Party Privacy Policies</h2>
        <p className="mb-4">YoSinTV Blogs's Privacy Policy does not apply to other advertisers or websites. Thus, we are advising you to consult the respective Privacy Policies of these third-party ad servers for more detailed information. It may include their practices and instructions about how to opt-out of certain options.</p>
        
        <h2 className="text-xl font-bold mt-8 mb-4 text-white">6. Consent</h2>
        <p className="mb-4">By using our website, you hereby consent to our Privacy Policy and agree to its Terms and Conditions.</p>
      </>
    )
  },
  'terms': {
    title: 'Terms of Service',
    content: (
      <>
        <p className="mb-4 text-sm text-gray-500">Last Updated: May 10, 2026</p>
        <h2 className="text-xl font-bold mt-8 mb-4 text-white">1. Introduction</h2>
        <p className="mb-4">These terms and conditions outline the rules and regulations for the use of YoSinTV Blogs's Website. By accessing this website we assume you accept these terms and conditions. Do not continue to use YoSinTV Blogs if you do not agree to take all of the terms and conditions stated on this page.</p>
        
        <h2 className="text-xl font-bold mt-8 mb-4 text-white">2. License</h2>
        <p className="mb-4">Unless otherwise stated, YoSinTV Blogs and/or its licensors own the intellectual property rights for all material on YoSinTV Blogs. All intellectual property rights are reserved. You may access this from YoSinTV Blogs for your own personal use subjected to restrictions set in these terms and conditions.</p>
        
        <h2 className="text-xl font-bold mt-8 mb-4 text-white">3. User Comments</h2>
        <p className="mb-4">Parts of this website offer an opportunity for users to post and exchange opinions and information in certain areas of the website. YoSinTV Blogs does not filter, edit, publish or review Comments prior to their presence on the website. Comments do not reflect the views and opinions of YoSinTV Blogs, its agents and/or affiliates.</p>
      </>
    )
  },
  'cookies': {
    title: 'Cookie Policy',
    content: (
      <>
        <p className="mb-4 text-sm text-gray-500">Last Updated: May 10, 2026</p>
        <h2 className="text-xl font-bold mt-8 mb-4 text-white">1. What are Cookies</h2>
        <p className="mb-4">This Cookie Policy explains what cookies are and how we use them. You should read this policy so you can understand what type of cookies we use, or the information we collect using cookies and how that information is used.</p>
        
        <h2 className="text-xl font-bold mt-8 mb-4 text-white">2. How we use Cookies</h2>
        <p className="mb-4">We use cookies for a variety of reasons detailed below. Unfortunately, in most cases, there are no industry standard options for disabling cookies without completely disabling the functionality and features they add to this site.</p>
        
        <h2 className="text-xl font-bold mt-8 mb-4 text-white">3. Disabling Cookies</h2>
        <p className="mb-4">You can prevent the setting of cookies by adjusting the settings on your browser. Be aware that disabling cookies will affect the functionality of this and many other websites that you visit.</p>
      </>
    )
  },
  'disclaimer': {
    title: 'Disclaimer',
    content: (
      <>
        <p className="mb-4 text-sm text-gray-500">Last Updated: May 10, 2026</p>
        <h2 className="text-xl font-bold mt-8 mb-4 text-white">1. General Information</h2>
        <p className="mb-4">The information contained on the YoSinTV Blogs website is for general information purposes only. YoSinTV Blogs assumes no responsibility for errors or omissions in the contents of the Service.</p>
        
        <h2 className="text-xl font-bold mt-8 mb-4 text-white">2. External Links Disclaimer</h2>
        <p className="mb-4">The Website may contain links to external websites that are not provided or maintained by or in any way affiliated with YoSinTV Blogs. Please note that the YoSinTV Blogs does not guarantee the accuracy, relevance, timeliness, or completeness of any information on these external websites.</p>
        
        <h2 className="text-xl font-bold mt-8 mb-4 text-white">3. Views Expression Disclaimer</h2>
        <p className="mb-4">The Website may contain views and opinions which are those of the authors and do not necessarily reflect the official policy or position of any other author, agency, organization, employer or company, including YoSinTV Blogs.</p>
      </>
    )
  }
};

export default async function PolicyPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  
  const policy = policyContent[slug];
  
  if (!policy) {
    notFound();
  }

  return (
    <div className="container mx-auto px-4 py-24 max-w-4xl">
      <div className="glass-panel p-8 md:p-12 rounded-3xl border border-white/10">
        <h1 className="text-3xl md:text-5xl font-black font-sans mb-8 text-white">{policy.title}</h1>
        <div className="prose prose-invert prose-lg max-w-none text-gray-300
          prose-headings:text-white prose-headings:font-bold prose-headings:font-sans
          prose-p:leading-relaxed prose-strong:text-white prose-a:text-[var(--color-cyber-blue)]">
          {policy.content}
        </div>
      </div>
    </div>
  );
}
