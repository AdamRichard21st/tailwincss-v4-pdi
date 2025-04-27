import LessonBlock from "./Components/Lesson/LessonBlock"
import LessonBody from "./Components/Lesson/LessonBody"
import LessonTitle from "./Components/Lesson/LessonTitle"
import Link from "./Components/Link"
import Lesson01 from "./Lessons/Lesson01"
import Lesson02 from "./Lessons/Lesson02"
import Lesson03 from "./Lessons/Lesson03"
import Lesson04 from "./Lessons/Lesson04"
import Lesson05 from "./Lessons/Lesson05"
import Lesson06 from "./Lessons/Lesson06"
import Lesson07 from "./Lessons/Lesson07"
import Lesson08 from "./Lessons/Lesson08"
import Lesson09 from "./Lessons/Lesson09"
import Lesson10 from "./Lessons/Lesson10"
import Lesson11 from "./Lessons/Lesson11"

const App = () => {
  return (
    <div className='bg-slate-200 min-h-screen'>
      <div className="container max-w-4xl space-y-8 p-4 lg:p-8">
        <Lesson01/>
        <Lesson02/>
        <Lesson03/>
        <Lesson04/>
        <Lesson05/>
        <Lesson06/>
        <Lesson07/>
        <Lesson08/>
        <Lesson09/>
        <Lesson10/>
        <Lesson11/>
        <LessonBlock>
          <LessonTitle>
            Final considerations
          </LessonTitle>
          <LessonBody>
            After all, it's a must to read the list of <Link href="https://tailwindcss.com/docs/upgrade-guide#changes-from-v3">breaking-changes</Link> from tailwind v3 to v4 
            before to deciding it's time to move on.
          </LessonBody>
        </LessonBlock>
      </div>
    </div>
  )
}

export default App