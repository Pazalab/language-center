import { exams } from "../../data/exams"

const Exams = () => {
  return (
    <div className="exams-section">
            <div className="inner-row">
                      <div className="exams-section-content">
                             <h3>Our Exams</h3>
                             <div className="strip-intro">
                                     <h1>Standardized Examination Tests</h1>
                                      <p>Looking to study at a university locally or abroad? At TLC, we have a wide variety of exams that students can choose from and prepare in order to attain the required scores to gain entrance to these schools.</p>
                           </div>

                           <div className="exams-strip-row">
                                   { exams.map(item => 
                                            <div className="strip-moja" key={item.id}>
                                                <span>{item.id +1}</span>
                                                <div className="strip-moja-texts">
                                                            <h4> {item.title}</h4>
                                                         <p>A standardized test to measure the English language ability of non-native speakers wishing to enroll in English-speaking universities.</p>
                                                </div>
                                      </div>
                                    )}
                           </div>
                      </div>
            </div>
    </div>
  )
}

export default Exams