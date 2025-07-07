import { Button } from "@/components/ui/button"
import { BadgeDollarSign } from "lucide-react"
import { Link, useNavigate } from "react-router"


const PurchasePage = () => {
  const navigate = useNavigate()
  return (
    <>
        <div className="bg-[#5a1e1a] min-h-screen flex items-center justify-center">
      <div className="bg-[#2b2b2b] rounded-lg border border-white p-6 w-[400px] space-y-6 shadow-lg items-center">
              {/* Top bar */}
      <div className="w-full flex justify-between items-center px-4">
        <div className="flex items-center gap-2 bg-[#2b2b2b] px-3 py-1 rounded-xl border border-black shadow text-white font-semibold text-sm">
          <BadgeDollarSign
            width={20}
            height={20}
            className="inline-block"
          />
          00000000
          <Link className="ml-1 text-yellow-300 font-bold text-lg" to='/purchase'>+</Link>
        </div>
        <Button onClick={() => navigate(-1)} className="bg-[#3d3d3d] text-white text-sm font-bold rounded-lg px-4 py-2 shadow border border-black">
          Back
        </Button>
      </div>
      </div>
      </div>
    </>
  )
}

export default PurchasePage