<template>
<section id="poptavka">
<div class="container">
  <div class="row">
    <div class="col-md-6">
      <h2>Přemýšlíte o nás?</h2>
      <p>Zašlete nám nezávaznou poptávku.</p>
      <form>
        <div class="row">
          <div class="col-md-6">
            <input id="form-name" type="text" name="name" placeholder="Jméno"/>
          </div>
          <div class="col-md-6">
            <input id="form-email" type="email" name="email" placeholder="E-Mail"/>
          </div>
        </div>
        <label for="form-text">Text poptávky:</label>
        <textarea name="text" id="form-text" cols="30" rows="10">{{ text }}</textarea>
        <br>
        <span class="message-ok">Poptávka byla odeslána...</span>
        <input id="submit" type="button" value="Nezávazně poptat" class="btn">
      </form>
    </div>
    <div class="col-md-6">
      <h2>Nebo pro nás chcete pracovat?</h2>
      <p><b>Hledáme schopného zedníka, možnost i jako OSVČ.</b></p>
      <p>Máte vysoké pracovní nasazení a zkušenosti v oboru?
        Hledáme samostatné pracovníky oboru zedník, nebo zedník obkladač. Ideálně na dlouhodobou
        spolupráci.</p>

      <p>Provádíme stavební a zednické práce převážně ve Středočeském kraji a v Praze.
        Nástup dle dohody.</p>

      <p><b>V případě zájmu</b> nás kontaktujte na telefonním čísle: <a href="+420774026207"><b>+420&nbsp;774&nbsp;026&nbsp;207</b></a>, nebo na email: <a href="mailto:info@zorrak.cz"><b>info@zorrak.cz</b></a>.</p>
    </div>
  </div>
</div>
</section>
</template>
<script>
export default {
  props: ['text'],
}
</script>
