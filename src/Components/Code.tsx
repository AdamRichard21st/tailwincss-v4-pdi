import React from "react"

export default function Code(props: any) {
  return (
    <div className="bg-slate-700 text-gray-300 rounded-lg overflow-hidden">
      <pre className="font-mono overflow-auto p-4
        [&::-webkit-scrollbar]:w-2
        [&::-webkit-scrollbar]:h-2
        [&::-webkit-scrollbar]:rounded
      [&::-webkit-scrollbar-track]:bg-slate-800/50
      [&::-webkit-scrollbar-thumb]:bg-slate-500
        [&::-webkit-scrollbar-thumb]:rounded">
        {props.children ?? props?.lines.map((line: any, i: number) => (
          <React.Fragment key={i}>
            {line}<br/>
          </React.Fragment>
        ))}
      </pre>
    </div>
  )
}