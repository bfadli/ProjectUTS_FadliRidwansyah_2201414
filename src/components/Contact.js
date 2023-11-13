const Contact=()=>{
    return(
        <section class="contact section" id="contact">
            <h2 class="section-title">Contact Me</h2>

            <div class="contact__container bd-grid">
                <div class="contact__info">
                    <h3 class="contactSubtitle">EMAIL</h3>
                    <span class="contactText">fadliridwansyah28@gmail.com</span>

                    <h3 class="contactSubtitle">PHONE</h3>
                    <span class="contactText">+62 823 1951 6272</span>

                    <h3 class="contactSubtitle">ADDRESS</h3>
                    <span class="contactText">Bandung, Indonesia</span>
                </div>

                <form action="" class="contact__form">
                    <div class="contact__inputs">
                        <input type="text" id="name" placeholder="Name" class="contact__input"></input>
                        <input type="mail" id="email" placeholder="Email" class="contact__input"></input>
                    </div>

                    <textarea name="pesan" id="pesan" cols="0" rows="10" class="contact__input" placeholder="Type your message here..."></textarea>

                    <input type="submit" value="Kirim" class="contact__button" onClick="alert('Pesan Telah Terkirim!')"></input>
                </form>
            </div>
        </section>
    );
}

export default Contact;