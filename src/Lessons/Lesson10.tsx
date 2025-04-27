import LessonBlock from "../Components/Lesson/LessonBlock"
import LessonTitle from "../Components/Lesson/LessonTitle"
import LessonBody from "../Components/Lesson/LessonBody"
import Code from "../Components/Code"
import Quote from "../Components/Quote"

export default function Lesson10() {
  return (
    <LessonBlock>
      <LessonTitle>
        Inset shadows & rings
      </LessonTitle>
      <LessonBody>
        <p>
          Inset shadow and ring has it own utility classes now: <Quote>inset-shadow-*</Quote> and <Quote>inset-ring-*</Quote>.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <div className="inset-shadow-underwave-accent inset-shadow-[0_0_1rem] bg-underwave text-underwave-accent rounded-xl px-5 py-3">
            inset-shadow
          </div>
          <div className="inset-ring-underwave-accent inset-ring-4 bg-underwave text-underwave-accent rounded-xl px-5 py-3">
            inset-ring
          </div>
          <div className="inset-shadow-underwave-accent inset-shadow-[0_0_1rem] inset-ring-4 bg-underwave text-underwave-accent rounded-xl px-5 py-3">
            inset-shadow + inset-ring
          </div>
        </div>
        <Code lines={[
          '<div className="flex flex-wrap justify-center gap-4">',
          '  <div className="inset-shadow-underwave-accent inset-shadow-[0_0_1rem] ...">',
          '    inset-shadow',
          '  </div>',
          '  <div className="inset-ring-underwave-accent inset-ring-4 ...">',
          '    inset-ring',
          '  </div>',
          '  <div className="inset-shadow-underwave-accent inset-shadow-[0_0_1rem] inset-ring-4 ...">',
          '    inset-shadow + inset-ring',
          '  </div>',
          '</div>',
        ]}/>
      </LessonBody>
    </LessonBlock>
  )
}