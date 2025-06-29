import { Button } from "@/components/ui/button"
import { Link } from "react-router"

const GatchaPage = () => {
  return (
    <>
    <div>GatchaPage</div>
      <Button asChild className='self-center-safe'>
          <Link to="/">Back</Link>
        </Button>
    </>
    
  )
}

export default GatchaPage