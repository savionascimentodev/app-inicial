export default function Caixa(props: any) {
  return (
    <div
      className={`
      flex justify-center items-center
      bg-purple-400 p-2 rounded-md
      w-[300px] h-[300px] text-3xl font-thin 
      `}
    >
      {props.children}
    </div>
  )
}
