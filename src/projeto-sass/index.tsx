import './assets/css/style.min.css' 



function Home() {

  return (
    <>

    {/* <!-- Header --> */}
    <header className="container">
      <section className="row">

        {/* <!-- Menu do Site --> */}
        <nav>
          <ul>
            <li>
              <a href="#">
                Home
              </a>
            </li>

            <li>
              <a href="#">
                Sobre
              </a>
            </li>

            <li>
              <a href="#">
                Portfólio
              </a>
            </li>

            <li>
              <a href="#">
                Contato
              </a>
            </li>

            <li>
              <a href="#" className="btn btn-laranja">
                Currículo
              </a>
            </li>
          </ul>
        </nav>
        {/* <!-- End Menu do Site --> */}
      </section>
    </header>
    {/* <!-- End Header --> */}

    {/* <!-- Container --> */}
    <main className="container">
      {/* <!-- Section conteúdo do Site --> */}
      <section className="row sobre-web-design">
        {/* <!-- Contúdo de Texto Sobre o Site --> */}
        <article>
          <h1>Web Designer</h1>
          <h2>Landing Page</h2>

          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and.
          </p>

          <a href="#" className="btn btn-laranja">Saíba Mais</a>
        </article>
        {/* <!-- End Contúdo de Texto Sobre o Site --> */}

        <figcaption>
          <img
            src="../../public/images/pessoas-construindo-pc.png"
            alt="Criação de Site"
          />
        </figcaption>
      </section>
      {/* <!-- End Section conteúdo do Site --> */}
    </main>
    {/* <!-- End Container --> */}

    {/* <!-- Footer --> */}
    <footer className="container">
      {/* <!-- Redes Sociais --> */}
      <ul className="row">
        <li>
          <a href="#">
            <img src="../../public/images/logo-insta.png" alt="Instagram" />
          </a>
        </li>

        <li>
          <a href="#">
            <img src="../../public/images/logo-twitter.png" alt="Twitter" />
          </a>
        </li>

        <li>
          <a href="#">
            <img src="../../public/images/logo-facebook.png" alt="Facebook" />
          </a>
        </li>
      </ul>
      {/* <!-- Redes Sociais --> */}
    </footer>
    {/* <!-- End Footer --> */}
    </>
  )
}

export default Home

