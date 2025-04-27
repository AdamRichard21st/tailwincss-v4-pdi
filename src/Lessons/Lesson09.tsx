import LessonBlock from "../Components/Lesson/LessonBlock"
import LessonTitle from "../Components/Lesson/LessonTitle"
import LessonBody from "../Components/Lesson/LessonBody"
import Code from "../Components/Code"
import Quote from "../Components/Quote"

export default function Lesson09() {
  return (
    <LessonBlock>
      <LessonTitle>
        Extended gradients utility classes
      </LessonTitle>
      <LessonBody>
        <p>
          Tailwind 4 supports more gradients styles out-of-the-box now.
          Check the new <Quote>linear-gradient</Quote>, <Quote>radial-gradient</Quote> and <Quote>conic-gradient</Quote>:
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <div className="bg-linear-145 from-blue-400 via-blue-300 to-cyan-800 size-40 rounded-full"/>
          <div className="bg-radial-[at_45%_45%] via-40% to-90% from-blue-300 via-blue-400 to-cyan-800 size-40 rounded-full"/>
          <div className="bg-conic from-violet-400 via-violet-900 to-violet-400 size-40 rounded-full"/>
        </div>
        <Code lines={[
          '<div className="flex flex-wrap justify-center gap-4">',
          '  <div className="bg-linear-145 from-blue-400 via-blue-300 to-cyan-800 ..."/>',
          '  <div className="bg-radial-[at_45%_45%] via-40% to-90% from-blue-300 via-blue-400 to-cyan-800 ..."/>',
          '  <div className="bg-conic from-violet-400 via-violet-900 to-violet-400 ..."/>',
          '</div>',
        ]}/>
      </LessonBody>
    </LessonBlock>
  )
}