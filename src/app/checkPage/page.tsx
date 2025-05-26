// app/page/[slug]/page.tsx
import { groq } from 'next-sanity';
import { client } from '@/sanity/lib/client'; // Make sure this is correctly configured
import { notFound } from 'next/navigation';
import BookCategory from '@/components/BookCategory'
import ComplexContentBlock from '@/components/ComplexContentBlock'
import GoalSection from '@/components/GoalSection'
import HandCraftProduct from '@/components/HandCraftProduct'
import HeroSection from '@/components/HeroSection'
import InsightCategory from '@/components/InsightCategory'
import MatterBox from '@/components/MatterBox'
import MembershipForm from '@/components/MembershipForm'
import PurpleChart from '@/components/PurpleChart'
import PurpleContent from '@/components/PurpleContent'
import SufiStats from '@/components/SufiStats'
import SufiTrans from '@/components/SufiTrans'
import SupportSection from '@/components/SupportSection'
import TeachingAssignment from '@/components/TeachingAssignment'
import Voucher from '@/components/Voucher'
import WhiteChart from '@/components/WhiteChart'
import BeginnerChecklist from '@/components/BeginnerChecklist'

const query = groq`
  *[_type == "page" && slug.current == $slug][0]{
    title,
    pageName,
    slug,
    contentSections[]{
      _key,
      type,
      ...
    }
  }
`;

type Props = {
  params: {
    slug: string;
  };
};

export default async function Page({ params }: Props) {
  const pageData = await client.fetch(query, { slug: params.slug });

  if (!pageData) {
    notFound();
  }

  const { title, contentSections } = pageData;

  return (
    <div className="container mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold mb-6">{title}</h1>

      {contentSections?.map((section: any) => {
  switch (section.type) {
    case 'goalSection':
      return <GoalSection key={section._key} data={section} />;

    case 'heroSections':
      return <HeroSection key={section._key} data={section} />;

    case 'whiteChart':
      return <WhiteChart key={section._key} data={section} />;

    case 'voucher':
      return <Voucher key={section._key} data={section} />;

    case 'beginnerChecklist':
      return <BeginnerChecklist key={section._key} data={section} />;

    case 'membershipForm':
      return <MembershipForm key={section._key} data={section} />;

    case 'teachingAssignment':
      return <TeachingAssignment key={section._key} data={section} />;

    case 'supportSection':
      return <SupportSection key={section._key} data={section} />;

    case 'complexContentBlock':
      return <ComplexContentBlock key={section._key} data={section} />;

    case 'sufiTrans':
      return <SufiTrans key={section._key} data={section} />;

    case 'sufiStats':
      return <SufiStats key={section._key} data={section} />;

    case 'matterBox':
      return <MatterBox key={section._key} data={section} />;

    case 'purpleChart':
      return <PurpleChart key={section._key} data={section} />;

    case 'purpleContent':
      return <PurpleContent key={section._key} data={section} />;

    case 'bookCategory':
      return <BookCategory key={section._key} data={section} />;

    case 'handCraftProduct':
      return <HandCraftProduct key={section._key} data={section} />;

    case 'insightCategory':
      return <InsightCategory key={section._key} data={section} />;

    default:
      return (
        <div key={section._key} className="border p-4 mb-4 bg-red-100">
          <p className="text-red-700 font-semibold">Unknown section type: {section.type}</p>
        </div>
      );
  }
})}

    </div>
  );
}

// // components/GoalSection.tsx
// import Image from 'next/image';

// type LocationItem = {
//   title?: string;
//   image?: { asset: { _ref: string; url: string } };
//   link?: string;
// };

// type GoalPoint = {
//   title?: string;
//   description?: string;
// };

// type GoalSectionProps = {
//   data: {
//     imageText?: string;
//     heading?: string;
//     subheading?: string;
//     intro?: string;
//     description?: any; // Portable Text
//     image?: { asset: { _ref: string; url: string } };
//     bgImage?: { asset: { _ref: string; url: string } };
//     pointsHeading?: string;
//     points?: GoalPoint[];
//     locationTitle?: string;
//     locations?: LocationItem[];
//   };
// };

// export default function GoalSection({ data }: GoalSectionProps) {
//   const {
//     imageText,
//     heading,
//     subheading,
//     intro,
//     description,
//     image,
//     bgImage,
//     pointsHeading,
//     points,
//     locationTitle,
//     locations,
//   } = data;

//   return (
//     <section className="relative py-16 px-4 bg-white overflow-hidden">
//       {bgImage?.asset?.url && (
//         <Image
//           src={bgImage.asset.url}
//           alt="Background"
//           layout="fill"
//           objectFit="cover"
//           className="absolute inset-0 z-0 opacity-10"
//         />
//       )}

//       <div className="relative z-10 max-w-6xl mx-auto text-center">
//         {imageText && <p className="text-sm uppercase text-gray-500 mb-2">{imageText}</p>}
//         {heading && <h2 className="text-4xl font-bold mb-2">{heading}</h2>}
//         {subheading && <h3 className="text-xl text-gray-700 mb-4">{subheading}</h3>}
//         {intro && <blockquote className="italic text-gray-600 mb-6">“{intro}”</blockquote>}
//         {description && (
//           <div className="prose prose-lg mx-auto mb-8">
//             {/* Render portable text here — using @portabletext/react if needed */}
//             <p>{/* Replace with actual Portable Text renderer */}Description content...</p>
//           </div>
//         )}

//         {image?.asset?.url && (
//           <div className="mb-10">
//             <Image
//               src={image.asset.url}
//               alt="Section"
//               width={600}
//               height={400}
//               className="rounded-md mx-auto"
//             />
//           </div>
//         )}

//         {pointsHeading && <h4 className="text-2xl font-semibold mb-4">{pointsHeading}</h4>}
//         {points?.length > 0 && (
//           <div className="grid md:grid-cols-2 gap-6 mb-10 text-left">
//             {points.map((point, idx) => (
//               <div key={idx} className="p-4 border rounded-md bg-gray-50">
//                 {point.title && <h5 className="font-bold text-lg">{point.title}</h5>}
//                 {point.description && <p className="text-gray-700">{point.description}</p>}
//               </div>
//             ))}
//           </div>
//         )}

//         {locationTitle && <h4 className="text-2xl font-semibold mb-4">{locationTitle}</h4>}
//         {locations?.length > 0 && (
//           <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
//             {locations.map((loc, idx) => (
//               <div key={idx} className="p-4 border rounded-md bg-white text-left shadow-sm">
//                 {loc.image?.asset?.url && (
//                   <Image
//                     src={loc.image.asset.url}
//                     alt={loc.title || 'Location'}
//                     width={300}
//                     height={200}
//                     className="mb-3 rounded"
//                   />
//                 )}
//                 {loc.title && <h5 className="font-bold text-lg">{loc.title}</h5>}
//                 {loc.link && (
//                   <a
//                     href={loc.link}
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     className="text-blue-600 underline text-sm"
//                   >
//                     Visit
//                   </a>
//                 )}
//               </div>
//             ))}
//           </div>
//         )}
//       </div>
//     </section>
//   );
// }
