import { TbChartPieFilled } from "react-icons/tb";

const Stats = () => {
  return (
    <div className="bg-zinc-900 p-4 my-2 rounded-md">
      <div className="h-full flex items-center justify-center w-full flex-col">
        <TbChartPieFilled className="text-6xl" />
        <h1 className="text-2xl font-semibold my-2">No data yet</h1>
      </div>
    </div>
  )
}

export default Stats