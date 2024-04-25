interface Series {
  title: string
  description: string
  imgurId: string
  id: string
  inverted?: boolean // true means latest first
}

const seriesData: Series[] = [
  {
    id: 'insta-next',
    title: 'Fullstack Instagram Clone with Next.js',
    description: `This is a step-by-step series on building a simple Instagram Clone using Next.js. You will get to see Tailwind, Mantine, NextAuth and Prisma in action to build this fullstack Instagram clone.`,
    imgurId: '2kNXqd2',
  },
  {
    id: 'memory',
    title: 'Revisiting Memories',
    description: `A memory vault where I reminisce my past. Here you can peek into my life, the events that happened and the people that I met along my way.`,
    imgurId: 'lqsTNVB',
    inverted: true,
  },
  {
    id: 'life',
    title: 'Life Beyond Codes',
    description: `Wonders what a programmer does beside coding? Here's it.`,
    imgurId: 'E0VqlBG',
    inverted: true,
  },
  {
    id: 'experience',
    title: "A Programmer's Tales",
    description: `Here are some stories about my journey through the career of software engineering as a programmer. `,
    imgurId: 'QstUidP',
  },
  {
    id: 'leetcode',
    title: 'Leetcode with Python',
    description: `In this series, I will be discussing about various Leetcode problems and the ideas or intuitions behind the solutions. Python will be implemented to show how the ideas are transformed to codes. `,
    imgurId: '4xOrTC6',
    inverted: true,
  },
]

export default seriesData
