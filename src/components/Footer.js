const Footer=()=>{
    return(
        <footer class="footer section">
            <div class="footer__container bd-grid">
                <div class="footerData">
                    <h2 class="footer__title">MOTIVATION</h2>
                    <p class="footer__text">Jika lelah dengan PROSES, istirahatlah sejenak atau terus berjalan tetapi perlahan.</p>
                    <p class="footer__text2">Jangan pernah menyerah!</p>
                </div>

                <div class="footerData">
                    <h2 class="footer__title">NAVIGATE</h2>
                    <ul>
                        <li><a href="/" class="footer__link">Home</a></li>
                        <li><a href="/about" class="footer__link">About</a></li>
                        <li><a href="/Contact" class="footer__link">Contact</a></li>
                    </ul>
                </div>
                
                <div class="footerData">
                    <h2 class="footer__title">SOCIAL MEDIA</h2>
                    <a href="https://www.instagram.com/fadliridwansyah_/" class="about__social-icon"><i class='bx bxl-instagram' ></i></a>
                    <a href="https://www.facebook.com/profile.php?id=100030174677411" class="about__social-icon"><i class='bx bxl-facebook' ></i></a>
                    <a href="https://twitter.com/FadliRidwansyah" class="about__social-icon"><i class='bx bxl-twitter' ></i></a>
                </div>

            </div>
        </footer>
    );
}

export default Footer;