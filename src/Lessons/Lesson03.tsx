import LessonBlock from "../Components/Lesson/LessonBlock"
import LessonTitle from "../Components/Lesson/LessonTitle"
import LessonBody from "../Components/Lesson/LessonBody"
import Code from "../Components/Code"
import Quote from "../Components/Quote"

export default function Lesson03() {
  return (
    <LessonBlock>
      <LessonTitle>
        New @utility directive
      </LessonTitle>
      <LessonBody>
        <p>
          Tailwind v4 <Quote>@utility</Quote> css directive simplifies the proccess of customizing 
          utility classes directly within css itself.
        </p>
        <p>
          Lets take <Quote>container</Quote> utility class as example. In previous versions of Tailwind,
          adding custom padding and margins to a container would look like as follow:
        </p>
        <Code lines={[
          'module.exports = {',
          '  theme: {',
          '    container: {',
          '      margin: \'auto\',',
          '      padding: \'2rem\',',
          '    },',
          '  },',
          '}',
        ]}/>
        <p>
          With the new css approach tho, it can be simplified to:
        </p>
        <Code lines={[
          '@utility container {',
          '  margin: \'auto\',',
          '  padding: \'2rem\',',
          '}',
        ]}/>
        <p>
          Which is way more natural, as we're dealing with css.
        </p>
      </LessonBody>
    </LessonBlock>
  )
}