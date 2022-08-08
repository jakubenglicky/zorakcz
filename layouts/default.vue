<template>
  <div>
      <div class="desktop-logo">
        <a href="/">
          <img src="/img/ZORRAK_cista_prace_logo_humrova+modra_02-ai.svg">
        </a>
      </div>

      <header>
        <nav class="click-dropdown">
          <div class="navbar-brand">
            <a href="/">
              <img src="/img/ZORRAK_cista_prace_logo_humrova+modra_02-ai_orez.svg">
            </a>
          </div>

          <button class="navbar-toggle open-drop">
            <span></span>
          </button>

          <div class="navbar-content click-dropdown-content">
            <ul>
              <li>
                <a href="/#uvod">Úvod</a>
              </li>
              <li>
                <a href="/#projekty">Katalogy a realizované projekty</a>
              </li>
              <li>
                <a href="/#o-nas">O nás</a>
              </li>
              <li>
                <a href="/#eshop">E-shop</a>
              </li>
              <li>
                <a href="/#kontakt">Kontakt</a>
              </li>
            </ul>
          </div>
        </nav>
      </header>
    <main>
    <Nuxt />


      <section id="partneri">
        <!--<div class="container">
          <h2>Partneři</h2>
          <div class="row">
            <a href="">
              <img src="/img/loga/rako.png">
            </a>
            <a href="">
              <img src="/img/loga/siko.png">
            </a>
            <a href="">
              <img src="/img/loga/ytong.png">
            </a>
            <a href="">
              <img src="/img/loga/trend.png">
            </a>
            <a href="">
              <img src="/img/loga/dek.png">
            </a>
          </div>
        </div>-->
      </section>
    </main>   
    <footer>
		<div class="container" id="kontakt">
			<div class="row">
				<div class="col-md-4">
					<img src="/img/ZORRAK_logo_humrova-ai.svg">
					<div class="copyright">
						© 2022 ZORRAK<br>
						Foto: <a href="https://unsplash.com/" target="_blank">unsplash.com</a>
            <br>
            <a href="/gdpr/">Zásady ochrany osobních údajů</a>
					</div>
				</div>
				<div class="col-md-4">
					<h4>Kontakt</h4>
					<ul>
						<li>Zorrak s.r.o.</li>
            <li> IČO: 10878173 </li>
	    <li> DIČ: CZ10878173 </li>
						<li>tel: <a href="tel:+420 774 026 207">+420 774 026 207</a></li>
						<li>mail: <a href="mailto:info@zorrak.cz">info@zorrak.cz</a></li>
						<li>Šamotka 1987, 269 01 Rakovník</li>
					</ul>
					<p>Máte dotaz či připomínku? <a href="mailto:info@zorrak.cz">Napište nám.</a></p>
				</div>
				<div class="col-md-4 socials">
					<h4>Sledujte nás</h4>
					<a href="https://www.facebook.com/pg/ZORRAKsro/about/" target="_blank"><i class="fab fa-facebook-f"></i></a>
					<a href="https://instagram.com/zorrak.cz" target="_blank"><i class="fab fa-instagram"></i></a>
				</div>
			</div>
		</div>
	</footer>
  </div>
</template>
