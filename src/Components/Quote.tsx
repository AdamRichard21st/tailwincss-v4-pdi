export default function Quote(props: any) {
  return (
    <span className="bg-slate-200 text-slate-500 font-mono rounded px-1">
      {props.children}
    </span>
  )
}