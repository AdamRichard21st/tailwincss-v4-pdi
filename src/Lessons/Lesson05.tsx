import LessonBlock from "../Components/Lesson/LessonBlock"
import LessonTitle from "../Components/Lesson/LessonTitle"
import LessonBody from "../Components/Lesson/LessonBody"
import Code from "../Components/Code"
import Quote from "../Components/Quote"

export default function Lesson05() {
  return (
    <LessonBlock>
      <LessonTitle>
        Automatic detection of styled files
      </LessonTitle>
      <LessonBody>
        <p>
          Tailwind will automatically detect the files that are using Tailwind classes.
          This new approach will also ignore files according to <Quote>.gitignore</Quote>.
        </p>
        <p>
          However, to defining the files manually, you can use <Quote>@source</Quote> css directive.
        </p>
        <Code lines={[
          '@source "../node_modules/some-third-party-lib";',
          '@source not "./components/legacy";',
        ]}/>
      </LessonBody>
    </LessonBlock>
  )
}