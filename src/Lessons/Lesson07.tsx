import LessonBlock from "../Components/Lesson/LessonBlock"
import LessonTitle from "../Components/Lesson/LessonTitle"
import LessonBody from "../Components/Lesson/LessonBody"
import Code from "../Components/Code"
import { ResizableBox } from 'react-resizable';

export default function Lesson07() {
  return (
    <LessonBlock>
      <LessonTitle>
        @container class
      </LessonTitle>
      <LessonBody>
        <p>
          A great feature of Tailwind 4 is the ability to create media queries based
          on parent container instead of browser's viewport.
        </p>
        <p>
          Try resizing the container below to see how childs behaves:
        </p>
        <div className="flex justify-center relative">
          <ResizableBox
            width={200}
            height={200}
            minConstraints={[200, 200]} maxConstraints={[800, 200]}
            className="relative"
            handle={(
              <span className="bg-black absolute right-0 -bottom-2 text-white select-none cursor-col-resize text-xs px-2">
                Drag to resize
              </span>
            )}
          >
            <div className="bg-yellow-100 @container grid grid-cols-12 gap-4 p-4">
              <div className="bg-underwave rounded-lg col-span-12 @sm:col-span-6 @lg:col-span-8 h-20"/>
              <div className="bg-underwave-accent rounded-lg col-span-12 @sm:col-span-6 @lg:col-span-4 h-20"/>
              <div className="bg-discord-accent rounded-lg col-span-12 @max-sm:hidden h-20"/>
            </div>
          </ResizableBox>
        </div>
        <Code lines={[
          '<div className="@container grid grid-cols-12">',
          '  <div className="col-span-12 @sm:col-span-6 @lg:col-span-8"/>',
          '  <div className="col-span-12 @sm:col-span-6 @lg:col-span-4"/>',
          '  <div className="col-span-12 @max-sm:hidden h-20"/>',
          '</div>',
        ]}/>
      </LessonBody>
    </LessonBlock>
  )
}