import LessonBlock from "../Components/Lesson/LessonBlock"
import LessonTitle from "../Components/Lesson/LessonTitle"
import LessonBody from "../Components/Lesson/LessonBody"
import Code from "../Components/Code"
import Quote from "../Components/Quote"

export default function Lesson06() {
  return (
    <LessonBlock>
      <LessonTitle>
        @plugin and other settings
      </LessonTitle>
      <LessonBody>
        <p>
          Plugins setup also moved from <Quote>tailwind.config.js</Quote> file to css as well.
        </p>
        <Code>
          @plugin "@tailwindcss-animations";
        </Code>
        <p>
          To keep old style usage of settings, use the <Quote>@config</Quote> directive.
        </p>
        <Code>
          @config "../tailwind.config.js";
        </Code>
      </LessonBody>
    </LessonBlock>
  )
}