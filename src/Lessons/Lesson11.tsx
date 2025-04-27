import LessonBlock from "../Components/Lesson/LessonBlock"
import LessonTitle from "../Components/Lesson/LessonTitle"
import LessonBody from "../Components/Lesson/LessonBody"
import Code from "../Components/Code"
import Quote from "../Components/Quote"

export default function Lesson11() {
  return (
    <LessonBlock>
      <LessonTitle>
        The not: pseudo selector
      </LessonTitle>
      <LessonBody>
        <p>
          The <Quote>not:</Quote> pseudo selector has now a utility class for it:
        </p>
        <div className="bg-discord text-white not-active:text-white/30 not-active:bg-discord-dark cursor-pointer rounded-lg px-4 py-2">
          Click to activate
        </div>
        <Code lines={[
          '<div className="bg-discord text-white not-active:text-white/30 not-active:bg-discord-dark ...">',
          '  Click to activate',
          '</div>',
        ]}/>
      </LessonBody>
    </LessonBlock>
  )
}