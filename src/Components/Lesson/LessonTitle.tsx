export default function LessonTitle(props: any) {
  return (
    <h2 className="text-2xl font-bold mb-5">
      {props.children}
    </h2>
  )
}