const SPONSOR_LOGOS = [
  'assets/images/sponsors/LINE_ALBUM_スポンサーロゴ_260729_1.jpg',
  'assets/images/sponsors/LINE_ALBUM_スポンサーロゴ_260729_2.jpg',
  'assets/images/sponsors/LINE_ALBUM_スポンサーロゴ_260729_3.jpg',
  'assets/images/sponsors/LINE_ALBUM_スポンサーロゴ_260729_4.jpg',
  'assets/images/sponsors/LINE_ALBUM_スポンサーロゴ_260729_5.jpg',
  'assets/images/sponsors/LINE_ALBUM_スポンサーロゴ_260729_6.jpg',
  'assets/images/sponsors/LINE_ALBUM_スポンサーロゴ_260729_7.jpg',
  'assets/images/sponsors/LINE_ALBUM_スポンサーロゴ_260729_8.jpg',
  'assets/images/sponsors/LINE_ALBUM_スポンサーロゴ_260729_9.jpg',
  'assets/images/sponsors/LINE_ALBUM_スポンサーロゴ_260729_10.jpg',
  'assets/images/sponsors/LINE_ALBUM_スポンサーロゴ_260729_11.jpg',
  'assets/images/sponsors/LINE_ALBUM_スポンサーロゴ_260729_12.jpg',
  'assets/images/sponsors/LINE_ALBUM_スポンサーロゴ_260729_13.jpg',
  'assets/images/sponsors/LINE_ALBUM_スポンサーロゴ_260729_14.jpg',
  'assets/images/sponsors/LINE_ALBUM_スポンサーロゴ_260729_15.jpg',
  'assets/images/sponsors/LINE_ALBUM_スポンサーロゴ_260729_16.jpg',
  'assets/images/sponsors/LINE_ALBUM_スポンサーロゴ_260729_17.jpg',
  'assets/images/sponsors/LINE_ALBUM_スポンサーロゴ_260729_18.jpg',
  'assets/images/sponsors/LINE_ALBUM_スポンサーロゴ_260729_19.jpg',
  'assets/images/sponsors/LINE_ALBUM_スポンサーロゴ_260729_20.jpg',
  'assets/images/sponsors/LINE_ALBUM_スポンサーロゴ_260729_21.jpg',
  'assets/images/sponsors/LINE_ALBUM_スポンサーロゴ_260729_22.jpg',
  'assets/images/sponsors/LINE_ALBUM_スポンサーロゴ_260729_23.jpg',
];

function renderSponsorItem(src, index) {
  return `<div class="sponsor-item">
    <img
      src="${src}"
      alt="協賛企業ロゴ ${index}"
      loading="lazy"
    />
  </div>`;
}

function renderSponsorSet(logos, hidden = false) {
  const hiddenAttr = hidden ? ' aria-hidden="true"' : '';
  return `<div class="sponsor-marquee-set"${hiddenAttr}>${logos
    .map((src, index) => renderSponsorItem(src, index + 1))
    .join('')}</div>`;
}

function initSponsorGrid() {
  const grid = document.getElementById('sponsor-grid');
  if (grid) {
    grid.innerHTML = SPONSOR_LOGOS.map((src, index) =>
      renderSponsorItem(src, index + 1),
    ).join('');
  }

  const track = document.getElementById('sponsor-marquee-track');
  if (track) {
    track.innerHTML =
      renderSponsorSet(SPONSOR_LOGOS) + renderSponsorSet(SPONSOR_LOGOS, true);
  }
}

initSponsorGrid();
