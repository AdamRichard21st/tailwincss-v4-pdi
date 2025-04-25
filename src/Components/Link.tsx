export default function Link(props: any) {
  return (
    <a href={props?.href || '#'} className="text-blue-500 hover:text-blue-700">
      {props.children}
    </a>
  )
}