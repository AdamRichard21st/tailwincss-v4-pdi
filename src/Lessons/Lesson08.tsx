import LessonBlock from "../Components/Lesson/LessonBlock"
import LessonTitle from "../Components/Lesson/LessonTitle"
import LessonBody from "../Components/Lesson/LessonBody"
import Code from "../Components/Code"
import Quote from "../Components/Quote"

export default function Lesson08() {
  return (
    <LessonBlock>
      <LessonTitle>
        3D transforms APIs
      </LessonTitle>
      <LessonBody>
        <p>
          There are new utility classes for interact with 3D API.
          For example, the <Quote>perspective-*</Quote> classes.
        </p>
        <p>
          Example of <Quote>perspective-midrange</Quote> vs <Quote>perspective-near</Quote>:
        </p>
        <div className="bg-discord rounded-xl overflow-auto">
          <Cube perspective="perspective-midrange"/>
          <Cube perspective="perspective-near"/>
        </div>
        <Code lines={[
          '<div className="perspective-near ...">',
          '  <div className="bg-yellow-300 rotate-x-55 -rotate-z-45 -translate-x-[50%]"/>',
          '  <div className="bg-green-500 -rotate-x-35 rotate-y-45 -translate-x-[calc(50%-5.3rem)] ..."/>',
          '  <div className="bg-red-500 -rotate-x-35 -rotate-y-45 -translate-x-[calc(50%+5.3rem)] ..."/>',
          '</div>',
        ]}/>
      </LessonBody>
    </LessonBlock>
  )
}

function Cube({perspective}: {perspective: string})
{
  return (
    <div className={`
      ${perspective}
      h-[27rem]
      *:absolute
      *:left-[50%]
      *:size-[15rem]
      *:[background-size:calc((100%-3px)/3)_calc((100%-3px)/3)]
      *:[background-image:linear-gradient(black_3px,transparent_3px),linear-gradient(90deg,black_3px,transparent_3px)]`}>
      <div className="bg-yellow-300 rotate-x-55 -rotate-z-45 -translate-x-[50%]"/>
      <div className="bg-green-500 -rotate-x-35 rotate-y-45 -translate-x-[calc(50%-5.3rem)] top-[9.2rem]"/>
      <div className="bg-red-500 -rotate-x-35 -rotate-y-45 -translate-x-[calc(50%+5.3rem)] top-[9.2rem]"/>
    </div>
  )
}