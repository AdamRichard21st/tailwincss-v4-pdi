import LessonBlock from "../Components/Lesson/LessonBlock"
import LessonTitle from "../Components/Lesson/LessonTitle"
import LessonBody from "../Components/Lesson/LessonBody"
import Link from "../Components/Link"
import Code from "../Components/Code"
import Quote from "../Components/Quote"

export default function Lesson01() {
  return (
    <LessonBlock>
      <LessonTitle>
        Installing tailwind through vite
      </LessonTitle>
      <LessonBody className="space-y-4">
        <p>
          This is a <Link href="https://react.dev/learn">react</Link> app created 
          with <Link href="https://vite.dev/guide">vite</Link> in order to test 
          the <Link href="https://tailwindcss.com/blog/tailwindcss-v4">tailwindcss v4 changes</Link>.
        </p>
        <p>
          Creating a react app is quite simple with vite. Just run:
        </p>
        <Code>
          npx create-vite@latest folder-name --template react-ts
        </Code>
        <p>
          This will scaffold a react app ready to run with <Quote>npm run start</Quote>.
          Then we can install tailwindcss and its <Link href="https://www.npmjs.com/package/@tailwindcss/vite">official plugin for vite</Link>.
        </p>
        <Code>
          npm install tailwindcss @tailwindcss/vite
        </Code>
        <p>
          Once installed, that's a matter of telling <Quote>vite.config.ts</Quote> to use the tailwind plugin:
        </p>
        <Code lines={[
          'import tailwindcss from \'@tailwindcss/vite\' // imports the plugin',
          '',
          'export default defineConfig({',
          '  plugins: [react(), tailwindcss()], // adds it into the plugin array',
          '})',
        ]}/>
        <p>
          Then add the one-line tailwind directive to our main CSS file:
        </p>
        <Code>
          @import 'tailwindcss';
        </Code>
        <div className="bg-yellow-100 rounded-lg p-4">
          <h3 className="text-red-400 font-bold text-lg mb-4">
            Important notice from official documentation
          </h3>
          <p className="text-yellow-700 text-sm">
            "Tailwind CSS v4.0 is designed for <b>Safari 16.4+</b>, <b>Chrome 111+</b>, and <b>Firefox 128+</b>.
            If you need to support older browsers, stick with v3.4 until your browser support 
            requirements change."
          </p>
        </div>
      </LessonBody>
    </LessonBlock>
  )
}