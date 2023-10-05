import { faqs } from "../../data/faqs"
import Nudge from "../Nudge"
import Faq from "./Faq"

const Faqs = () => {
  return (
    <div className="faq-section">
                <div className="inner-row">
                           <div className="faq-section-content">
                                       <div className="faq-intro">
                                                  <h2>Some Questions and Answers</h2>
                                                  <p>Have a look at our most Frequently Asked Questions</p>
                                       </div>
                                       <div className="faqs-wrapper">
                                                 { faqs.map(item => 
                                                         <Faq key={item.id} data={item} />
                                                  )}
                                       </div>
                           </div>

                           <Nudge />
                </div>
    </div>
  )
}

export default Faqs