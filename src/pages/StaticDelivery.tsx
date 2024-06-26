import CodePreview from "@/components/CodePreview";
import Details from '@/components/Details';




export default function StaticDelivery() {
  return (
    <>
      <div style={{backgroundColor:'black', height:'100%', overflow:'hidden'}}>
      <div className="main">
        <div className="code">
          <div className="code-container">
            <CodePreview />
          </div>
        </div>
        <Details />
      </div>
      </div>
    </>
  )
}
