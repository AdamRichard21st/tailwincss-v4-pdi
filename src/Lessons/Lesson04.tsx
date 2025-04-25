import LessonBlock from "../Components/Lesson/LessonBlock"
import LessonTitle from "../Components/Lesson/LessonTitle"
import LessonBody from "../Components/Lesson/LessonBody"
import Code from "../Components/Code"
import Quote from "../Components/Quote"

export default function Lesson04() {
  return (
    <LessonBlock>
      <LessonTitle>
        Default border & placeholder colors
      </LessonTitle>
      <LessonBody>
        <p>
          Borders color is now css <Quote>currentColor</Quote> value by default 
          instead of previous <Quote>gray-200</Quote>. Check this out:
        </p>
        <div className="flex gap-4">
          <span className="bg-underwave-dark text-red-400 border-4 rounded-full px-4 py-2">
            text-red-400
          </span>
          <span className="bg-underwave-dark text-indigo-500 border-4 rounded-full px-4 py-2">
            text-indigo-500
          </span>
          <span className="bg-underwave-dark text-emerald-400 border-4 rounded-full px-4 py-2">
            text-emerald-400
          </span>
        </div>
        <Code lines={[
          '<div className="flex gap-4">',
          '  <span className="bg-underwave-dark text-red-400 border-4 rounded-full px-4 py-2">',
          '    text-red-400',
          '  </span>',
          '  <span className="bg-underwave-dark text-indigo-500 border-4 rounded-full px-4 py-2">',
          '    text-indigo-500',
          '  </span>',
          '  <span className="bg-underwave-dark text-emerald-400 border-4 rounded-full px-4 py-2">',
          '    text-emerald-400',
          '  </span>',
          '</div>',
        ]}/>
        <p>
          Similarly, placeholders color is now current text color at <Quote>50%</Quote> opacity by default (used to be <Quote>gray-400</Quote>).
        </p>
        <div className="flex gap-4">
          <input className="bg-underwave-dark text-underwave-accent outline-0 px-4 py-2" placeholder="I'm a placeholder text" />
          <input className="bg-underwave-dark text-underwave-accent outline-0 px-4 py-2" placeholder="I'm a placeholder text" defaultValue="I'm a default text"/>
        </div>
        <Code lines={[
          '<div className="flex gap-4">',
          '  <input className="bg-underwave-dark text-underwave-accent outline-0 px-4 py-2" placeholder="I\'m a placeholder text"/>',
          '  <input className="bg-underwave-dark text-underwave-accent outline-0 px-4 py-2" placeholder="I\'m a placeholder text" value="I\'m a default text"/>',
          '</div>',
        ]}/>
      </LessonBody>
    </LessonBlock>
  )
}