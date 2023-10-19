import { useParams } from "react-router-dom"
import { languages } from "../../data/languages";
import Nudge from "../Nudge";

const SingleCourseBody = () => {
    const { lang } = useParams();
    const data = languages.find(item => item.urlFactor === lang);

  return ( 
    <div className="single-course-body">
            <div className="inner-row">
                       <div className="single-course-content">
                                   <div className="single-course-intro"> 
                                             <h3>{data.title}</h3>
                                             <h1>{data.name}</h1>
                                   </div>
                                   <div className="image">
                                              <img src={data.image} alt="" />
                                   </div>
                                   <div className="course-description">
                                             { data.description.map(item => <p key={item}>{item}</p> )}

                                             { data.extras && data.extras.length ?
                                                      data.extras.map(kitu => 
                                                            <div className="list" key={kitu.id}>
                                                                       { kitu.types.map(u =>
                                                                               <ul key={u}>
                                                                                     <li>{u}</li>
                                                                               </ul>
                                                                        )}
                                                                        { kitu.text_continuation.map(k => <p key={k}>{k}</p>)}
                                                            </div>
                                                        )

                                                      : ''
                                             }
                                   </div>
                       </div>

                       <Nudge />
            </div>
    </div>
  )
}

export default SingleCourseBody