<template>
  <article class="left-panel-content">
    <header class="content-info">
      <h2 class="place-name">Paraíso Insular</h2>
      <div class="star-division">Star 4.8</div>
    </header>

    <div class="content-sub-info">
      <h4>Santorini, Grécia</h4>
      <div>R$350/Dia</div>
    </div>

    <figure class="img-wrapper">
      <img
        src="https://th.bing.com/th/id/R.c1203a5aac491ae65df14be283e570a9?rik=VA3Gz2m6Lg7hrA&pid=ImgRaw&r=0"
        alt="Costa da Cidade de Santorini ao entardecer."
        class="place-image"
      />
    </figure>

    <div class="place-description">
      <h3>Sobre o imóvel</h3>
      <p>
        O mundo é repleto de beleza, mas existem poucas coisas tão belas quanto
        uma mansão luxuosa beira-mar na Grécia.
      </p>
    </div>

    <div class="host-card">
      <img
        src="https://th.bing.com/th/id/OIP.lzECLwvnyWXogFBUYWQ4UAHaJQ?pid=ImgDet&rs=1"
        alt="Homem branco de cabelo curto sorrindo em foto de perfil."
        width="82px"
      />
      <h3>
        <span class="host-name">Carlos Sérgio Garoto</span> é seu anfitrião
      </h3>
    </div>
  </article>
</template>

<style>
.place-name {
  margin: 0;
  font-size: 24px;
}

.star-division {
  font-size: 20px;
}

.content-sub-info {
  font-size: 20px;
}

.content-sub-info h4 {
  font-weight: 400;
}

.img-wrapper {
  margin: 0;
}

.place-image {
  max-width: 100%;
  border-radius: 5px;
}

.place-description h3 {
  font-size: 20px;
}

.place-description p {
  font-size: 16px;
}

.host-card {
  border: 3px solid #f15152;
  border-radius: 5px;
  padding: 26px 36px;
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-bottom: 44px;
}

.host-card img {
  width: 82px;
  height: 82px;
  border-radius: 100%;
  object-fit: cover;
  margin-right: 36px;
}

.host-card .host-name {
  color: #f15152;
}

.content-info {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
}

.content-sub-info {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
}
</style>
