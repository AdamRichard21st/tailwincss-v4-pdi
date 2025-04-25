import LessonBlock from "../Components/Lesson/LessonBlock"
import LessonTitle from "../Components/Lesson/LessonTitle"
import LessonBody from "../Components/Lesson/LessonBody"
import Code from "../Components/Code"

export default function Lesson02() {
  return (
    <LessonBlock>
      <LessonTitle>
        Theming
      </LessonTitle>
      <LessonBody>
        <p>
          It's now possible to declare custom variables directly into the css:
        </p>
        <Code lines={[
          '@theme {',
          ' /* opera gx variable themes */',
          ' --color-underwave: #121019;',
          ' --color-underwave-dark: #09080d;',
          ' --color-underwave-accent: #fa1e4e;',
          '',
          ' /* discord variable themes */',
          ' --color-discord: #1a1a1e;',
          ' --color-discord-dark: #121214;',
          ' --color-discord-accent: #4c97f0;',
          '}',
        ]}/>
        <p>
          Styles can be applied out-of-the-box without any js configuration:
        </p>
        <Code lines={[
          '<div className="flex flex-wrap gap-3">',
          '  <div className="bg-underwave-dark flex rounded-xl gap-4 p-5">',
          '    <div className="bg-underwave-accent rounded-lg h-full w-8"/>',
          '    <div className="bg-underwave text-gray-300 rounded-lg w-full p-2">',
          '      I\'m inspired by new OperaGx theme',
          '    </div>',
          '  </div>',
          '  <div className="bg-discord-dark flex rounded-xl gap-4 p-5">',
          '    <div className="bg-discord-accent rounded-lg h-full w-8"/>',
          '    <div className="bg-discord text-gray-300 rounded-lg w-full p-2">',
          '      I\'m inspired by new Discord theme',
          '    </div>',
          '  </div>',
          '</div>',
        ]}/>
        <div className="flex flex-wrap gap-3">
          <div className="bg-underwave-dark flex rounded-xl gap-4 p-5">
            <div className="bg-underwave-accent rounded-lg h-full w-8"/>
            <div className="bg-underwave text-gray-300 rounded-lg w-full p-2">
              I'm inspired by new OperaGx theme
            </div>
          </div>
          <div className="bg-discord-dark flex rounded-xl gap-4 p-5">
            <div className="bg-discord-accent rounded-lg h-full w-8"/>
            <div className="bg-discord text-gray-300 rounded-lg w-full p-2">
              I'm inspired by new Discord theme
            </div>
          </div>
        </div>
      </LessonBody>
    </LessonBlock>
  )
}