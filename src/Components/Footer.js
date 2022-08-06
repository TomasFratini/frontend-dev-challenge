import footer from "../IMG/footer.png"
import newsletter from "../IMG/newsletter.png"

const Footer = () => {


  return (


    <div class="flex flex-col w-full color-footer">
        <div class="grid card rounded-box place-items-center color-footer newsletter-footer">
            <div class="card card-side">
                <div><img src={newsletter} alt="new"/></div>
                <div class="card-body">
                    <h2 class="newsletter-title">Suscribite a nuestro newsletter!</h2>
                    <p className="newsletter-text">No tiene costo!</p>
                    <div class="card-actions">
                        <input type="text" placeholder="Ingrese su correo" class="input input-bordered input-md w-full max-w-xs" />
                        <button class="btn btn-outline">Enviar</button>
                    </div>
                </div>
            </div>
                
        </div> 
        <div class="divider"></div> 
        <div class="grid card color-footer rounded-box footer content">
        <footer class="footer footer-center text-white">
                <div class="grid grid-flow-col gap-16  link-text">
                    <a href="/" class="link link-hover">Política de Cookies</a> 
                    <a href="/" class="link link-hover">Política de Privacidad</a> 
                    <a href="/" class="link link-hover">Términos y condiciones de uso</a> 
                    <a href="/" class="link link-hover">Cláusula Informativa de Consentimiento</a>
                </div> 
                <div>
                    <img class="img"alt="footer" src={footer}/>
                </div>
            </footer>
        </div>
    </div>


 )

}
export default Footer
                    