import { type SchemaTypeDefinition } from 'sanity'
import handCraftProduct from './handCraftProducts'
import rating from './rating'
import book from './bookSchema/books'
import bookPage from './bookSchema/bookPage'
import collection from './insightSchemas/collection'
import section from './insightSchemas/section'
import insightpage from './insightSchemas/page'
import category from './insightSchemas/category'
import matters from './insightSchemas/matters'
import bookCategory from './bookSchema/bookCategory'
import instruction from './instructions'
import page from './pages/page'
import goalSection from './pages/goalSection'
import locationItem from './pages/locationItem'
import complexContentBlock from './content/complexContentBlock'
import header from './header/header'
import footer from './footer/footer'
import footerSection from './footer/footerSection'
import teachingAssessment from './teachingAssessment/teachingAssignment'
import checklistDescription from './beginnerChecklist/checkListDescription'
import purpleContent from './purpleContent/purpleContent'
import purpleChart from './purpleContent/purpleChart'
import whiteChart from './purpleContent/whiteChart'
import registrationForm from './registrationForm/registrationForm'
import membershipForm from './membershipForm/membershipForm'
import contentChart from './contactPage/contentChart'
import sufiTrans from './contactPage/sufiTrans'
import supportSection from './contactPage/supportSection'
import contactSection from './contactPage/contactSection'
import voucher from './voucher'
import homepage from './homepage/homepage'
import heroSections from './heroSections'
import matterBox from './matterBox'
import sufiStats from './contactPage/sufiStats'
import beginnerChecklist from './beginnerChecklist/beginnerChecklist'
import rightsideImageContent from './rightsideImageContent'
import productShowcase from './productShowcase'
import simpleContent from './simpleContent'
import donateSection from './donateSection'
import volunteer from './volunteer'
import whiteContentChart from './whiteContentChart'
import post from './post'
import blockContent from './blockContent'
import aboutContent from './content/aboutContent'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    handCraftProduct,
    rating,
    book,
    bookPage,
    collection,
    section,
    insightpage,
    category,
    matters,
    bookCategory,
    instruction,
    page,
    goalSection,
    locationItem,
    complexContentBlock,
    header,
    footer,
    footerSection,
    teachingAssessment,
    beginnerChecklist,
    checklistDescription,
    purpleContent,
    purpleChart,
    whiteChart,
    registrationForm,
    membershipForm,
    contentChart,
    sufiTrans,
    supportSection,
    contactSection,
    voucher,
    homepage,
    heroSections,
    matterBox,
    sufiStats,
    rightsideImageContent,
    productShowcase,
    simpleContent,
    donateSection,
    volunteer,
    whiteContentChart,
    post,
    blockContent,
    aboutContent
  ],
}
