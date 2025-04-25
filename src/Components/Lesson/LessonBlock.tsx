export default function LessonBlock(props: any) {
  return (
    <div className="bg-white rounded-xl shadow-2xl/5 w-full p-10">
      {props.children}
    </div>
  )
}