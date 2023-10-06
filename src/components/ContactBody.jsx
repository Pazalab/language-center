
const ContactBody = () => {
  return (
    <div className="contact-body-section">
                <form>
                            <div className="form-row">
                                        <label htmlFor="name">Name</label>
                                        <input type="text" className="form-control" placeholder="Full name" />
                            </div>
                            <div className="form-row">
                                        <label htmlFor="email">Email</label>
                                        <input type="email" className="form-control"  placeholder="Email Address"/>
                            </div>
                            <div className="form-row">
                                       <label htmlFor="phone">Phone</label>
                                       <input type="number" className="form-control" placeholder="+254 712345678" pattern="[0-9]+" />
                            </div>
                             <div className="form-row">
                                       <label htmlFor="subject">Subject</label>
                                       <input type="text" className="form-control" placeholder="Subject" />
                             </div>
                             <div className="form-row">
                                        <label htmlFor="message">Message</label>
                                        <textarea name="" id="" cols="30" rows="10" placeholder="Write your message"></textarea>
                             </div>

                             <div className="form-btn">
                                      <button type="submit">Send Message</button>
                             </div>
                </form>
    </div>
  )
}

export default ContactBody